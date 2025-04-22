
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ngoFormSchema, type NgoFormData } from "@/lib/validation/ngo-form";

export const useNgoForm = () => {
  const form = useForm<NgoFormData>({
    resolver: zodResolver(ngoFormSchema),
    defaultValues: {
      ngoName: "",
      contactName: "",
      phone: "",
      email: "",
      password: "",
      address: "",
      city: "",
      postalCode: "",
      registrationNumber: "",
      serviceArea: "",
      terms: false,
      updates: false,
    },
  });

  return form;
};
