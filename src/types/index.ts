export type MenuCategory = 
  | "all"
  | "tea"
  | "coffee"
  | "mocktails-shakes"
  | "pizza"
  | "burgers-wraps"
  | "sandwiches-breads"
  | "maggi-pasta"
  | "snacks-chinatown"
  | "desserts-fries";

export interface MenuItem {
  id: string;
  name: string;
  hindiName?: string;
  category: MenuCategory;
  price: number;
  description: string;
  isVeg: boolean;
  isBestseller?: boolean;
  isChefSpecial?: boolean;
  rating?: number;
  image: string;
}

