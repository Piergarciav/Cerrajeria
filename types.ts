export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  linkText: string;
  badge?: string;
  isFeatured?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ContactInfo {
  phone: string;
  address: string;
  hours: string;
}