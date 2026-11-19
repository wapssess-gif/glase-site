export type MilkType = "Звичайне" | "Безлактозне" | "Рослинне";
export type MenuCategory = "all" | "drinks" | "food" | "desserts";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  note?: string;
  category: "drinks" | "food" | "desserts";
  badge?: "hit" | "classic" | "daily" | "signature";
  image?: string;
}

export interface MenuPhoto {
  src: string;
  caption: string;
}

export interface BookingItem {
  id: string;
  name: string;
  size?: string;
  milk?: MilkType;
  quantity?: number;
}

export interface CartItem {
  id: string;
  name: string;
  size?: string;
  milk?: MilkType;
  quantity: number;
  basePrice: number;
}

export type WeekBadge = "current" | "past";

export interface ThematicWeek {
  id: string;
  title: string;
  badge: WeekBadge;
  badgeLabel: string;
  items: string[];
  image: string;
}
