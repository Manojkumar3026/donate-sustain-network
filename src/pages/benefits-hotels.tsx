
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const BenefitsHotels = () => {
  const benefits = [
    {
      title: "Reduce Food Waste",
      description: "Turn excess food into a positive impact by donating instead of discarding."
    },
    {
      title: "Enhance Brand Image",
      description: "Demonstrate your commitment to sustainability and community support."
    },
    {
      title: "Tax Benefits",
      description: "Qualify for tax deductions for charitable food donations."
    },
    {
      title: "Simplified Donation Process",
      description: "Easy-to-use platform for quick listing and management of donations."
    },
    {
      title: "Automatic Documentation",
      description: "Generate reports and receipts for all donations for your records."
    },
    {
      title: "Community Impact",
      description: "Make a meaningful difference in the lives of those facing food insecurity."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <div className="container mx-auto px-4 py-12 flex-1">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Benefits for Hotels</h1>
          
          <p className="text-lg text-muted-foreground mb-8">
            Partnering with DonateConnect offers numerous advantages for hotels looking to make a positive impact while optimizing their operations.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <Check className="h-5 w-5 text-success" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-success-light/10 rounded-lg p-6 border border-success/20">
            <h2 className="text-xl font-bold mb-4">Ready to Make a Difference?</h2>
            <p className="text-muted-foreground mb-4">
              Join our growing network of hotel partners and start turning excess food into positive community impact.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/hotel-register" className="bg-success hover:bg-success-dark text-white px-4 py-2 rounded transition-colors">
                Register as Hotel
              </Link>
              <Link to="/how-it-works" className="text-success hover:text-success-dark underline">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BenefitsHotels;
