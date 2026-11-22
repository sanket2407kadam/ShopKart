"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const slides = [
  { eyebrow: "THE NEW WAY TO LISTEN", title: "Sound that moves with you.", copy: "Find your rhythm with the latest audio essentials.", cta: "Explore audio", href: "/products?q=headphones", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1400&q=85", tone: "slide-blue" },
  { eyebrow: "A LITTLE MORE YOU", title: "Everyday looks. Elevated.", copy: "Fresh fits and feel-good finds, all in one place.", cta: "Shop fashion", href: "/products?category=Fashion", image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1400&q=85", tone: "slide-sand" },
  { eyebrow: "UPGRADE YOUR EVERYDAY", title: "A smarter kind of brilliant.", copy: "Discover the devices that make more possible.", cta: "Shop electronics", href: "/products?category=Electronics", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1400&q=85", tone: "slide-lilac" },
];

export function HeroSlider() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => setActive((current) => (current + 1) % slides.length), 6000);
    return () => window.clearInterval(timer);
  }, []);
  const slide = slides[active];
  return <section className={`hero-slider ${slide.tone}`}>
    <div className="hero-copy"><span className="eyebrow">{slide.eyebrow}</span><h1>{slide.title}</h1><p>{slide.copy}</p><Link className="button button-dark hero-cta" href={slide.href}>{slide.cta}<ArrowRight size={17} /></Link><div className="hero-dots">{slides.map((item, index) => <button key={item.eyebrow} aria-label={`Show slide ${index + 1}`} className={index === active ? "active" : ""} onClick={() => setActive(index)} />)}</div></div>
    <div className="hero-art"><div className="hero-image-frame"><Image src={slide.image} alt="" fill priority sizes="(max-width: 760px) 90vw, 55vw" className="hero-image" /></div><div className="hero-floating-tag"><span>✦</span> Made for the moments that matter</div></div>
    <button className="hero-arrow hero-prev" onClick={() => setActive((active + slides.length - 1) % slides.length)} aria-label="Previous slide"><ArrowLeft size={17} /></button><button className="hero-arrow hero-next" onClick={() => setActive((active + 1) % slides.length)} aria-label="Next slide"><ArrowRight size={17} /></button>
  </section>;
}
