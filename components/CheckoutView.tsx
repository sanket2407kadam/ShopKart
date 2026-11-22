"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowRight, Check, LockKeyhole, ShieldCheck } from "lucide-react";
import { products } from "@/data/products";
import { formatPrice } from "@/components/ProductCard";
import { useStore } from "@/components/StoreProvider";

export function CheckoutView() {
  const { cart, placeOrder } = useStore();
  const router = useRouter();
  const [payment, setPayment] = useState("Cash on Delivery");
  const [error, setError] = useState("");
  const lines = cart.map((item) => ({ ...item, product: products.find((product) => product.id === item.productId) })).filter((item) => item.product);
  const total = lines.reduce((sum, item) => sum + item.product!.price * item.quantity, 0);
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const address = { name: String(form.get("name")), phone: String(form.get("phone")), line: String(form.get("address")), city: String(form.get("city")), postal: String(form.get("postal")) };
    if (!lines.length) { setError("Your cart is empty. Add something lovely before checking out."); return; }
    const orderId = placeOrder(address, payment);
    router.push(`/order-confirmation?id=${orderId}`);
  };
  if (!lines.length) return <div className="empty-state"><span className="eyebrow">NOTHING TO CHECK OUT YET</span><h1>Your cart is empty.</h1><p>Add something you love and it’ll be waiting here.</p><Link href="/products" className="button button-primary">Continue shopping<ArrowRight size={17} /></Link></div>;
  return <div className="page-shell content-page"><div className="breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/cart">Cart</Link><span>/</span><span>Checkout</span></div><div className="page-title"><span className="eyebrow">JUST A FEW DETAILS</span><h1>Let’s get it to you.</h1></div>
    <form className="checkout-layout" onSubmit={onSubmit}><div className="checkout-main"><section className="checkout-section"><div className="checkout-section-heading"><span className="step-number">1</span><div><h2>Delivery address</h2><p>Where should we send your order?</p></div></div><div className="address-fields"><label>Full name<input name="name" required placeholder="e.g. Alex Morgan" autoComplete="name" /></label><label>Phone number<input name="phone" type="tel" required pattern="[0-9+() -]{8,16}" placeholder="+91 98765 43210" autoComplete="tel" /></label><label className="field-full">Address<input name="address" required placeholder="House number, street and area" autoComplete="street-address" /></label><label>City<input name="city" required placeholder="Your city" autoComplete="address-level2" /></label><label>PIN code<input name="postal" required pattern="[0-9]{6}" placeholder="6-digit PIN code" autoComplete="postal-code" /></label></div></section>
      <section className="checkout-section"><div className="checkout-section-heading"><span className="step-number">2</span><div><h2>Payment method</h2><p>Choose how you’d like to pay</p></div></div><div className="payment-options">{["Cash on Delivery", "UPI", "Credit / Debit Card"].map((method) => <label key={method} className={`payment-option${payment === method ? " selected" : ""}`}><input type="radio" name="payment" value={method} checked={payment === method} onChange={() => setPayment(method)} /><span className="custom-radio" /><span><b>{method}</b><small>{method === "Cash on Delivery" ? "Pay when your order arrives" : method === "UPI" ? "Google Pay, PhonePe, Paytm & more" : "Visa, Mastercard, RuPay"}</small></span>{payment === method && <Check size={17} />}</label>)}</div><p className="demo-payment-note"><LockKeyhole size={14} /> This is a frontend demo. No payment will be collected.</p></section>
      <button className="button button-primary place-order-button" type="submit">Place your order<ArrowRight size={17} /></button>{error && <p className="form-error">{error}</p>}</div>
      <aside className="price-card checkout-summary"><h2>Your order</h2>{lines.map((item) => <div className="summary-item" key={item.product!.id}><span>{item.product!.name} <b>× {item.quantity}</b></span><strong>{formatPrice(item.product!.price * item.quantity)}</strong></div>)}<div className="price-line"><span>Delivery</span><span className="positive">FREE</span></div><div className="price-total"><span>Total payable</span><strong>{formatPrice(total)}</strong></div><p className="you-save"><ShieldCheck size={15} /> Secure checkout, happy shopping.</p><div className="summary-steps"><span className="step-done"><Check size={13} /> Cart</span><i /><span className="step-current">Address</span><i /><span>Confirmation</span></div></aside>
    </form>
  </div>;
}
