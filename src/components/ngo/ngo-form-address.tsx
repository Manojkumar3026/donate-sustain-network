
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface NgoFormAddressProps {
  formData: {
    address: string;
    city: string;
    postalCode: string;
  };
  errors: Record<string, string>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const NgoFormAddress = ({
  formData,
  errors,
  handleChange,
}: NgoFormAddressProps) => {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="address" className={errors.address ? "text-destructive" : ""}>
          Organization Address {errors.address && <span className="text-xs">({errors.address})</span>}
        </Label>
        <Input 
          id="address" 
          placeholder="Street address"
          value={formData.address}
          onChange={handleChange}
          className={errors.address ? "border-destructive" : ""}
          required 
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="city" className={errors.city ? "text-destructive" : ""}>
            City {errors.city && <span className="text-xs">({errors.city})</span>}
          </Label>
          <Input 
            id="city" 
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className={errors.city ? "border-destructive" : ""}
            required 
          />
        </div>
        <div>
          <Label htmlFor="postalCode" className={errors.postalCode ? "text-destructive" : ""}>
            Postal Code {errors.postalCode && <span className="text-xs">({errors.postalCode})</span>}
          </Label>
          <Input 
            id="postalCode" 
            placeholder="Postal code"
            value={formData.postalCode}
            onChange={handleChange}
            className={errors.postalCode ? "border-destructive" : ""}
            required 
          />
        </div>
      </div>
    </div>
  );
};
