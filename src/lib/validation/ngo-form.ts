
import { z } from "zod";

export const ngoFormSchema = z.object({
  ngoName: z.string().min(1, "Organization name is required"),
  contactName: z.string().min(1, "Contact name is required"),
  phone: z.string().min(1, "Phone number is required"),
  email: z.string()
    .min(1, "Email is required")
    .email("Please enter a valid email"),
  password: z.string()
    .min(6, "Password must be at least 6 characters")
    .max(72, "Password must be less than 72 characters"),
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  postalCode: z.string().min(1, "Postal code is required"),
  registrationNumber: z.string().min(1, "Registration number is required"),
  serviceArea: z.string().min(1, "Service area is required"),
  terms: z.boolean().refine(val => val === true, "You must agree to the terms"),
  updates: z.boolean(),
});

export type NgoFormData = z.infer<typeof ngoFormSchema>;
