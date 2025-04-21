
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
    setFormError(null);
    setErrors({});
    
    // Validate form
    const validationErrors = validateHotelForm(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;
    
    setLoading(true);
    
    try {
      // First check if user already exists
      const { data: existingUser, error: checkError } = await supabase.auth.admin.getUserByEmail(formData.email);
      
      if (existingUser) {
        setFormError("An account with this email already exists. Please log in instead.");
        setLoading(false);
        return;
      }

      // Proceed with registration if user doesn't exist
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            organization_type: 'hotel',
            organization_name: formData.hotelName,
            contact_name: formData.contactName,
            phone: formData.phone,
            address: formData.address,
            city: formData.city,
            postal_code: formData.postalCode,
            business_license: formData.businessLicense
          }
        }
      });

      if (authError) {
        console.error("Auth error:", authError);
        if (authError.message.includes("already registered")) {
          setFormError("An account with this email already exists. Please log in instead.");
        } else {
          setFormError(authError.message || "Registration failed. Please try again.");
        }
        return;
      }

      if (!authData.user) {
        setFormError("Registration failed. Please try again.");
        return;
      }

      toast({
        title: "Registration successful!",
        description: "Please check your email to verify your account before logging in.",
      });

      // Sign out the user after successful registration
      await supabase.auth.signOut();
      navigate('/login');

    } catch (error: any) {
      console.error("Registration error:", error);
      setFormError("An unexpected error occurred. Please try again.");
      
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
