export interface ContactInfos {
  id: number;
  label: string;
  icon: string;
  address?: string;
  address2?: string;
}

export interface appointment {
  firstName: string;
  lastName: string;
  phone: string;
  streetAddress: string;
  streetAddressLine1: string;
  city: string;
  region: string;
  postalCode: number;
  country: string;
  email: string;
  gender: string;
  specialist: string;
  symptom: string;
}

export interface MedicalService {
  title: string;
  definition: string;
  image: string;
}