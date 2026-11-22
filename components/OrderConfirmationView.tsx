"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Check, PackageCheck, ShoppingBag } from "lucide-react";

export function OrderConfirmationView() {
  const params = useSearchParams();
  const id = params.get("id") ?? "SK-THANK-YOU";
  return <div className="confirmation-page"><div className="confirmation-card"><div className="confirmation-icon"><PackageCheck size={36} /></div><span className="eyebrow">THAT’S A WRAP</span><h1>Your order is on its way.</h1><p>Thanks for choosing Shopkart. We’ve saved your order and the good stuff will be with you soon.</p><div className="confirmation-order"><span>Order reference</span><b>{id}</b></div><div className="confirmation-timeline"><span><i><Check size={13} /></i><b>Order placed</b></span><span><i>2</i><b>Getting ready</b></span><span><i>3</i><b>On its way</b></span></div><div className="confirmation-actions"><Link href="/orders" className="button button-primary">View my orders<ShoppingBag size={16} /></Link><Link href="/products" className="button button-outline">Keep exploring</Link></div></div></div>;
}
