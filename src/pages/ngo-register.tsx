import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { FormError } from "@/components/form/form-error";
import { NgoFormBasicInfo } from "@/components/ngo/ngo-form-basic-info";
import { NgoFormCredentials } from "@/components/ngo/ngo-form-credentials";
import { NgoFormAddress } from "@/components/ngo/ngo-form-address";
import { NgoFormAdditionalInfo } from "@/components/ngo/ngo-form-additional-info";

const NgoRegister = () => {
  const [formData, setFormData] = useState({
    ngoName: "",
    contactName: "",
    phone: "",
    email: "",
    password: "",
    address: "",
    city: "",
    postalCode: "",
    registrationNumber: "",
    serviceArea: "",
    terms: false,
    updates: false,
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value,
    });
    
    // Clear field-specific error when user starts typing
    if (errors[id]) {
      setErrors(prev => {
        const newErrors = {...prev};
        delete newErrors[id];
        return newErrors;
      });
    }
    
    // Clear form error when user changes any field
    if (formError) {
      setFormError(null);
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.ngoName.trim()) newErrors.ngoName = "Organization name is required";
    if (!formData.contactName.trim()) newErrors.contactName = "Contact name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.postalCode.trim()) newErrors.postalCode = "Postal code is required";
    if (!formData.registrationNumber.trim()) newErrors.registrationNumber = "Registration number is required";
    if (!formData.serviceArea.trim()) newErrors.serviceArea = "Service area is required";
    
    if (!formData.terms) newErrors.terms = "You must agree to the terms";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset form errors
    setFormError(null);
    
    // Validate form
    if (!validateForm()) return;
    
    setLoading(true);
    
    try {
      // Register the user with Supabase Auth with metadata
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            organization_type: 'ngo',
            organization_name: formData.ngoName,
            contact_name: formData.contactName,
            phone: formData.phone,
            address: formData.address,
            city: formData.city,
            postal_code: formData.postalCode,
            registration_number: formData.registrationNumber,
            service_area: formData.serviceArea,
          }
        }
      });
      
      if (authError) {
        if (authError.message.includes("rate_limit")) {
          setFormError("Too many registration attempts. Please try again later.");
        } else if (authError.message.includes("already")) {
          setFormError("An account with this email already exists.");
        } else {
          setFormError(authError.message || "Registration failed. Please try again.");
        }
        console.error("Authentication error:", authError);
        return;
      }
      
      if (authData.user) {
        toast({
          title: "Registration successful!",
          description: "Your NGO account has been created. You can now log in.",
        });
        
        navigate('/login');
      } else {
        setFormError("Something went wrong during registration. Please try again.");
      }
    } catch (error: any) {
      console.error("Registration error:", error);
      setFormError(error.message || "There was an error creating your account. Please try again.");
      toast({
        title: "Registration failed",
        description: error.message || "There was an error creating your account. Please try again.",
        variant: "destructive",
      });
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

          <h1 className="text-3xl font-bold text-center mb-8">NGO Registration</h1>
          
          <Card>
            <CardHeader>
              <CardTitle>NGO Registration</CardTitle>
              <CardDescription>
                Register your NGO to receive food donations and distribute them to those in need.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {formError && <FormError error={formError} />}

              <form onSubmit={handleSubmit} className="space-y-6">
                <NgoFormBasicInfo 
                  formData={formData}
                  errors={errors}
                  handleChange={handleChange}
                />
                
                <NgoFormCredentials 
                  formData={formData}
                  errors={errors}
                  handleChange={handleChange}
                />
                
                <NgoFormAddress 
                  formData={formData}
                  errors={errors}
                  handleChange={handleChange}
                />
                
                <Separator />
                
                <NgoFormAdditionalInfo 
                  formData={formData}
                  errors={errors}
                  handleChange={handleChange}
                />

                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Registering..." : "Register as NGO"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <p className="text-center mt-6 text-sm text-muted-foreground">
            Already have an account? <Link to="/login" className="text-success hover:underline">Log in here</Link>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NgoRegister;
