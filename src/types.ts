export type ProductCategory = 
  | 'all'
  | 'ai-tools'
  | 'subscriptions'
  | 'courses'
  | 'software'
  | 'entertainment';

export interface Product {
  id: string;
  name: string;
  category: 'ai-tools' | 'subscriptions' | 'courses' | 'software' | 'entertainment';
  categoryLabel: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  price?: number; // In PKR, undefined if "Contact for Price"
  originalPrice?: number; // In PKR for strikethrough
  priceFormatted?: string; // If custom format needed
  discountText?: string; // e.g. "Save Rs. 14,050"
  badge?: string; // e.g. "18 Months Plan", "Bestseller", "Lifetime Access"
  accessDuration: string; // e.g. "18 Months", "1 Year", "Lifetime"
  popular?: boolean;
  featured?: boolean;
  features: string[];
  whatsIncluded: string[];
  deliveryInfo: string;
  whatsappOrderMessage?: string;
  platformSupport?: string[]; // e.g. ["Windows", "macOS", "Android", "iOS"]
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'ordering' | 'delivery' | 'payment' | 'warranty';
}

export interface CategoryInfo {
  id: ProductCategory;
  label: string;
  description: string;
  iconName: string;
  colorAccent: string;
}
