
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Form } from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { FormError } from "@/components/form/form-error";
import { NgoFormBasicInfo } from "@/components/ngo/ngo-form-basic-info";
import { NgoFormCredentials } from "@/components/ngo/ngo-form-credentials";
import { NgoFormAddress } from "@/components/ngo/ngo-form-address";
import { NgoFormAdditionalInfo } from "@/components/ngo/ngo-form-additional-info";
import { useNgoForm } from "@/hooks/use-ngo-form";
import type { NgoFormData } from "@/lib/validation/ngo-form";

const NgoRegister = () => {
  const navigate = useNavigate();
  const form = useNgoForm();
  const [formError, setFormError] = useState<string | null>(null);

  const onSubmit = async (data: NgoFormData) => {
    setFormError(null);
    
    try {
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          data: {
            organization_type: 'ngo',
            organization_name: data.ngoName,
            contact_name: data.contactName,
            phone: data.phone,
            address: data.address,
            city: data.city,
            postal_code: data.postalCode,
            registration_number: data.registrationNumber,
            service_area: data.serviceArea,
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

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <NgoFormBasicInfo />
                  <NgoFormCredentials />
                  <NgoFormAddress />
                  <Separator />
                  <NgoFormAdditionalInfo />

                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? "Registering..." : "Register as NGO"}
                  </Button>
                </form>
              </Form>
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
