export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  heading: React.ReactNode | string;
}

export type PropertyType =
  | "residential"
  | "commercial"
  | "industrial"
  | "raw land"
  | "special use";

export type RentType = "per-month" | "per-year";
export interface Property {
  _id: string;
  propertyName: string;
  rent: number;
  propertyType: PropertyType;
  rentType: RentType;
  location: string;
  numberOfBedrooms: number;
  numberOfBathrooms: number;
  length: number;
  breadth: number;
  propertyImage?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
}
