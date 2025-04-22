
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqHotels = () => {
  const faqs = [
    {
      question: "How does the donation process work?",
      answer: "After registering, you can log in to your dashboard and create a new donation listing. Specify the type of food, quantity, pickup window, and any special instructions. NGOs in your area will be notified, and they can claim the donation through our platform. Once claimed, you'll receive a notification with the NGO's details and pickup time."
    },
    {
      question: "What types of food can I donate?",
      answer: "You can donate excess prepared foods, buffet items, unused ingredients, and packaged goods that are still safe for consumption. All food must meet safety standards and be suitable for transport and distribution."
    },
    {
      question: "Are there any tax benefits for donating food?",
      answer: "Yes, food donations can qualify for tax deductions. Our system generates detailed donation receipts that you can use for tax documentation. We recommend consulting with your tax advisor for specific guidance on deductions available in your region."
    },
    {
      question: "How is food safety ensured?",
      answer: "We require all food donations to comply with local health and safety regulations. NGOs that receive donations are also vetted and trained in proper food handling. Our platform includes guidelines for safe food packaging, temperature control, and transport."
    },
    {
      question: "Can I specify which NGOs receive my donations?",
      answer: "Yes, you can build relationships with specific NGOs and set preferences in your account settings. While our default system matches donations based on location and need, you can opt to work with preferred partners whenever possible."
    },
    {
      question: "How much time does the donation process take?",
      answer: "Creating a donation listing takes just 2-3 minutes. Once created, the system handles notification, matching, and coordination automatically, minimizing the time impact on your staff."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <div className="container mx-auto px-4 py-12 flex-1">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions for Hotels</h1>
          
          <p className="text-muted-foreground mb-8">
            Find answers to common questions about donating excess food through DonateConnect.
          </p>
          
          <Accordion type="single" collapsible className="mb-8">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="bg-muted/30 p-6 rounded-lg border">
            <h2 className="text-xl font-semibold mb-2">Still have questions?</h2>
            <p className="text-muted-foreground mb-4">
              We're here to help! Contact our support team for more information or assistance.
            </p>
            <Link to="/contact" className="text-success hover:underline">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default FaqHotels;
