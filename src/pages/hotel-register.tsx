
import { useState } from "react";
import { Link } from "react-router-dom";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/components/ui/use-toast";

const HotelRegister = () => {
  const [formData, setFormData] = useState({
    hotelName: "",
    contactName: "",
    phone: "",
    email: "",
    password: "",
    address: "",
    city: "",
    postalCode: "",
    businessLicense: "",
    terms: false,
    updates: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd handle form submission here
    console.log("Hotel registration submitted", formData);
    toast({
      title: "Registration submitted",
      description: "Thank you for registering your hotel!",
    });
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
          
          <Card>
            <CardHeader>
              <CardTitle>Hotel Registration</CardTitle>
              <CardDescription>
                Register your hotel to donate excess food and reduce waste while making a positive impact.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="hotelName">Hotel Name</Label>
                    <Input 
                      id="hotelName" 
                      placeholder="Enter your hotel's name"
                      value={formData.hotelName}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="contactName">Contact Person</Label>
                      <Input 
                        id="contactName" 
                        placeholder="Full name"
                        value={formData.contactName}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone" 
                        placeholder="Phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Email address"
                      value={formData.email}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div>
                    <Label htmlFor="password">Password</Label>
                    <Input 
                      id="password" 
                      type="password" 
                      placeholder="Create a password"
                      value={formData.password}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div>
                    <Label htmlFor="address">Hotel Address</Label>
                    <Input 
                      id="address" 
                      placeholder="Street address"
                      value={formData.address}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input 
                        id="city" 
                        placeholder="City"
                        value={formData.city}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                    <div>
                      <Label htmlFor="postalCode">Postal Code</Label>
                      <Input 
                        id="postalCode" 
                        placeholder="Postal code"
                        value={formData.postalCode}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="businessLicense">Business License Number</Label>
                    <Input 
                      id="businessLicense" 
                      placeholder="For verification purposes"
                      value={formData.businessLicense}
                      onChange={handleChange}
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
                      className="w-4 h-4"
                      checked={formData.terms}
                      onChange={handleChange}
                      required 
                    />
                    <Label htmlFor="terms" className="ml-2 text-sm">
                      I agree to the terms and conditions
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
                      Send me updates about donations and impact
                    </Label>
                  </div>
                </div>

                <Button type="submit" className="w-full">Register as Hotel</Button>
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

export default HotelRegister;
