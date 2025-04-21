
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/ui/stat-card";
import { DonationCard } from "@/components/ui/donation-card";
import { GiftIcon, TrendingUpIcon, TimerIcon, UtensilsIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Mock data for the dashboard
const mockDonations = [
  {
    id: "1",
    hotelName: "Your Hotel",
    foodDetails: "Assorted pastries and bread",
    quantity: "5 kg",
    expirationDate: "2025-04-22",
    status: "available" as const,
  },
  {
    id: "2",
    hotelName: "Your Hotel",
    foodDetails: "Cooked rice and curry dishes",
    quantity: "10 kg",
    expirationDate: "2025-04-22",
    status: "claimed" as const,
  },
  {
    id: "3",
    hotelName: "Your Hotel",
    foodDetails: "Fresh vegetables and fruits",
    quantity: "7 kg",
    expirationDate: "2025-04-23",
    status: "completed" as const,
  }
];

const HotelDashboard = () => {
  const navigate = useNavigate();

  // In a real app, these would come from API calls
  const stats = {
    totalDonations: 42,
    activeDonations: 5,
    mealsSaved: 840,
    impactScore: 95,
  };

  const handleCreateDonation = () => {
    // In a real app, this would navigate to a donation creation page
    console.log("Create new donation");
  };

  const handleViewDonation = (id: string) => {
    // In a real app, this would navigate to a donation details page
    console.log("View donation", id);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar userType="hotel" />
      
      <main className="container mx-auto px-4 py-8 flex-1">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Hotel Dashboard</h1>
            <p className="text-muted-foreground">Manage your food donations and impact</p>
          </div>
          <Button onClick={handleCreateDonation} className="mt-4 md:mt-0">
            Create New Donation
          </Button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard
            title="Total Donations"
            value={stats.totalDonations}
            icon={<GiftIcon size={20} />}
          />
          <StatCard
            title="Active Donations"
            value={stats.activeDonations}
            icon={<TimerIcon size={20} />}
          />
          <StatCard
            title="Meals Saved"
            value={stats.mealsSaved}
            icon={<UtensilsIcon size={20} />}
          />
          <StatCard
            title="Impact Score"
            value={stats.impactScore}
            description="Based on consistency and quality"
            icon={<TrendingUpIcon size={20} />}
          />
        </div>

        {/* Recent Donations */}
        <h2 className="text-xl font-semibold mb-4">Recent Donations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {mockDonations.map((donation) => (
            <DonationCard
              key={donation.id}
              {...donation}
              onView={() => handleViewDonation(donation.id)}
            />
          ))}
        </div>

        {/* Show More Button */}
        <div className="flex justify-center">
          <Button variant="outline" onClick={() => navigate("/hotel-donations")}>
            View All Donations
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HotelDashboard;
