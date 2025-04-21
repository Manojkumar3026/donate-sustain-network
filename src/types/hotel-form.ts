
export interface HotelFormData {
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
  updates: boolean;
}

export interface HotelFormProps {
  onSubmit: (data: HotelFormData) => Promise<void>;
  loading: boolean;
  formError: string | null;
  errors: Record<string, string>;
}
