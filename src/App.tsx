
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import Index from "./pages/Index";
import Login from "./pages/login";
import Register from "./pages/register";
import HotelRegister from "./pages/hotel-register";
import NgoRegister from "./pages/ngo-register";
import HotelDashboard from "./pages/hotel-dashboard";
import NgoDashboard from "./pages/ngo-dashboard";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";
import Contact from "./pages/Contact";
import BenefitsHotels from "./pages/benefits-hotels";
import BenefitsNgos from "./pages/benefits-ngos";
import FaqHotels from "./pages/faq-hotels";
import FaqNgos from "./pages/faq-ngos";

const queryClient = new QueryClient();

// Protected route component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();
  
  if (loading) return <div className="flex items-center justify-center h-screen">Loading...</div>;
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/hotel-register" element={<HotelRegister />} />
            <Route path="/ngo-register" element={<NgoRegister />} />
            <Route path="/hotel-dashboard" element={
              <ProtectedRoute>
                <HotelDashboard />
              </ProtectedRoute>
            } />
            <Route path="/ngo-dashboard" element={
              <ProtectedRoute>
                <NgoDashboard />
              </ProtectedRoute>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/benefits-hotels" element={<BenefitsHotels />} />
            <Route path="/benefits-ngos" element={<BenefitsNgos />} />
            <Route path="/faq-hotels" element={<FaqHotels />} />
            <Route path="/faq-ngos" element={<FaqNgos />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
