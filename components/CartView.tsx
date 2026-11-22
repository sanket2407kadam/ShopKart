"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Minus, Plus, ShieldCheck, ShoppingBag, Trash2 } from "lucide-react";
import { products } from "@/data/products";
import { formatPrice } from "@/components/ProductCard";
import { useStore } from "@/components/StoreProvider";

export function CartView() {
  const { cart, removeFromCart, updateQuantity } = useStore();
  const lines = cart.map((line) => ({ ...line, product: products.find((product) => product.id === line.productId) })).filter((line) => line.product);
  const subtotal = lines.reduce((sum, line) => sum + line.product!.price * line.quantity, 0);
  const savings = lines.reduce((sum, line) => sum + (line.product!.mrp - line.product!.price) * line.quantity, 0);
  if (!lines.length) return <div className="empty-state"><div className="empty-state-icon"><ShoppingBag size={32} /></div><span className="eyebrow">YOUR CART IS WAITING</span><h1>Good things belong in here.</h1><p>Your cart is empty for now. Take a look around and find something you love.</p><Link href="/products" className="button button-primary">Explore products<ArrowRight size={17} /></Link></div>;
  return <div className="page-shell content-page"><div className="breadcrumb"><Link href="/">Home</Link><span>/</span><span>Your cart</span></div><div className="page-title"><span className="eyebrow">ALMOST YOURS</span><h1>Your shopping cart <span>({lines.reduce((n, item) => n + item.quantity, 0)})</span></h1></div>
    <div className="cart-layout"><section className="cart-items">{lines.map(({ product, quantity }) => <article className="cart-item" key={product!.id}><Link href={`/products/${product!.id}`} className="cart-product-image"><Image src={product!.image} alt={product!.name} fill sizes="120px" /></Link><div className="cart-item-details"><span className="product-brand">{product!.brand}</span><Link href={`/products/${product!.id}`} className="cart-item-title">{product!.name}</Link><span className="cart-item-delivery">Delivery by 2–4 business days · Free</span><div className="cart-item-actions"><div className="quantity-control"><button aria-label="Decrease quantity" onClick={() => quantity === 1 ? removeFromCart(product!.id) : updateQuantity(product!.id, quantity - 1)}><Minus size={14} /></button><span>{quantity}</span><button aria-label="Increase quantity" onClick={() => updateQuantity(product!.id, quantity + 1)}><Plus size={14} /></button></div><button className="remove-button" onClick={() => removeFromCart(product!.id)}><Trash2 size={15} /> Remove</button></div></div><div className="cart-item-price"><strong>{formatPrice(product!.price * quantity)}</strong><del>{formatPrice(product!.mrp * quantity)}</del></div></article>)}
      <div className="cart-continue"><Link href="/products">← Continue shopping</Link><span><ShieldCheck size={16} /> Safe and secure checkout</span></div></section>
      <aside className="price-card"><h2>Price details</h2><div className="price-line"><span>Price ({lines.reduce((n, item) => n + item.quantity, 0)} items)</span><span>{formatPrice(subtotal + savings)}</span></div><div className="price-line"><span>Product discount</span><span className="positive">− {formatPrice(savings)}</span></div><div className="price-line"><span>Delivery</span><span className="positive">FREE</span></div><div className="price-total"><span>Total payable</span><strong>{formatPrice(subtotal)}</strong></div><p className="you-save">You save {formatPrice(savings)} on this order</p><Link className="button button-primary full-button" href="/checkout">Continue to checkout<ArrowRight size={17} /></Link><div className="secure-note"><ShieldCheck size={16} /> Your order is protected and secure</div></aside>
    </div>
  </div>;
}
