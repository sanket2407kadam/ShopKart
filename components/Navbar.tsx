"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Heart, Menu, Search, ShoppingCart, Store, UserRound, X } from "lucide-react";
import { useStore } from "@/components/StoreProvider";
import { categories } from "@/data/products";

export function Navbar() {
  const { cartCount, wishlist } = useStore();
  const router = useRouter();
  const pathname = usePathname();
  const [query, setQuery] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const submitSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(`/products${query.trim() ? `?q=${encodeURIComponent(query.trim())}` : ""}`);
    setMobileOpen(false);
  };
  return <header className="site-header">
    <div className="topbar"><div className="topbar-inner">
<Link className="brand" href="/" aria-label="Shopkart home">
  <span className="brand-word">shopkart<span>.</span></span>
  <span className="brand-tagline">Your World, Your Shopping <i>✦</i></span>
</Link>      <form className="search-form" onSubmit={submitSearch}><Search size={19} /><input aria-label="Search products" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search for products, brands and more" /><button type="submit">Search</button></form>
      <nav className="desktop-actions" aria-label="Main navigation">
        <Link className="account-link" href="/orders"><UserRound size={18} /><span>My Account</span></Link>
        <Link className="seller-link" href="/about"><Store size={18} /><span>Become a Seller</span></Link>
        <Link className={`icon-link${pathname === "/wishlist" ? " nav-active" : ""}`} href="/wishlist" aria-label={`Wishlist, ${wishlist.length} items`}><span className="nav-icon-wrap"><Heart size={20} />{wishlist.length > 0 && <b className="nav-count">{wishlist.length}</b>}</span><span>Wishlist</span></Link>
        <Link className={`icon-link${pathname === "/cart" ? " nav-active" : ""}`} href="/cart" aria-label={`Cart, ${cartCount} items`}><span className="nav-icon-wrap"><ShoppingCart size={21} />{cartCount > 0 && <b className="nav-count">{cartCount}</b>}</span><span>Cart</span></Link>
      </nav>
      <button className="mobile-menu-button" onClick={() => setMobileOpen((open) => !open)} aria-label={mobileOpen ? "Close menu" : "Open menu"}>{mobileOpen ? <X size={23} /> : <Menu size={23} />}</button>
    </div>
    {mobileOpen && <div className="mobile-menu">
      <form className="search-form mobile-search" onSubmit={submitSearch}><Search size={18} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search products" /><button type="submit">Go</button></form>
      <Link href="/orders" onClick={() => setMobileOpen(false)}><UserRound size={18} /> My Account & Orders</Link>
      <Link href="/wishlist" onClick={() => setMobileOpen(false)}><Heart size={18} /> Wishlist <span className="mobile-count">{wishlist.length}</span></Link>
      <Link href="/cart" onClick={() => setMobileOpen(false)}><ShoppingCart size={18} /> Cart <span className="mobile-count">{cartCount}</span></Link>
      <Link href="/about" onClick={() => setMobileOpen(false)}><Store size={18} /> Become a Seller</Link>
    </div>}</div>
    <nav className="category-nav" aria-label="Browse categories"><div className="category-nav-inner"><Link href="/categories" className={`category-nav-item${pathname === "/categories" ? " active" : ""}`}>All categories</Link>{categories.slice(0, 7).map((category) => <Link key={category.name} href={`/products?category=${encodeURIComponent(category.name)}`} className="category-nav-item">{category.name}</Link>)}<Link href="/products?sort=discount" className="category-nav-item offers-link">Top offers <span>✦</span></Link></div></nav>
  </header>;
}
