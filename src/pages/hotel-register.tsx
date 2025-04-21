
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { toast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { HotelRegistrationForm } from "@/components/form/hotel-registration-form";
import { validateHotelForm } from "@/lib/validation/hotel-form";
import type { HotelFormData } from "@/types/hotel-form";

const HotelRegister = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (formData: HotelFormData) => {
    // Reset form errors
    setFormError(null);
    
    // Validate form
    const validationErrors = validateHotelForm(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;
    
    setLoading(true);
    
    try {
      // 1. Register the user with Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            organization_type: 'hotel',
            organization_name: formData.hotelName,
            contact_name: formData.contactName,
          },
        },
      });
      
      if (authError) {
        if (authError.message.includes("rate_limit")) {
          setFormError("Too many registration attempts. Please try again later.");
        } else if (authError.message.includes("already")) {
          setFormError("An account with this email already exists.");
        } else {
          setFormError(authError.message || "Registration failed. Please try again.");
        }
        throw authError;
      }
      
      if (authData.user) {
        // 2. Add the profile data
        const { error: profileError } = await supabase
          .from('profiles')
          .insert({
            id: authData.user.id,
            organization_type: 'hotel',
            organization_name: formData.hotelName,
            contact_name: formData.contactName,
            phone: formData.phone,
            address: formData.address,
            city: formData.city,
            postal_code: formData.postalCode,
            business_license: formData.businessLicense,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          });
          
        if (profileError) {
          console.error("Profile creation error:", profileError);
          
          // More descriptive error handling
          if (profileError.code === "23505") { // Unique violation
            setFormError("This account already exists. Please log in instead.");
          } else if (profileError.code === "42501") { // Permission denied (RLS issue)
            setFormError("Error creating profile: " + profileError.message + ". Please try again or contact support.");
          } else if (profileError.code === "42P01") { // Undefined table
            setFormError("System error: Unable to create profile (table not found). Please contact support.");
          } else if (profileError.code === "23503") { // Foreign key violation
            setFormError("System error: Unable to link profile to account. Please contact support.");
          } else {
            setFormError(`Error creating profile: ${profileError.message}. Please try again or contact support.`);
          }
          
          // Try to clean up by signing out if profile creation failed
          try {
            await supabase.auth.signOut();
          } catch (cleanupError) {
            console.error("Failed to clean up after profile creation error:", cleanupError);
          }
          
          throw profileError;
        }
        
        // Sign out the user after successful registration so they can login explicitly
        await supabase.auth.signOut();
        
        toast({
          title: "Registration successful!",
          description: "Your hotel account has been created. You can now log in.",
        });
        
        navigate('/login');
      }
    } catch (error: any) {
      console.error("Registration error:", error);
      // Don't show toast if we've already set a specific form error
      if (!formError) {
        setFormError(error.message || "There was an error creating your account. Please try again.");
        toast({
          title: "Registration failed",
          description: error.message || "There was an error creating your account. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <div className="container mx-auto px-4 py-12 flex-1">
        <div className="max-w-3xl mx-auto">
          <Link to="/register" className="text-success hover:underline mb-4 inline-block">
            &larr; Back to registration options
          </Link>

          <h1 className="text-3xl font-bold text-center mb-8">Hotel Registration</h1>
          
          <HotelRegistrationForm 
            onSubmit={handleSubmit}
            loading={loading}
            formError={formError}
            errors={errors}
          />

          <p className="text-center mt-6 text-sm text-muted-foreground">
            Already have an account? <Link to="/login" className="text-success hover:underline">Log in here</Link>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HotelRegister;
