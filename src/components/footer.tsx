
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-white border-t mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg text-success mb-4">DonateConnect</h3>
            <p className="text-muted-foreground text-sm">
              Connecting excess food from hotels to NGOs that feed those in need.
              Together, we can reduce waste and fight hunger.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">For Businesses</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/hotel-register" className="text-muted-foreground hover:text-foreground transition-colors">
                  Register as Hotel
                </Link>
              </li>
              <li>
                <Link to="/benefits-hotels" className="text-muted-foreground hover:text-foreground transition-colors">
                  Benefits
                </Link>
              </li>
              <li>
                <Link to="/faq-hotels" className="text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">For NGOs</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/ngo-register" className="text-muted-foreground hover:text-foreground transition-colors">
                  Register as NGO
                </Link>
              </li>
              <li>
                <Link to="/benefits-ngos" className="text-muted-foreground hover:text-foreground transition-colors">
                  Benefits
                </Link>
              </li>
              <li>
                <Link to="/faq-ngos" className="text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-8 pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} DonateConnect. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
