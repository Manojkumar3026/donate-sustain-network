
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";

const Register = () => {
  const [userType, setUserType] = useState<"hotel" | "ngo">("hotel");
  const navigate = useNavigate();

  const handleContinue = () => {
    if (userType === "hotel") {
      navigate("/hotel-register");
    } else {
      navigate("/ngo-register");
    }
    
    toast({
      title: `Continuing to ${userType} registration`,
      description: "Please complete your registration details",
    });
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
                <CardContent className="space-y-4">
                  <p>
                    Hotels play a crucial role in our food donation network. By registering, you'll be able to:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Easily post information about available excess food</li>
                    <li>Coordinate pickup times with verified NGOs</li>
                    <li>Track your donation history and impact</li>
                    <li>Receive tax deduction receipts for your donations</li>
                  </ul>
                  <Button onClick={handleContinue} className="w-full mt-4">Continue as Hotel</Button>
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
                <CardContent className="space-y-4">
                  <p>
                    NGOs are essential partners in our mission to reduce food waste and hunger. By registering, you'll be able to:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Get real-time notifications about available food donations</li>
                    <li>Coordinate pickup times with hotel partners</li>
                    <li>Track donation history and distribution records</li>
                    <li>Share impact stories with donors and the community</li>
                  </ul>
                  <Button onClick={handleContinue} className="w-full mt-4">Continue as NGO</Button>
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
