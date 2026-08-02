export type Lang = 'fr' | 'ar';

export interface LocalizedText {
  fr: string;
  ar: string;
}

export interface Variant {
  id: string;
  name: LocalizedText;
}

export interface SizeOption {
  id: string;
  label: LocalizedText;
  price: number;
}

export interface Product {
  id: string;
  name: LocalizedText;
  description: LocalizedText;
  category: CategoryId;
  sizes: SizeOption[];
  variants?: Variant[];
  /** variant selection required before adding to cart */
  variantRequired?: boolean;
  /** icon key for placeholder */
  icon: ProductIcon;
  /** gradient classes for placeholder */
  gradient: string;
}

export type CategoryId =
  | 'wellness'
  | 'face-body'
  | 'oils'
  | 'hair'
  | 'honey';

export type ProductIcon =
  | 'leaf'
  | 'drop'
  | 'honey'
  | 'flower'
  | 'cream'
  | 'seed'
  | 'clay'
  | 'oil'
  | 'spray'
  | 'balm'
  | 'glove'
  | 'powder'
  | 'pill'
  | 'rose'
  | 'comb'
  | 'root';

export interface Category {
  id: CategoryId;
  name: LocalizedText;
  tagline: LocalizedText;
  icon: ProductIcon;
}

export interface CartItem {
  key: string;
  productId: string;
  name: LocalizedText;
  sizeId: string;
  sizeLabel: LocalizedText;
  variantId?: string;
  variantName?: LocalizedText;
  quantity: number;
  unitPrice: number;
}
