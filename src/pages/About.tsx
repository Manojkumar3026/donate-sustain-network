
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { Info } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-1">
        <section className="py-16 bg-gradient-to-b from-secondary/30 to-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center mb-8 gap-3">
              <Info className="text-success" size={32} />
              <h1 className="text-4xl font-bold">About DonateConnect</h1>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                <b>DonateConnect</b> is a digital platform dedicated to reducing food waste and supporting communities in need. We bridge the gap between hotels with surplus food and verified NGOs that distribute resources to the less fortunate.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
              <p className="text-muted-foreground mb-6">
                At DonateConnect, our mission is to create a world where no food goes to waste while people go hungry. 
                We believe that by connecting businesses that have excess food with organizations that serve those in need, 
                we can make a meaningful impact on both food waste reduction and hunger alleviation.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-6">
                DonateConnect was founded in 2023 after our team witnessed firsthand the shocking amount of quality food being 
                discarded by hotels and restaurants, while nearby communities struggled with food insecurity. 
                We set out to build a platform that would make food donation simple, efficient, and rewarding for all parties involved.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Our Impact</h2>
              <p className="text-muted-foreground mb-6">
                Since our launch, DonateConnect has facilitated the donation of over 10,000 meals, 
                connecting 50+ hotel partners with 25+ NGO partners across multiple cities. 
                This has prevented more than 5,000 kg of food waste and the associated environmental impact.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Our Team</h2>
              <p className="text-muted-foreground mb-6">
                Our dedicated team brings together expertise in hospitality, non-profit management, 
                technology, and sustainability. We are passionate about creating meaningful connections 
                and streamlining the donation process to make giving back as effortless as possible.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
