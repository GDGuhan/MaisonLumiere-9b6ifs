export interface Product {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  size: string;
  description: string;
  scentFamily: string;
  topNotes: string[];
  heartNotes: string[];
  baseNotes: string[];
  image: string;
  featured?: boolean;
  badge?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  perfume: string;
}

export interface ScentNote {
  category: string;
  icon: string;
  notes: string[];
  description: string;
}
