
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface DonationCardProps {
  id: string;
  hotelName: string;
  foodDetails: string;
  quantity: string;
  expirationDate: string;
  status: "available" | "claimed" | "completed" | "cancelled";
  distance?: string;
  className?: string;
  onClaim?: () => void;
  onView?: () => void;
}

export function DonationCard({
  id,
  hotelName,
  foodDetails,
  quantity,
  expirationDate,
  status,
  distance,
  className,
  onClaim,
  onView,
}: DonationCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "available":
        return "bg-success/10 text-success hover:bg-success/20 border-success/20";
      case "claimed":
        return "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 border-blue-500/20";
      case "completed":
        return "bg-gray-500/10 text-gray-500 hover:bg-gray-500/20 border-gray-500/20";
      case "cancelled":
        return "bg-destructive/10 text-destructive hover:bg-destructive/20 border-destructive/20";
      default:
        return "bg-gray-500/10 text-gray-500 hover:bg-gray-500/20 border-gray-500/20";
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  const isActive = status === "available";

  return (
    <div className={cn("bg-white rounded-lg border p-4 flex flex-col h-full shadow-sm", className)}>
      <div className="flex justify-between items-start">
        <h3 className="font-medium text-base">{hotelName}</h3>
        <Badge variant="outline" className={cn("capitalize", getStatusColor(status))}>
          {status}
        </Badge>
      </div>
      <div className="my-2 grow">
        <p className="font-medium text-lg">{foodDetails}</p>
        <div className="flex gap-2 items-center mt-2 text-sm text-muted-foreground">
          <span>Qty: {quantity}</span>
          {distance && (
            <>
              <span className="w-1 h-1 rounded-full bg-muted-foreground"></span>
              <span>{distance}</span>
            </>
          )}
        </div>
        <p className="text-sm text-muted-foreground mt-1">
          Expires: {formatDate(expirationDate)}
        </p>
      </div>
      <div className="flex gap-2 mt-4">
        {isActive && onClaim && (
          <Button onClick={onClaim} className="w-full" variant="default">
            Claim
          </Button>
        )}
        {onView && (
          <Button
            onClick={onView}
            className="w-full"
            variant={isActive && onClaim ? "outline" : "default"}
          >
            View Details
          </Button>
        )}
      </div>
    </div>
  );
}
