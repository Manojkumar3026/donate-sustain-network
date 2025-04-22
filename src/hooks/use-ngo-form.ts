
import { useState } from "react";

interface NgoFormData {
  ngoName: string;
  contactName: string;
  phone: string;
  email: string;
  password: string;
  address: string;
  city: string;
  postalCode: string;
  registrationNumber: string;
  serviceArea: string;
  terms: boolean;
  updates: boolean;
}

interface UseNgoFormReturn {
  formData: NgoFormData;
  errors: Record<string, string>;
  formError: string | null;
  loading: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setFormError: (error: string | null) => void;
  setLoading: (loading: boolean) => void;
  validateForm: () => boolean;
}

export const useNgoForm = (): UseNgoFormReturn => {
  const [formData, setFormData] = useState<NgoFormData>({
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
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value,
    });
    
    // Clear field-specific error when user starts typing
    if (errors[id]) {
      setErrors(prev => {
        const newErrors = {...prev};
        delete newErrors[id];
        return newErrors;
      });
    }
    
    // Clear form error when user changes any field
    if (formError) {
      setFormError(null);
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.ngoName.trim()) newErrors.ngoName = "Organization name is required";
    if (!formData.contactName.trim()) newErrors.contactName = "Contact name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.postalCode.trim()) newErrors.postalCode = "Postal code is required";
    if (!formData.registrationNumber.trim()) newErrors.registrationNumber = "Registration number is required";
    if (!formData.serviceArea.trim()) newErrors.serviceArea = "Service area is required";
    
    if (!formData.terms) newErrors.terms = "You must agree to the terms";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return {
    formData,
    errors,
    formError,
    loading,
    handleChange,
    setFormError,
    setLoading,
    validateForm,
  };
};
