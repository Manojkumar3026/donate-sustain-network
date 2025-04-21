
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/ui/stat-card";
import { DonationCard } from "@/components/ui/donation-card";
import { UsersIcon, PackageIcon, CalendarIcon, HeartIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Mock data for the dashboard
const mockDonations = [
  {
    id: "1",
    hotelName: "Grand Hotel",
    foodDetails: "Assorted pastries and bread",
    quantity: "5 kg",
    expirationDate: "2025-04-22",
    status: "available" as const,
    distance: "2.3 km away",
  },
  {
    id: "2",
    hotelName: "Seaside Resort",
    foodDetails: "Cooked rice and curry dishes",
    quantity: "10 kg",
    expirationDate: "2025-04-22",
    status: "available" as const,
    distance: "3.5 km away",
  },
  {
    id: "3",
    hotelName: "City Bistro",
    foodDetails: "Fresh vegetables and fruits",
    quantity: "7 kg",
    expirationDate: "2025-04-23",
    status: "available" as const,
    distance: "1.8 km away",
  }
];

const NgoDashboard = () => {
  const navigate = useNavigate();

  // In a real app, these would come from API calls
  const stats = {
    totalReceived: 37,
    pendingPickups: 3,
    peopleServed: 740,
    donorsConnected: 12,
  };

  const handleClaimDonation = (id: string) => {
    // In a real app, this would initiate a claim process
    console.log("Claim donation", id);
  };

  const handleViewDonation = (id: string) => {
    // In a real app, this would navigate to a donation details page
    console.log("View donation", id);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar userType="ngo" />
      
      <main className="container mx-auto px-4 py-8 flex-1">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">NGO Dashboard</h1>
            <p className="text-muted-foreground">Find and manage food donations for your community</p>
          </div>
          <Button onClick={() => navigate("/available-donations")} className="mt-4 md:mt-0">
            Browse All Donations
          </Button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard
            title="Donations Received"
            value={stats.totalReceived}
            icon={<PackageIcon size={20} />}
          />
          <StatCard
            title="Pending Pickups"
            value={stats.pendingPickups}
            icon={<CalendarIcon size={20} />}
          />
          <StatCard
            title="People Served"
            value={stats.peopleServed}
            icon={<UsersIcon size={20} />}
          />
          <StatCard
            title="Donors Connected"
            value={stats.donorsConnected}
            icon={<HeartIcon size={20} />}
          />
        </div>

        {/* Available Donations Near You */}
        <h2 className="text-xl font-semibold mb-4">Available Donations Near You</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {mockDonations.map((donation) => (
            <DonationCard
              key={donation.id}
              {...donation}
              onClaim={() => handleClaimDonation(donation.id)}
              onView={() => handleViewDonation(donation.id)}
            />
          ))}
        </div>

        {/* Show More Button */}
        <div className="flex justify-center">
          <Button variant="outline" onClick={() => navigate("/available-donations")}>
            View All Available Donations
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NgoDashboard;
