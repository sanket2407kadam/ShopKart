"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { useStore } from "@/components/StoreProvider";
import type { Product } from "@/types";

export const formatPrice = (amount: number) => `₹${amount.toLocaleString("en-IN")}`;

export function ProductCard({ product, compact = false }: { product: Product; compact?: boolean }) {
  const router = useRouter();
  const { wishlist, toggleWishlist, addToCart } = useStore();
  const discount = Math.round((1 - product.price / product.mrp) * 100);
  const saved = wishlist.includes(product.id);
  return <article className={`product-card${compact ? " compact-card" : ""}`}>
    <div className="product-card-image-wrap"><Link href={`/products/${product.id}`} className="product-image-link" aria-label={`View ${product.name}`}><Image src={product.image} alt={product.name} fill sizes="(max-width: 640px) 48vw, (max-width: 1100px) 30vw, 240px" className="product-card-image" /></Link><span className="discount-tag">{discount}% off</span><button className={`wishlist-button${saved ? " is-saved" : ""}`} onClick={() => toggleWishlist(product.id)} aria-label={saved ? "Remove from wishlist" : "Add to wishlist"}><Heart size={17} fill={saved ? "currentColor" : "none"} /></button></div>
    <div className="product-card-content"><span className="product-brand">{product.brand}</span><Link href={`/products/${product.id}`} className="product-title">{product.name}</Link><div className="product-rating"><span>{product.rating.toFixed(1)} <Star size={12} fill="currentColor" /></span><small>{product.reviews.toLocaleString("en-IN")} ratings</small></div><div className="product-price"><strong>{formatPrice(product.price)}</strong><del>{formatPrice(product.mrp)}</del><span>{discount}% off</span></div>{!compact && <div className="card-delivery">Free delivery</div>}<div className="card-actions"><button className="card-add-button" onClick={() => addToCart(product.id)}><ShoppingCart size={15} /> Add to cart</button>{!compact && <button className="card-buy-button" onClick={() => { addToCart(product.id); router.push("/checkout"); }}>Buy now</button>}</div></div>
  </article>;
}
