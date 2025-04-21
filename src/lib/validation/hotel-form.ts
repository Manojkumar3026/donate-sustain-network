
export const validateHotelForm = (formData: {
  hotelName: string;
  contactName: string;
  phone: string;
  email: string;
  password: string;
  address: string;
  city: string;
  postalCode: string;
  businessLicense: string;
  terms: boolean;
}) => {
  const errors: Record<string, string> = {};
  
  if (!formData.hotelName.trim()) errors.hotelName = "Hotel name is required";
  if (!formData.contactName.trim()) errors.contactName = "Contact name is required";
  if (!formData.phone.trim()) errors.phone = "Phone number is required";
  
  if (!formData.email.trim()) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = "Please enter a valid email";
  }
  
  if (!formData.password.trim()) {
    errors.password = "Password is required";
  } else if (formData.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }
  
  if (!formData.address.trim()) errors.address = "Address is required";
  if (!formData.city.trim()) errors.city = "City is required";
  if (!formData.postalCode.trim()) errors.postalCode = "Postal code is required";
  if (!formData.businessLicense.trim()) errors.businessLicense = "Business license is required";
  
  if (!formData.terms) errors.terms = "You must agree to the terms";
  
  return errors;
};
