"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useStore } from "@/components/StoreProvider";
import { products } from "@/data/products";
import { ProductGrid } from "@/components/ProductGrid";
import type { Product } from "@/types";

export function RecentlyViewedHome() {
  const { recentlyViewed } = useStore();
  const items = recentlyViewed.slice(0, 4).map((id) => products.find((product) => product.id === id)).filter((product): product is Product => product !== undefined);
  if (!items.length) return null;
  return <section className="home-section"><div className="section-heading"><div><span className="eyebrow">PICK UP WHERE YOU LEFT OFF</span><h2>Recently viewed</h2></div><Link href="/recently-viewed">See all<ArrowRight size={16} /></Link></div><ProductGrid products={items} compact /></section>;
}

export function RecentlyViewed() {
  const { recentlyViewed } = useStore();
  const items = recentlyViewed.map((id) => products.find((product) => product.id === id)).filter((product): product is Product => product !== undefined);
  return <div className="page-shell content-page"><div className="breadcrumb"><Link href="/">Home</Link><span>/</span><span>Recently viewed</span></div><div className="page-title"><span className="eyebrow">PICK UP WHERE YOU LEFT OFF</span><h1>Recently viewed</h1></div>{items.length ? <ProductGrid products={items} /> : <div className="empty-state"><span className="eyebrow">A FRESH START</span><h1>No recent discoveries yet.</h1><p>Products you visit will appear here, ready for another look.</p><Link className="button button-primary" href="/products">Explore products</Link></div>}</div>;
}
