"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, ShoppingCart, Trash2 } from "lucide-react";
import { products } from "@/data/products";
import { formatPrice } from "@/components/ProductCard";
import { useStore } from "@/components/StoreProvider";
import type { Product } from "@/types";

export function WishlistView() {
  const { wishlist, toggleWishlist, moveWishlistToCart } = useStore();
  const saved = wishlist.map((id) => products.find((product) => product.id === id)).filter((product): product is Product => product !== undefined);
  if (!saved.length) return <div className="empty-state"><div className="empty-state-icon"><Heart size={32} /></div><span className="eyebrow">SAVE IT FOR LATER</span><h1>Your wishlist is a blank canvas.</h1><p>Tap the heart on anything you love and it’ll be right here when you’re ready.</p><Link href="/products" className="button button-primary">Find your favourites<ArrowRight size={17} /></Link></div>;
  return <div className="page-shell content-page"><div className="breadcrumb"><Link href="/">Home</Link><span>/</span><span>Wishlist</span></div><div className="page-title"><span className="eyebrow">THE GOOD STUFF YOU SAVED</span><h1>Your wishlist <span>({saved.length})</span></h1></div><div className="wishlist-grid">{saved.map((product) => <article key={product.id} className="wishlist-card"><Link className="wishlist-image" href={`/products/${product.id}`}><Image src={product.image} alt={product.name} fill sizes="(max-width: 640px) 45vw, 230px" /></Link><button className="wishlist-remove" onClick={() => toggleWishlist(product.id)} aria-label="Remove from wishlist"><Trash2 size={16} /></button><div className="wishlist-card-content"><span className="product-brand">{product.brand}</span><Link className="product-title" href={`/products/${product.id}`}>{product.name}</Link><div className="product-price"><strong>{formatPrice(product.price)}</strong><del>{formatPrice(product.mrp)}</del></div><button className="button button-primary full-button" onClick={() => moveWishlistToCart(product.id)}><ShoppingCart size={16} /> Move to cart</button></div></article>)}</div></div>;
}
