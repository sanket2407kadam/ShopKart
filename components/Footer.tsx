import Link from "next/link";
import { ArrowRight, Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";

export function Footer() {
  return <footer className="site-footer"><div className="footer-main">
    <div className="footer-about"><Link className="brand footer-brand" href="/"><span className="brand-word">shopkart<span>.</span></span></Link><p>Everyday discoveries, delivered with a little more delight. Find the things you love, all in one place.</p><div className="social-links"><a href="https://www.instagram.com/" aria-label="Instagram"><Instagram size={18} /></a><a href="https://www.facebook.com/" aria-label="Facebook"><Facebook size={18} /></a><a href="https://twitter.com/" aria-label="Twitter"><Twitter size={18} /></a></div></div>
    <div className="footer-column"><h3>About Shopkart</h3><Link href="/about">Our story</Link><Link href="/about">Careers</Link><Link href="/about">Press</Link><Link href="/contact">Contact us</Link></div>
    <div className="footer-column"><h3>Help & support</h3><Link href="/orders">Track your order</Link><Link href="/contact">Help centre</Link><Link href="/contact">Returns & refunds</Link><Link href="/contact">Shipping information</Link></div>
    <div className="footer-column footer-contact"><h3>Get in touch</h3><p><MapPin size={16} /> Bengaluru, India</p><p><Phone size={16} /> 1800 123 4567</p><p><Mail size={16} /> hello@shopkart.example</p></div>
    <div className="footer-newsletter"><h3>Good things, in your inbox.</h3><p>Get the latest offers and new arrivals, minus the noise.</p><form action="/products"><input aria-label="Email address" type="email" placeholder="Your email address" /><button type="submit" aria-label="Subscribe"><ArrowRight size={17} /></button></form></div>
  </div><div className="footer-bottom"><span>© 2026 Shopkart. Made for everyday discovery.</span><div><Link href="/about">Privacy</Link><Link href="/about">Terms</Link><span className="secure-label">🔒 100% secure shopping</span></div></div></footer>;
}
