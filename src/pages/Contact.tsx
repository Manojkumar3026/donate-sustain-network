
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent",
        description: "We've received your message and will get back to you soon.",
      });
      setName("");
      setEmail("");
      setMessage("");
      setSubmitting(false);
    }, 1000);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-1">
        <section className="py-16 bg-gradient-to-b from-secondary/30 to-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="flex items-center mb-8 gap-3">
              <Phone className="text-success" size={32} />
              <h1 className="text-4xl font-bold">Contact DonateConnect</h1>
            </div>
            
            <p className="text-lg text-muted-foreground mb-12">
              Have questions or want to learn more about our platform? 
              Reach out for support, partnership opportunities, or general inquiries.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
              <div className="space-y-8">
                <h2 className="text-2xl font-semibold">Get In Touch</h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                    <Input 
                      id="name" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name" 
                      required 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                    <Input 
                      id="email" 
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email" 
                      required 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                    <Textarea 
                      id="message" 
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="How can we help?" 
                      rows={5}
                      required 
                    />
                  </div>
                  
                  <Button type="submit" disabled={submitting} className="w-full">
                    {submitting ? "Sending..." : "Send Message"}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
              
              <div className="space-y-8">
                <h2 className="text-2xl font-semibold">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="text-success mt-1" size={24} />
                    <div>
                      <h3 className="font-medium">Email Us</h3>
                      <a href="mailto:info@donateconnect.org" className="text-success hover:underline">info@donateconnect.org</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Phone className="text-success mt-1" size={24} />
                    <div>
                      <h3 className="font-medium">Call Us</h3>
                      <a href="tel:+11234567890" className="text-success hover:underline">+1 (123) 456-7890</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <MapPin className="text-success mt-1" size={24} />
                    <div>
                      <h3 className="font-medium">Visit Us</h3>
                      <p className="text-muted-foreground">
                        123 Giving Lane<br />
                        New City, Country<br />
                        12345
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Clock className="text-success mt-1" size={24} />
                    <div>
                      <h3 className="font-medium">Business Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 5:00 PM<br />
                        Saturday & Sunday: Closed
                      </p>
                    </div>
                  </div>
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

export default Contact;
