
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface NgoFormCredentialsProps {
  formData: {
    email: string;
    password: string;
  };
  errors: Record<string, string>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const NgoFormCredentials = ({
  formData,
  errors,
  handleChange,
}: NgoFormCredentialsProps) => {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="email" className={errors.email ? "text-destructive" : ""}>
          Email Address {errors.email && <span className="text-xs">({errors.email})</span>}
        </Label>
        <Input 
          id="email" 
          type="email" 
          placeholder="Email address"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? "border-destructive" : ""}
          required 
        />
      </div>
      <div>
        <Label htmlFor="password" className={errors.password ? "text-destructive" : ""}>
          Password {errors.password && <span className="text-xs">({errors.password})</span>}
        </Label>
        <Input 
          id="password" 
          type="password" 
          placeholder="Create a password"
          value={formData.password}
          onChange={handleChange}
          className={errors.password ? "border-destructive" : ""}
          required 
        />
      </div>
    </div>
  );
};
