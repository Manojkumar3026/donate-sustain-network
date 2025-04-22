
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const BenefitsNgos = () => {
  const benefits = [
    {
      title: "Reliable Food Sources",
      description: "Access a consistent supply of quality food from verified hotel partners."
    },
    {
      title: "Real-Time Notifications",
      description: "Receive immediate alerts when new donations become available in your area."
    },
    {
      title: "Simplified Logistics",
      description: "Streamlined pickup scheduling and confirmation process."
    },
    {
      title: "Distribution Tracking",
      description: "Tools to help manage and report on food distribution and impact."
    },
    {
      title: "Donor Relationships",
      description: "Build lasting connections with hotels and food providers in your community."
    },
    {
      title: "Resource Management",
      description: "Better planning and allocation of your organization's time and resources."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <div className="container mx-auto px-4 py-12 flex-1">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Benefits for NGOs</h1>
          
          <p className="text-lg text-muted-foreground mb-8">
            DonateConnect empowers NGOs with tools and resources to efficiently source and distribute food to those in need.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <Check className="h-5 w-5 text-earth" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-earth/10 rounded-lg p-6 border border-earth/20">
            <h2 className="text-xl font-bold mb-4">Join Our Network Today</h2>
            <p className="text-muted-foreground mb-4">
              Connect with local hotels and secure reliable food donations for your community service efforts.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/ngo-register" className="bg-earth hover:bg-earth/80 text-white px-4 py-2 rounded transition-colors">
                Register as NGO
              </Link>
              <Link to="/how-it-works" className="text-earth hover:text-earth/80 underline">
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

export default BenefitsNgos;
