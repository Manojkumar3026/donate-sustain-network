
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormError } from "@/components/form/form-error";

interface NgoFormBasicInfoProps {
  formData: {
    ngoName: string;
    contactName: string;
    phone: string;
  };
  errors: Record<string, string>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const NgoFormBasicInfo = ({
  formData,
  errors,
  handleChange,
}: NgoFormBasicInfoProps) => {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="ngoName" className={errors.ngoName ? "text-destructive" : ""}>
          Organization Name {errors.ngoName && <span className="text-xs">({errors.ngoName})</span>}
        </Label>
        <Input 
          id="ngoName" 
          placeholder="Enter your NGO's name"
          value={formData.ngoName}
          onChange={handleChange}
          className={errors.ngoName ? "border-destructive" : ""}
          required 
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="contactName" className={errors.contactName ? "text-destructive" : ""}>
            Contact Person {errors.contactName && <span className="text-xs">({errors.contactName})</span>}
          </Label>
          <Input 
            id="contactName" 
            placeholder="Full name"
            value={formData.contactName}
            onChange={handleChange}
            className={errors.contactName ? "border-destructive" : ""}
            required 
          />
        </div>
        <div>
          <Label htmlFor="phone" className={errors.phone ? "text-destructive" : ""}>
            Phone Number {errors.phone && <span className="text-xs">({errors.phone})</span>}
          </Label>
          <Input 
            id="phone" 
            placeholder="Phone number"
            value={formData.phone}
            onChange={handleChange}
            className={errors.phone ? "border-destructive" : ""}
            required 
          />
        </div>
      </div>
    </div>
  );
};
