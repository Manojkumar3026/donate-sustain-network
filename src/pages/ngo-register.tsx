
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Database } from "@/types/database.types";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

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
      // 1. Register the user with Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
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
          .upsert({
            id: authData.user.id,
            organization_type: 'ngo',
            organization_name: formData.ngoName,
            contact_name: formData.contactName,
            phone: formData.phone,
            address: formData.address,
            city: formData.city,
            postal_code: formData.postalCode,
            registration_number: formData.registrationNumber,
            service_area: formData.serviceArea,
          } as Database['public']['Tables']['profiles']['Insert']);
          
        if (profileError) {
          setFormError("Error creating profile. Please contact support.");
          throw profileError;
        }
        
        toast({
          title: "Registration successful!",
          description: "Your NGO account has been created. You can now log in.",
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

          <h1 className="text-3xl font-bold text-center mb-8">NGO Registration</h1>
          
          <Card>
            <CardHeader>
              <CardTitle>NGO Registration</CardTitle>
              <CardDescription>
                Register your NGO to receive food donations and distribute them to those in need.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {formError && (
                <Alert variant="destructive" className="mb-6">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{formError}</AlertDescription>
                </Alert>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="ngoName" className={errors.ngoName ? "text-destructive" : ""}>
                      Organization Name {errors.ngoName && <span className="text-xs">({errors.ngoName})</span>}
                    </Label>
                    <Input 
                      id="ngoName" 
                      placeholder="Enter your NGO's name"
                      value={formData.ngoName}
                      onChange={handleChange}
                      className={errors.ngoName ? "border-destructive" : ""}
                      required 
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="contactName" className={errors.contactName ? "text-destructive" : ""}>
                        Contact Person {errors.contactName && <span className="text-xs">({errors.contactName})</span>}
                      </Label>
                      <Input 
                        id="contactName" 
                        placeholder="Full name"
                        value={formData.contactName}
                        onChange={handleChange}
                        className={errors.contactName ? "border-destructive" : ""}
                        required 
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className={errors.phone ? "text-destructive" : ""}>
                        Phone Number {errors.phone && <span className="text-xs">({errors.phone})</span>}
                      </Label>
                      <Input 
                        id="phone" 
                        placeholder="Phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        className={errors.phone ? "border-destructive" : ""}
                        required 
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email" className={errors.email ? "text-destructive" : ""}>
                      Email Address {errors.email && <span className="text-xs">({errors.email})</span>}
                    </Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Email address"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? "border-destructive" : ""}
                      required 
                    />
                  </div>
                  <div>
                    <Label htmlFor="password" className={errors.password ? "text-destructive" : ""}>
                      Password {errors.password && <span className="text-xs">({errors.password})</span>}
                    </Label>
                    <Input 
                      id="password" 
                      type="password" 
                      placeholder="Create a password"
                      value={formData.password}
                      onChange={handleChange}
                      className={errors.password ? "border-destructive" : ""}
                      required 
                    />
                  </div>
                  <div>
                    <Label htmlFor="address" className={errors.address ? "text-destructive" : ""}>
                      Organization Address {errors.address && <span className="text-xs">({errors.address})</span>}
                    </Label>
                    <Input 
                      id="address" 
                      placeholder="Street address"
                      value={formData.address}
                      onChange={handleChange}
                      className={errors.address ? "border-destructive" : ""}
                      required 
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city" className={errors.city ? "text-destructive" : ""}>
                        City {errors.city && <span className="text-xs">({errors.city})</span>}
                      </Label>
                      <Input 
                        id="city" 
                        placeholder="City"
                        value={formData.city}
                        onChange={handleChange}
                        className={errors.city ? "border-destructive" : ""}
                        required 
                      />
                    </div>
                    <div>
                      <Label htmlFor="postalCode" className={errors.postalCode ? "text-destructive" : ""}>
                        Postal Code {errors.postalCode && <span className="text-xs">({errors.postalCode})</span>}
                      </Label>
                      <Input 
                        id="postalCode" 
                        placeholder="Postal code"
                        value={formData.postalCode}
                        onChange={handleChange}
                        className={errors.postalCode ? "border-destructive" : ""}
                        required 
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="registrationNumber" className={errors.registrationNumber ? "text-destructive" : ""}>
                      Registration Number {errors.registrationNumber && <span className="text-xs">({errors.registrationNumber})</span>}
                    </Label>
                    <Input 
                      id="registrationNumber" 
                      placeholder="For verification purposes"
                      value={formData.registrationNumber}
                      onChange={handleChange}
                      className={errors.registrationNumber ? "border-destructive" : ""}
                      required 
                    />
                  </div>
                  <div>
                    <Label htmlFor="serviceArea" className={errors.serviceArea ? "text-destructive" : ""}>
                      Service Area {errors.serviceArea && <span className="text-xs">({errors.serviceArea})</span>}
                    </Label>
                    <Input 
                      id="serviceArea" 
                      placeholder="Areas you serve"
                      value={formData.serviceArea}
                      onChange={handleChange}
                      className={errors.serviceArea ? "border-destructive" : ""}
                      required 
                    />
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex items-center">
                    <Input 
                      id="terms" 
                      type="checkbox" 
                      className={`w-4 h-4 ${errors.terms ? "border-destructive" : ""}`}
                      checked={formData.terms}
                      onChange={handleChange}
                      required 
                    />
                    <Label htmlFor="terms" className={`ml-2 text-sm ${errors.terms ? "text-destructive" : ""}`}>
                      I agree to the terms and conditions {errors.terms && <span className="text-xs">({errors.terms})</span>}
                    </Label>
                  </div>
                  <div className="flex items-center">
                    <Input 
                      id="updates" 
                      type="checkbox" 
                      className="w-4 h-4"
                      checked={formData.updates}
                      onChange={handleChange}
                    />
                    <Label htmlFor="updates" className="ml-2 text-sm">
                      Send me updates about available donations
                    </Label>
                  </div>
                </div>

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
