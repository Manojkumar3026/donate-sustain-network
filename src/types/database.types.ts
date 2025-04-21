
import { Database as GeneratedDatabase } from "@/integrations/supabase/types";

// Extend the generated database types with our custom tables
export interface Database extends GeneratedDatabase {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          organization_type: "hotel" | "ngo";
          organization_name: string;
          contact_name: string;
          phone: string;
          address: string;
          city: string;
          postal_code: string;
          registration_number?: string | null;
          service_area?: string | null;
          business_license?: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          organization_type: "hotel" | "ngo";
          organization_name: string;
          contact_name: string;
          phone: string;
          address: string;
          city: string;
          postal_code: string;
          registration_number?: string | null;
          service_area?: string | null;
          business_license?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          organization_type?: "hotel" | "ngo";
          organization_name?: string;
          contact_name?: string;
          phone?: string;
          address?: string;
          city?: string;
          postal_code?: string;
          registration_number?: string | null;
          service_area?: string | null;
          business_license?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
    } & GeneratedDatabase["public"]["Tables"];
    Views: GeneratedDatabase["public"]["Views"];
    Functions: GeneratedDatabase["public"]["Functions"];
    Enums: {
      organization_type: "hotel" | "ngo";
    } & GeneratedDatabase["public"]["Enums"];
    CompositeTypes: GeneratedDatabase["public"]["CompositeTypes"];
  };
}

// Create a custom Supabase client type that uses our extended Database type
export type TypedSupabaseClient = ReturnType<typeof createClient<Database>>;

// Avoid TypeScript errors by importing the createClient function type
import { createClient } from "@supabase/supabase-js";
