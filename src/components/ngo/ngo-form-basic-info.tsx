
import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form";
import type { NgoFormData } from "@/lib/validation/ngo-form";

export const NgoFormBasicInfo = () => {
  const { control } = useFormContext<NgoFormData>();

  return (
    <div className="space-y-4">
      <FormField
        control={control}
        name="ngoName"
        render={({ field }) => (
          <FormItem>
            <Label>Organization Name</Label>
            <FormControl>
              <Input placeholder="Enter your NGO's name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={control}
          name="contactName"
          render={({ field }) => (
            <FormItem>
              <Label>Contact Person</Label>
              <FormControl>
                <Input placeholder="Full name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <Label>Phone Number</Label>
              <FormControl>
                <Input placeholder="Phone number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};
