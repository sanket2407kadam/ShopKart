"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { Address, CartLine, Order } from "@/types";
import { products } from "@/data/products";

type StoreContextValue = {
  cart: CartLine[];
  wishlist: string[];
  recentlyViewed: string[];
  orders: Order[];
  cartCount: number;
  addToCart: (productId: string, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  toggleWishlist: (productId: string) => void;
  moveWishlistToCart: (productId: string) => void;
  trackProduct: (productId: string) => void;
  placeOrder: (address: Address, payment: string) => string;
};

const StoreContext = createContext<StoreContextValue | null>(null);

function readStorage<T>(key: string, fallback: T): T {
  try {
    const stored = localStorage.getItem(key);
    return stored ? (JSON.parse(stored) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [recentlyViewed, setRecentlyViewed] = useState<string[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Load persisted state after mount to keep server and initial client markup identical.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCart(readStorage("shopkart-cart", []));
    setWishlist(readStorage("shopkart-wishlist", []));
    setRecentlyViewed(readStorage("shopkart-recent", []));
    setOrders(readStorage("shopkart-orders", []));
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem("shopkart-cart", JSON.stringify(cart));
    localStorage.setItem("shopkart-wishlist", JSON.stringify(wishlist));
    localStorage.setItem("shopkart-recent", JSON.stringify(recentlyViewed));
    localStorage.setItem("shopkart-orders", JSON.stringify(orders));
  }, [cart, wishlist, recentlyViewed, orders, ready]);

  const addToCart = useCallback((productId: string, quantity = 1) => {
    setCart((current) => {
      const line = current.find((item) => item.productId === productId);
      return line
        ? current.map((item) => item.productId === productId ? { ...item, quantity: item.quantity + quantity } : item)
        : [...current, { productId, quantity }];
    });
  }, []);
  const removeFromCart = useCallback((productId: string) => setCart((current) => current.filter((item) => item.productId !== productId)), []);
  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity < 1) return;
    setCart((current) => current.map((item) => item.productId === productId ? { ...item, quantity } : item));
  }, []);
  const toggleWishlist = useCallback((productId: string) => {
    setWishlist((current) => current.includes(productId) ? current.filter((id) => id !== productId) : [...current, productId]);
  }, []);
  const moveWishlistToCart = useCallback((productId: string) => {
    setWishlist((current) => current.filter((id) => id !== productId));
    setCart((current) => current.some((item) => item.productId === productId)
      ? current.map((item) => item.productId === productId ? { ...item, quantity: item.quantity + 1 } : item)
      : [...current, { productId, quantity: 1 }]);
  }, []);
  const trackProduct = useCallback((productId: string) => {
    setRecentlyViewed((current) => [productId, ...current.filter((id) => id !== productId)].slice(0, 8));
  }, []);
  const placeOrder = useCallback((address: Address, payment: string) => {
    const id = `SK${Date.now().toString().slice(-9)}`;
    const total = cart.reduce((sum, item) => {
      const product = products.find((entry) => entry.id === item.productId);
      return sum + (product?.price ?? 0) * item.quantity;
    }, 0);
    setOrders((current) => [{ id, createdAt: new Date().toISOString(), items: cart, total, address, payment }, ...current]);
    setCart([]);
    return id;
  }, [cart]);

  const value = useMemo(() => ({
    cart, wishlist, recentlyViewed, orders, cartCount: cart.reduce((total, item) => total + item.quantity, 0),
    addToCart, removeFromCart, updateQuantity, toggleWishlist, moveWishlistToCart, trackProduct, placeOrder,
  }), [cart, wishlist, recentlyViewed, orders, addToCart, removeFromCart, updateQuantity, toggleWishlist, moveWishlistToCart, trackProduct, placeOrder]);

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) throw new Error("useStore must be used within StoreProvider");
  return context;
}
