
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { AlertCircle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <div className="text-center px-4 py-16 max-w-md">
          <div className="flex justify-center mb-6">
            <AlertCircle className="h-16 w-16 text-red-500" />
          </div>
          <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Oops! We couldn't find the page you're looking for.
          </p>
          <p className="text-muted-foreground mb-8">
            The page at <span className="font-mono bg-muted px-2 py-1 rounded">{location.pathname}</span> doesn't exist.
          </p>
          <Button asChild size="lg">
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
