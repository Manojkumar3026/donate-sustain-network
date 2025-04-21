
import { Link } from "react-router-dom";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

interface NavBarProps {
  userType?: "hotel" | "ngo" | "admin" | null;
}

export function NavBar({ userType }: NavBarProps) {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);

  const navigationItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Contact", href: "/contact" },
  ];

  const userNavigation = userType
    ? [
        {
          label: "Dashboard",
          href: `/${userType}-dashboard`,
        },
        {
          label: userType === "hotel" ? "My Donations" : "Available Donations",
          href: `/${userType === "hotel" ? "hotel-donations" : "available-donations"}`,
        },
        {
          label: "Profile",
          href: "/profile",
        },
      ]
    : [];

  const renderNavItems = (items: { label: string; href: string }[], className?: string) => {
    return items.map((item) => (
      <Link
        key={item.label}
        to={item.href}
        className={cn(
          "text-foreground/80 hover:text-foreground font-medium transition-colors",
          className
        )}
        onClick={() => setOpen(false)}
      >
        {item.label}
      </Link>
    ));
  };

  return (
    <nav className="bg-white border-b sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-success">DonateConnect</span>
        </Link>

        {isMobile ? (
          <>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 mt-8">
                  {renderNavItems(navigationItems, "text-lg py-2")}
                  {userType ? (
                    <div className="border-t pt-4 mt-4">
                      <h3 className="text-sm font-medium text-muted-foreground mb-4">
                        Your Account
                      </h3>
                      {renderNavItems(userNavigation, "text-lg py-2")}
                      <Button variant="outline" className="w-full mt-4">
                        Logout
                      </Button>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-2 mt-4 pt-4 border-t">
                      <Button asChild variant="default">
                        <Link to="/login" onClick={() => setOpen(false)}>
                          Login
                        </Link>
                      </Button>
                      <Button asChild variant="outline">
                        <Link to="/register" onClick={() => setOpen(false)}>
                          Register
                        </Link>
                      </Button>
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </>
        ) : (
          <>
            <div className="flex items-center gap-6">
              {renderNavItems(navigationItems)}
            </div>
            <div className="flex items-center gap-4">
              {userType ? (
                <div className="flex items-center gap-6 mr-2">
                  {renderNavItems(userNavigation)}
                  <Button variant="outline">Logout</Button>
                </div>
              ) : (
                <>
                  <Button asChild variant="outline">
                    <Link to="/login">Login</Link>
                  </Button>
                  <Button asChild>
                    <Link to="/register">Register</Link>
                  </Button>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
