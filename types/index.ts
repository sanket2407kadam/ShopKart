export type Product = {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  mrp: number;
  rating: number;
  reviews: number;
  popularity: number;
  createdAt: string;
  image: string;
  images: string[];
  description: string;
  specifications: { label: string; value: string }[];
  offer: string;
};

export type CartLine = { productId: string; quantity: number };
export type Address = { name: string; phone: string; line: string; city: string; postal: string };
export type Order = {
  id: string;
  createdAt: string;
  items: CartLine[];
  total: number;
  address: Address;
  payment: string;
};
