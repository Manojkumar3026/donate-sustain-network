
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { BookOpen, Hotel, Users, Calendar, Truck, BarChart3 } from "lucide-react";

const HowItWorks = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-1">
        <section className="py-16 bg-gradient-to-b from-secondary/30 to-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center mb-8 gap-3">
              <BookOpen className="text-success" size={32} />
              <h1 className="text-4xl font-bold">How DonateConnect Works</h1>
            </div>
            
            <p className="text-lg text-muted-foreground mb-12">
              Our platform makes it easy to connect hotels with excess food to NGOs that need it.
              Here's a step-by-step guide to how our donation process works:
            </p>
            
            <div className="space-y-16">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="bg-success/10 rounded-full p-6 md:p-8">
                  <Hotel className="w-12 h-12 md:w-16 md:h-16 text-success" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-4">1. Hotel and NGO Registration</h2>
                  <p className="text-muted-foreground">
                    Hotels and NGOs sign up on our platform and complete a verification process. 
                    Hotels provide details about their business, while NGOs share information about
                    their service areas and capacity. Our team verifies all accounts to ensure security
                    and accountability within our network.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="bg-success/10 rounded-full p-6 md:p-8">
                  <Calendar className="w-12 h-12 md:w-16 md:h-16 text-success" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-4">2. Making & Managing Donations</h2>
                  <p className="text-muted-foreground">
                    Hotels list their surplus food via our easy-to-use dashboard, specifying food type, 
                    quantity, expiration dates, and available pickup times. NGOs can browse all available 
                    donations to find what best matches their needs and capacity.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="bg-success/10 rounded-full p-6 md:p-8">
                  <Users className="w-12 h-12 md:w-16 md:h-16 text-success" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-4">3. Claiming & Scheduling</h2>
                  <p className="text-muted-foreground">
                    NGOs can quickly claim available donations and schedule pickups that work with both 
                    parties' schedules. Our system sends automatic notifications and reminders to ensure 
                    smooth coordination between donors and recipients.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="bg-success/10 rounded-full p-6 md:p-8">
                  <Truck className="w-12 h-12 md:w-16 md:h-16 text-success" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-4">4. Pickup and Confirmation</h2>
                  <p className="text-muted-foreground">
                    Once the food is collected, hotels confirm the handover in the system. Digital receipts 
                    and notifications are automatically sent to both parties, creating a clear record of the 
                    transaction and facilitating tax documentation for the donor.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="bg-success/10 rounded-full p-6 md:p-8">
                  <BarChart3 className="w-12 h-12 md:w-16 md:h-16 text-success" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-4">5. Distribution and Impact Tracking</h2>
                  <p className="text-muted-foreground">
                    NGOs track the final distribution of donated food through our platform, reporting how 
                    many meals were served and people reached. This creates a complete picture of each 
                    donation's impact, from hotel to hungry person, with measurable metrics on food waste 
                    reduction and community support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HowItWorks;
