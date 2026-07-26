export interface FeatureItem {
  id: string;
  iconName: string;
  title: string;
  description: string;
  badge?: string;
}

export interface AppModuleItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  category: string;
  mockupData: {
    title: string;
    metrics: { label: string; value: string; color?: string }[];
    listItems?: { text: string; done?: boolean; tag?: string; amount?: string }[];
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  text: string;
  highlight: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface TechItem {
  name: string;
  category: string;
  description: string;
  icon: string;
}
