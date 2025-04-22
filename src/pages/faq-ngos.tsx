
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqNgos = () => {
  const faqs = [
    {
      question: "How do we find available donations?",
      answer: "After registering and being verified, you'll have access to a dashboard where you can view all available donations in your area. You can also set up notifications to be alerted when new donations become available that match your criteria."
    },
    {
      question: "What is the verification process for NGOs?",
      answer: "We verify all NGOs to ensure they're legitimate organizations helping those in need. The process includes reviewing your registration documents, understanding your distribution capacity, and confirming your service area. This typically takes 1-2 business days."
    },
    {
      question: "How quickly must we pick up donations?",
      answer: "Pickup times are specified by the donating hotel and vary based on their operations. Some donations may need same-day pickup, while others might have a longer window. You'll see the pickup window when browsing available donations."
    },
    {
      question: "Can we request specific types of food?",
      answer: "Yes, you can set preferences in your profile regarding what types of food your organization can use most effectively. While we can't guarantee specific donations, the system will prioritize notifying you about donations that match your preferences."
    },
    {
      question: "What equipment do we need for pickup?",
      answer: "You'll need appropriate transport containers to maintain food safety, particularly for hot or cold items. This typically includes insulated containers, coolers, and clean storage bins. Specific requirements depend on the type and quantity of food you're collecting."
    },
    {
      question: "How do we report on food distribution?",
      answer: "Our platform includes simple reporting tools where you can log how many people were served with each donation and share stories of impact. These reports help hotels understand their contribution and can be used in your organization's impact reporting."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <div className="container mx-auto px-4 py-12 flex-1">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions for NGOs</h1>
          
          <p className="text-muted-foreground mb-8">
            Find answers to common questions about receiving and distributing food donations through DonateConnect.
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

export default FaqNgos;
