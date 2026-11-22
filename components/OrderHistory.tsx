"use client";

import Image from "next/image";
import Link from "next/link";
import { PackageCheck, ShoppingBag } from "lucide-react";
import { products } from "@/data/products";
import { formatPrice } from "@/components/ProductCard";
import { useStore } from "@/components/StoreProvider";

export function OrderHistory() {
  const { orders } = useStore();
  return <div className="page-shell content-page"><div className="breadcrumb"><Link href="/">Home</Link><span>/</span><span>My orders</span></div><div className="page-title"><span className="eyebrow">ALL YOUR GOOD FINDS</span><h1>My orders</h1></div>{orders.length ? <div className="orders-list">{orders.map((order) => <article className="order-card" key={order.id}><div className="order-card-header"><div><span>ORDER PLACED</span><b>{new Date(order.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</b></div><div><span>ORDER REFERENCE</span><b>{order.id}</b></div><div><span>DELIVERING TO</span><b>{order.address.name}</b></div><strong>{formatPrice(order.total)}</strong></div><div className="order-card-items"><span className="order-status"><PackageCheck size={18} /> Confirmed · preparing your order</span><div className="order-products">{order.items.map((item) => { const product = products.find((entry) => entry.id === item.productId); return product ? <Link key={item.productId} href={`/products/${product.id}`} className="order-product"><div><Image src={product.image} alt="" fill sizes="60px" /></div><span>{product.name} <b>× {item.quantity}</b></span></Link> : null; })}</div></div></article>)}</div> : <div className="empty-state"><div className="empty-state-icon"><ShoppingBag size={32} /></div><span className="eyebrow">YOUR NEXT GREAT FIND AWAITS</span><h1>No orders just yet.</h1><p>Once you find something you love, your order updates will show up here.</p><Link href="/products" className="button button-primary">Start exploring</Link></div>}</div>;
}
