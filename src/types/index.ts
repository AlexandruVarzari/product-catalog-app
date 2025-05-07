export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface FilterOptions {
  category: string;
  sortBy: "price" | "name";
  sortOrder: "asc" | "desc";
}
