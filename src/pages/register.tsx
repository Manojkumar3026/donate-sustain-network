
import { useState } from "react";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const Register = () => {
  const [userType, setUserType] = useState<"hotel" | "ngo">("hotel");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd handle form submission here
    console.log(`${userType} registration submitted`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <div className="container mx-auto px-4 py-12 flex-1">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">Join DonateConnect</h1>
          
          <Tabs defaultValue="hotel" onValueChange={(value) => setUserType(value as "hotel" | "ngo")}>
            <TabsList className="grid grid-cols-2 mb-8">
              <TabsTrigger value="hotel">Register as Hotel</TabsTrigger>
              <TabsTrigger value="ngo">Register as NGO</TabsTrigger>
            </TabsList>
            
            <TabsContent value="hotel">
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
                        <Label htmlFor="hotel-name">Hotel Name</Label>
                        <Input id="hotel-name" placeholder="Enter your hotel's name" />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="contact-name">Contact Person</Label>
                          <Input id="contact-name" placeholder="Full name" />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input id="phone" placeholder="Phone number" />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" placeholder="Email address" />
                      </div>
                      <div>
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" placeholder="Create a password" />
                      </div>
                      <div>
                        <Label htmlFor="address">Hotel Address</Label>
                        <Input id="address" placeholder="Street address" />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="city">City</Label>
                          <Input id="city" placeholder="City" />
                        </div>
                        <div>
                          <Label htmlFor="postal-code">Postal Code</Label>
                          <Input id="postal-code" placeholder="Postal code" />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="business-license">Business License Number</Label>
                        <Input id="business-license" placeholder="For verification purposes" />
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Input id="terms" type="checkbox" className="w-4 h-4" />
                        <Label htmlFor="terms" className="ml-2 text-sm">
                          I agree to the terms and conditions
                        </Label>
                      </div>
                      <div className="flex items-center">
                        <Input id="updates" type="checkbox" className="w-4 h-4" />
                        <Label htmlFor="updates" className="ml-2 text-sm">
                          Send me updates about donations and impact
                        </Label>
                      </div>
                    </div>

                    <Button type="submit" className="w-full">Register as Hotel</Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="ngo">
              <Card>
                <CardHeader>
                  <CardTitle>NGO Registration</CardTitle>
                  <CardDescription>
                    Register your NGO to receive food donations and distribute them to those in need.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="ngo-name">Organization Name</Label>
                        <Input id="ngo-name" placeholder="Enter your NGO's name" />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="contact-name">Contact Person</Label>
                          <Input id="contact-name" placeholder="Full name" />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input id="phone" placeholder="Phone number" />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" placeholder="Email address" />
                      </div>
                      <div>
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" placeholder="Create a password" />
                      </div>
                      <div>
                        <Label htmlFor="address">Organization Address</Label>
                        <Input id="address" placeholder="Street address" />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="city">City</Label>
                          <Input id="city" placeholder="City" />
                        </div>
                        <div>
                          <Label htmlFor="postal-code">Postal Code</Label>
                          <Input id="postal-code" placeholder="Postal code" />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="registration-number">Registration Number</Label>
                        <Input id="registration-number" placeholder="For verification purposes" />
                      </div>
                      <div>
                        <Label htmlFor="service-area">Service Area</Label>
                        <Input id="service-area" placeholder="Areas you serve" />
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Input id="terms" type="checkbox" className="w-4 h-4" />
                        <Label htmlFor="terms" className="ml-2 text-sm">
                          I agree to the terms and conditions
                        </Label>
                      </div>
                      <div className="flex items-center">
                        <Input id="updates" type="checkbox" className="w-4 h-4" />
                        <Label htmlFor="updates" className="ml-2 text-sm">
                          Send me updates about available donations
                        </Label>
                      </div>
                    </div>

                    <Button type="submit" className="w-full">Register as NGO</Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <p className="text-center mt-6 text-sm text-muted-foreground">
            Already have an account? <a href="/login" className="text-success hover:underline">Log in here</a>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Register;
