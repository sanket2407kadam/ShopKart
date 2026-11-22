"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ChevronDown, SlidersHorizontal, X } from "lucide-react";
import { products } from "@/data/products";
import { ProductGrid } from "@/components/ProductGrid";

type Props = { initialQuery: string; initialCategory: string; initialSort: string };

export function ProductListing({ initialQuery, initialCategory, initialSort }: Props) {
  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState(initialCategory);
  const [brand, setBrand] = useState("");
  const [rating, setRating] = useState("0");
  const [priceRange, setPriceRange] = useState("all");
  const [sort, setSort] = useState(initialSort);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const brands = useMemo(() => Array.from(new Set(products.map((product) => product.brand))).sort(), []);
  const filtered = useMemo(() => {
    let result = products.filter((product) => {
      const matchesQuery = !query || `${product.name} ${product.brand} ${product.category}`.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = !category || product.category === category;
      const matchesBrand = !brand || product.brand === brand;
      const matchesRating = product.rating >= Number(rating);
      const matchesPrice = priceRange === "all" || (priceRange === "under-2000" ? product.price < 2000 : priceRange === "2000-10000" ? product.price >= 2000 && product.price <= 10000 : priceRange === "10000-50000" ? product.price > 10000 && product.price <= 50000 : product.price > 50000);
      return matchesQuery && matchesCategory && matchesBrand && matchesRating && matchesPrice;
    });
    result = [...result];
    if (sort === "low") result.sort((a, b) => a.price - b.price);
    if (sort === "high") result.sort((a, b) => b.price - a.price);
    if (sort === "rating") result.sort((a, b) => b.rating - a.rating);
    if (sort === "newest") result.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
    if (sort === "discount") result.sort((a, b) => (1 - b.price / b.mrp) - (1 - a.price / a.mrp));
    if (sort === "popular") result.sort((a, b) => b.popularity - a.popularity);
    return result;
  }, [query, category, brand, rating, priceRange, sort]);
  const clearFilters = () => { setCategory(""); setBrand(""); setRating("0"); setPriceRange("all"); setQuery(""); };
  const filters = <div className="filter-groups">
    <label className="filter-field">Category<select value={category} onChange={(event) => setCategory(event.target.value)}><option value="">All categories</option>{Array.from(new Set(products.map((product) => product.category))).sort().map((name) => <option key={name}>{name}</option>)}</select></label>
    <label className="filter-field">Price range<select value={priceRange} onChange={(event) => setPriceRange(event.target.value)}><option value="all">Any price</option><option value="under-2000">Under ₹2,000</option><option value="2000-10000">₹2,000 – ₹10,000</option><option value="10000-50000">₹10,000 – ₹50,000</option><option value="over-50000">Above ₹50,000</option></select></label>
    <label className="filter-field">Brand<select value={brand} onChange={(event) => setBrand(event.target.value)}><option value="">All brands</option>{brands.map((name) => <option key={name}>{name}</option>)}</select></label>
    <label className="filter-field">Customer rating<select value={rating} onChange={(event) => setRating(event.target.value)}><option value="0">All ratings</option><option value="4">4★ & above</option><option value="4.5">4.5★ & above</option><option value="3">3★ & above</option></select></label>
  </div>;
  return <div className="page-shell listing-page"><div className="breadcrumb"><Link href="/">Home</Link><span>/</span><span>{category || "Products"}</span></div>
    <div className="listing-title-row"><div><span className="eyebrow">FIND SOMETHING GOOD</span><h1>{category || (query ? `Results for “${query}”` : "All products")}</h1><p>{filtered.length} thoughtfully picked products</p></div><label className="sort-control">Sort by <span><select value={sort} onChange={(event) => setSort(event.target.value)}><option value="popular">Popularity</option><option value="low">Price: Low to High</option><option value="high">Price: High to Low</option><option value="newest">Newest First</option><option value="rating">Customer Rating</option><option value="discount">Best discount</option></select><ChevronDown size={16} /></span></label></div>
    <div className="listing-layout"><aside className="filter-sidebar"><div className="filter-title"><h2><SlidersHorizontal size={17} /> Filters</h2><button onClick={clearFilters}>Clear all</button></div>{filters}</aside>
      <section className="listing-results"><div className="mobile-filter-trigger"><button onClick={() => setMobileFiltersOpen(true)}><SlidersHorizontal size={16} /> Filters & sort</button><span>{filtered.length} items</span></div><ProductGrid products={filtered} /></section>
    </div>
    {mobileFiltersOpen && <div className="filter-overlay" role="dialog" aria-modal="true" aria-label="Product filters"><div className="filter-drawer"><div className="filter-title"><h2>Filters</h2><button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters"><X size={20} /></button></div>{filters}<button className="button button-primary drawer-apply" onClick={() => setMobileFiltersOpen(false)}>Show {filtered.length} products</button></div></div>}
  </div>;
}
