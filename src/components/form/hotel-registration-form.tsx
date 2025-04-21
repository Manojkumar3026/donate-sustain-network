
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { FormError } from "./form-error";
import { HotelFormData, HotelFormProps } from "@/types/hotel-form";
import { useState } from "react";

export const HotelRegistrationForm = ({ onSubmit, loading, formError, errors }: HotelFormProps) => {
  const [formData, setFormData] = useState<HotelFormData>({
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Hotel Registration</CardTitle>
        <CardDescription>
          Register your hotel to donate excess food and reduce waste while making a positive impact.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {formError && <FormError error={formError} />}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="hotelName" className={errors.hotelName ? "text-destructive" : ""}>
                Hotel Name {errors.hotelName && <span className="text-xs">({errors.hotelName})</span>}
              </Label>
              <Input 
                id="hotelName" 
                placeholder="Enter your hotel's name"
                value={formData.hotelName}
                onChange={handleChange}
                className={errors.hotelName ? "border-destructive" : ""}
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
                Hotel Address {errors.address && <span className="text-xs">({errors.address})</span>}
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
              <Label htmlFor="businessLicense" className={errors.businessLicense ? "text-destructive" : ""}>
                Business License Number {errors.businessLicense && <span className="text-xs">({errors.businessLicense})</span>}
              </Label>
              <Input 
                id="businessLicense" 
                placeholder="For verification purposes"
                value={formData.businessLicense}
                onChange={handleChange}
                className={errors.businessLicense ? "border-destructive" : ""}
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
                Send me updates about donations and impact
              </Label>
            </div>
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Registering..." : "Register as Hotel"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
