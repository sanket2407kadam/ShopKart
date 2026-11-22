"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, Check, Heart, Minus, Plus, ShieldCheck, ShoppingCart, Star, Truck } from "lucide-react";
import { products } from "@/data/products";
import { formatPrice } from "@/components/ProductCard";
import { ProductGrid } from "@/components/ProductGrid";
import { useStore } from "@/components/StoreProvider";

export function ProductDetails({ productId }: { productId: string }) {
  const router = useRouter();
  const product = products.find((item) => item.id === productId);
  const { addToCart, toggleWishlist, wishlist, trackProduct } = useStore();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  useEffect(() => { if (product) trackProduct(product.id); }, [product, trackProduct]);
  if (!product) return <div className="empty-state"><h1>We couldn’t find that product.</h1><p>It may have moved on, but there are plenty more discoveries to make.</p><Link className="button button-primary" href="/products">Browse products</Link></div>;
  const discount = Math.round((1 - product.price / product.mrp) * 100);
  const similar = products.filter((item) => item.id !== product.id && item.category === product.category).slice(0, 4);
  const add = () => { addToCart(product.id, quantity); setAdded(true); window.setTimeout(() => setAdded(false), 1800); };
  const buyNow = () => { addToCart(product.id, quantity); router.push("/checkout"); };
  return <div className="page-shell content-page"><div className="breadcrumb"><Link href="/">Home</Link><span>/</span><Link href={`/products?category=${encodeURIComponent(product.category)}`}>{product.category}</Link><span>/</span><span>{product.name}</span></div>
    <div className="detail-layout"><div className="detail-gallery"><div className="detail-thumbnails">{product.images.map((image, index) => <button key={image} className={selectedImage === index ? "selected" : ""} onClick={() => setSelectedImage(index)} aria-label={`View image ${index + 1}`}><Image src={image} alt="" fill sizes="68px" /></button>)}</div><div className="detail-main-image"><Image src={product.images[selectedImage]} alt={product.name} fill priority sizes="(max-width: 800px) 90vw, 44vw" /></div></div>
      <div className="detail-info"><span className="eyebrow">{product.brand} · {product.category}</span><h1>{product.name}</h1><div className="detail-rating"><span>{product.rating.toFixed(1)} <Star size={14} fill="currentColor" /></span><b>{product.reviews.toLocaleString("en-IN")} ratings & reviews</b></div><div className="detail-price"><strong>{formatPrice(product.price)}</strong><del>{formatPrice(product.mrp)}</del><span>{discount}% off</span></div><p className="tax-note">Inclusive of all taxes</p><div className="offer-box"><span>✦ SPECIAL OFFER</span><p>{product.offer}</p><small>View all offers & bank benefits</small></div><p className="detail-description">{product.description}</p><div className="delivery-check"><div><Truck size={18} /><span><b>Free delivery</b><small>Get it in 2–4 business days</small></span></div><span className="delivery-stock"><Check size={15} /> In stock</span></div><div className="detail-quantity"><span>Quantity</span><div className="quantity-control"><button aria-label="Decrease quantity" onClick={() => setQuantity((value) => Math.max(1, value - 1))}><Minus size={14} /></button><span>{quantity}</span><button aria-label="Increase quantity" onClick={() => setQuantity((value) => value + 1)}><Plus size={14} /></button></div></div><div className="detail-actions"><button className="button button-primary" onClick={add}><ShoppingCart size={17} />{added ? "Added to cart!" : "Add to cart"}</button><button className="button button-yellow" onClick={buyNow}>Buy now<ArrowRight size={17} /></button><button className={`detail-wishlist${wishlist.includes(product.id) ? " is-saved" : ""}`} onClick={() => toggleWishlist(product.id)} aria-label="Toggle wishlist"><Heart size={19} fill={wishlist.includes(product.id) ? "currentColor" : "none"} /></button></div><div className="detail-assurance"><span><ShieldCheck size={16} /> Quality assured</span><span><Truck size={16} /> Free delivery</span><span><Check size={16} /> Easy returns</span></div></div>
    </div>
    <div className="specs-layout"><section className="description-section"><span className="eyebrow">A LITTLE MORE DETAIL</span><h2>About this product</h2><p>{product.description}</p></section><section className="specifications"><span className="eyebrow">THE DETAILS</span><h2>Specifications</h2><div>{product.specifications.map((spec) => <p key={spec.label}><span>{spec.label}</span><b>{spec.value}</b></p>)}</div></section></div>
    {similar.length > 0 && <section className="home-section similar-products"><div className="section-heading"><div><span className="eyebrow">MORE TO LOVE</span><h2>Similar finds</h2></div><Link href={`/products?category=${encodeURIComponent(product.category)}`}>Shop {product.category}<ArrowRight size={16} /></Link></div><ProductGrid products={similar} compact /></section>}
  </div>;
}
