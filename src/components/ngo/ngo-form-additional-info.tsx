
import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form";
import type { NgoFormData } from "@/lib/validation/ngo-form";

export const NgoFormAdditionalInfo = () => {
  const { control } = useFormContext<NgoFormData>();

  return (
    <div className="space-y-4">
      <FormField
        control={control}
        name="registrationNumber"
        render={({ field }) => (
          <FormItem>
            <Label>Registration Number</Label>
            <FormControl>
              <Input placeholder="For verification purposes" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={control}
        name="serviceArea"
        render={({ field }) => (
          <FormItem>
            <Label>Service Area</Label>
            <FormControl>
              <Input placeholder="Areas you serve" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <div className="space-y-2">
        <FormField
          control={control}
          name="terms"
          render={({ field }) => (
            <FormItem className="flex items-start space-x-2 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <Label>I agree to the terms and conditions</Label>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        
        <FormField
          control={control}
          name="updates"
          render={({ field }) => (
            <FormItem className="flex items-start space-x-2 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <Label>Send me updates about available donations</Label>
              </div>
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};
