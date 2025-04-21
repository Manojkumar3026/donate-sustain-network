import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Info, BookOpen, Phone, Mail } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-success-light/10 to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Reducing Food Waste, Feeding Communities</h1>
              <p className="text-lg text-muted-foreground">
                Connect hotels with excess food to NGOs that feed those in need.
                Simple, efficient, and impactful.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button asChild size="lg">
                  <Link to="/register">Join the Network</Link>
                </Button>
                <Button variant="outline" size="lg">
                  <Link to="/how-it-works">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="flex-1 mt-8 md:mt-0">
              <img 
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                alt="Food donation" 
                className="rounded-lg shadow-lg w-full" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border text-center">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-success">1</span>
              </div>
              <h3 className="text-xl font-medium mb-3">Hotels Post Donations</h3>
              <p className="text-muted-foreground">Hotels with excess food can quickly create listings for available donations.</p>
            </div>
            <div className="bg-white p-6 rounded-lg border text-center">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-success">2</span>
              </div>
              <h3 className="text-xl font-medium mb-3">NGOs Find & Claim</h3>
              <p className="text-muted-foreground">NGOs browse available donations and claim what they need for their communities.</p>
            </div>
            <div className="bg-white p-6 rounded-lg border text-center">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-success">3</span>
              </div>
              <h3 className="text-xl font-medium mb-3">Pick Up & Distribute</h3>
              <p className="text-muted-foreground">NGOs collect the food and distribute to those in need, tracking impact along the way.</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button asChild>
              <Link to="/how-it-works">Learn More About The Process</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-earth/5 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Our Impact</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Together, we're making a difference in communities while reducing food waste.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg border text-center shadow-sm">
              <div className="text-3xl font-bold text-success mb-2">10,000+</div>
              <div className="text-sm text-muted-foreground">Meals Saved</div>
            </div>
            <div className="bg-white p-6 rounded-lg border text-center shadow-sm">
              <div className="text-3xl font-bold text-success mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Hotel Partners</div>
            </div>
            <div className="bg-white p-6 rounded-lg border text-center shadow-sm">
              <div className="text-3xl font-bold text-success mb-2">25+</div>
              <div className="text-sm text-muted-foreground">NGO Partners</div>
            </div>
            <div className="bg-white p-6 rounded-lg border text-center shadow-sm">
              <div className="text-3xl font-bold text-success mb-2">5,000 kg</div>
              <div className="text-sm text-muted-foreground">Food Waste Prevented</div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-success to-success-dark rounded-lg p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Network Today</h2>
            <p className="max-w-2xl mx-auto mb-8 text-white/90">
              Whether you're a hotel looking to reduce food waste or an NGO feeding those in need, 
              our platform connects you quickly and easily.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="secondary" size="lg">
                <Link to="/hotel-register">Register as Hotel</Link>
              </Button>
              <Button asChild variant="outline" className="bg-transparent text-white border-white hover:bg-white/10" size="lg">
                <Link to="/ngo-register">Register as NGO</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Partners Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg border">
              <p className="italic text-muted-foreground mb-4">
                "DonateConnect has transformed how we handle excess food. Instead of throwing it away, 
                we can now easily connect with local NGOs and make a real difference in our community."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-success/20 rounded-full"></div>
                <div>
                  <p className="font-medium">Sarah Johnson</p>
                  <p className="text-sm text-muted-foreground">Grand Hotel Manager</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border">
              <p className="italic text-muted-foreground mb-4">
                "As a small NGO, finding consistent food sources was always challenging. This platform has 
                been a game-changer for us, allowing us to help more people with better quality food."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-earth/20 rounded-full"></div>
                <div>
                  <p className="font-medium">Michael Rodriguez</p>
                  <p className="text-sm text-muted-foreground">Community Care Foundation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gradient-to-b from-secondary/30 to-white border-t">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex items-center mb-6 gap-3">
            <Info className="text-success" size={32} />
            <h2 className="text-3xl font-bold">About DonateConnect</h2>
          </div>
          <p className="text-lg text-muted-foreground mb-4">
            <b>DonateConnect</b> is a digital platform dedicated to reducing food waste and supporting communities in need. We bridge the gap between hotels with surplus food and verified NGOs that distribute resources to the less fortunate. Our network fosters efficient, transparent, and secure food donation—from sourcing to distribution—making a real impact in the fight against hunger and waste.
          </p>
          <p className="text-lg text-muted-foreground">
            By connecting businesses and charities, we empower organizations to make giving effortless and create measurable positive change, meal by meal.
          </p>
        </div>
      </section>

      {/* Detailed How It Works Section */}
      <section className="py-16 bg-white border-t">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center mb-6 gap-3">
            <BookOpen className="text-success" size={32} />
            <h2 className="text-3xl font-bold">How DonateConnect Works</h2>
          </div>
          <div className="space-y-6 text-muted-foreground">
            <div>
              <b>1. Hotel and NGO Registration:</b>
              <p>
                Hotels and NGOs sign up and are securely verified by our team. Hotels provide details about their business, while NGOs share their service areas and capacity.
              </p>
            </div>
            <div>
              <b>2. Making & Managing Donations:</b>
              <p>
                Hotels list surplus food via our dashboard, specifying type, quantity, expiration, and pickup times. NGOs can browse all live donations to find what best matches their needs.
              </p>
            </div>
            <div>
              <b>3. Claiming & Scheduling:</b>
              <p>
                NGOs quickly claim available donations and schedule pickups, ensuring freshness and efficient delivery to communities.
              </p>
            </div>
            <div>
              <b>4. Pickup and Confirmation:</b>
              <p>
                Once collected, hotels confirm the handover; receipts and notifications are sent to both parties, creating a clear record and facilitating tax documentation.
              </p>
            </div>
            <div>
              <b>5. Distribution and Impact Tracking:</b>
              <p>
                NGOs track the final distribution and report back, so every donation is counted towards real progress—in meals served and waste prevented.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-t from-success-light/10 to-white border-t">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex items-center mb-6 gap-3">
            <Phone className="text-success" size={32} />
            <h2 className="text-3xl font-bold">Contact DonateConnect</h2>
          </div>
          <div className="mb-4 text-lg text-muted-foreground">
            We'd love to hear from you. Reach out for support, partnership, or general questions!
          </div>
          <div className="flex flex-col gap-4 text-base">
            <div className="flex items-center gap-2">
              <Mail className="text-success" size={20} />
              <span>Email: <a href="mailto:info@donateconnect.org" className="underline text-success">info@donateconnect.org</a></span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="text-success" size={20} />
              <span>Phone: <a href="tel:+11234567890" className="underline text-success">+1 (123) 456-7890</a></span>
            </div>
            <div className="flex items-center gap-2">
              <Info className="text-success" size={20} />
              <span>Registered Office: 123 Giving Lane, New City, Country</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
