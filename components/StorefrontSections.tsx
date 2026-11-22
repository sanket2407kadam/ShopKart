import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, BadgePercent, Leaf, ShieldCheck, Truck } from "lucide-react";
import { categories, products } from "@/data/products";
import { ProductGrid } from "@/components/ProductGrid";
import { HeroSlider } from "@/components/HeroSlider";
import { CategoryBar } from "@/components/CategoryBar";
import { RecentlyViewedHome } from "@/components/RecentlyViewed";

function SectionHeading({ eyebrow, title, href = "/products", linkText = "View all" }: { eyebrow: string; title: string; href?: string; linkText?: string }) {
  return <div className="section-heading"><div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2></div><Link href={href}>{linkText}<ArrowRight size={16} /></Link></div>;
}

function PromoBanner({ className, eyebrow, title, copy, link, href, image, alt }: { className: string; eyebrow: string; title: string; copy: string; link: string; href: string; image: string; alt: string }) {
  return <Link href={href} className={`promo-banner ${className}`}><div className="promo-copy"><span className="eyebrow">{eyebrow}</span><h3>{title}</h3><p>{copy}</p><span className="promo-link">{link}<ArrowUpRight size={16} /></span></div><div className="promo-image"><Image src={image} alt={alt} fill sizes="(max-width: 700px) 90vw, 45vw" /></div></Link>;
}

export function StorefrontSections() {
  const offers = [...products].sort((a, b) => (1 - b.price / b.mrp) - (1 - a.price / a.mrp)).slice(0, 4);
  const bestDeals = products.filter((p) => ["pixel-9-pro", "philips-airfryer", "nike-air-max", "sony-headphones", "ordinary-skincare", "puma-backpack"].includes(p.id));
  const trending = products.filter((p) => ["iphone-16", "asus-zenbook", "bose-speaker", "milan-sofa", "logitech-mouse", "levis-tee"].includes(p.id));
  return <><CategoryBar /><main><div className="page-shell home-content">
    <HeroSlider />
    <section className="trust-row"><div><Truck size={20} /><span><b>Free delivery</b><small>on orders above ₹499</small></span></div><div><ShieldCheck size={20} /><span><b>Quality, assured</b><small>only the good stuff</small></span></div><div><BadgePercent size={20} /><span><b>Easy returns</b><small>hassle-free, always</small></span></div><div><Leaf size={20} /><span><b>Made for you</b><small>find your next favourite</small></span></div></section>
    <section className="home-section category-section"><SectionHeading eyebrow="A GOOD PLACE TO START" title="Shop by category" href="/categories" /><div className="category-image-grid">{categories.slice(0, 8).map((category) => <Link key={category.name} href={`/products?category=${encodeURIComponent(category.name)}`} className="category-image-card"><div className="category-image"><Image src={category.image} alt="" fill sizes="(max-width: 700px) 32vw, 170px" /></div><span>{category.name}</span><ArrowUpRight size={15} /></Link>)}</div></section>
    <section className="home-section"><SectionHeading eyebrow="LITTLE THINGS, BIG SAVINGS" title="Today’s top offers" href="/products?sort=discount" linkText="All offers" /><ProductGrid products={offers} compact /></section>
    <section className="home-section deals-section"><SectionHeading eyebrow="WORTH A CLOSER LOOK" title="Best deals for you" href="/products?sort=popular" /><ProductGrid products={bestDeals} compact /></section>
    <div className="promo-grid"><PromoBanner className="fashion-promo" eyebrow="A FRESH PERSPECTIVE" title="The everyday, reimagined." copy="Pieces you’ll reach for again and again." link="Explore fashion" href="/products?category=Fashion" image="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1000&q=85" alt="A curated selection of modern fashion" /><PromoBanner className="tech-promo" eyebrow="MAKE ROOM FOR MORE" title="Technology that just gets you." copy="Thoughtful upgrades for work and play." link="Explore electronics" href="/products?category=Electronics" image="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1000&q=85" alt="Laptop on a tidy home desk" /></div>
    <section className="home-section"><SectionHeading eyebrow="LOVED BY THE COMMUNITY" title="Trending right now" href="/products?sort=rating" /><ProductGrid products={trending} compact /></section>
    <section className="home-section recommendation-section"><SectionHeading eyebrow="A FEW THINGS WE THINK YOU’LL LOVE" title="Picked just for you" /><ProductGrid products={products.slice(1, 7)} compact /></section>
    <RecentlyViewedHome />
    <section className="recently-viewed-home"><div><span className="eyebrow">KEEP EXPLORING</span><h2>Everyday discoveries, all in one place.</h2><p>Take a look around — your next favourite might be closer than you think.</p><Link className="button button-dark" href="/products">Browse all products<ArrowRight size={17} /></Link></div><div className="recent-visual"><span>your<br />next find</span><span className="sparkle">✦</span></div></section>
  </div></main></>;
}
