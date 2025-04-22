
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface NgoFormAdditionalInfoProps {
  formData: {
    registrationNumber: string;
    serviceArea: string;
    terms: boolean;
    updates: boolean;
  };
  errors: Record<string, string>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const NgoFormAdditionalInfo = ({
  formData,
  errors,
  handleChange,
}: NgoFormAdditionalInfoProps) => {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="registrationNumber" className={errors.registrationNumber ? "text-destructive" : ""}>
          Registration Number {errors.registrationNumber && <span className="text-xs">({errors.registrationNumber})</span>}
        </Label>
        <Input 
          id="registrationNumber" 
          placeholder="For verification purposes"
          value={formData.registrationNumber}
          onChange={handleChange}
          className={errors.registrationNumber ? "border-destructive" : ""}
          required 
        />
      </div>
      <div>
        <Label htmlFor="serviceArea" className={errors.serviceArea ? "text-destructive" : ""}>
          Service Area {errors.serviceArea && <span className="text-xs">({errors.serviceArea})</span>}
        </Label>
        <Input 
          id="serviceArea" 
          placeholder="Areas you serve"
          value={formData.serviceArea}
          onChange={handleChange}
          className={errors.serviceArea ? "border-destructive" : ""}
          required 
        />
      </div>
      <div className="space-y-2">
        <div className="flex items-center">
          <Input 
            id="terms" 
            type="checkbox" 
            className={`w-4 h-4 ${errors.terms ? "border-destructive" : ""}`}
            checked={formData.terms}
            onChange={handleChange}
            required 
          />
          <Label htmlFor="terms" className={`ml-2 text-sm ${errors.terms ? "text-destructive" : ""}`}>
            I agree to the terms and conditions {errors.terms && <span className="text-xs">({errors.terms})</span>}
          </Label>
        </div>
        <div className="flex items-center">
          <Input 
            id="updates" 
            type="checkbox" 
            className="w-4 h-4"
            checked={formData.updates}
            onChange={handleChange}
          />
          <Label htmlFor="updates" className="ml-2 text-sm">
            Send me updates about available donations
          </Label>
        </div>
      </div>
    </div>
  );
};
