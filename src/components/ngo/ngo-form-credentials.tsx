
import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form";
import type { NgoFormData } from "@/lib/validation/ngo-form";

export const NgoFormCredentials = () => {
  const { control } = useFormContext<NgoFormData>();

  return (
    <div className="space-y-4">
      <FormField
        control={control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <Label>Email Address</Label>
            <FormControl>
              <Input type="email" placeholder="Email address" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <Label>Password</Label>
            <FormControl>
              <Input type="password" placeholder="Create a password" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};
