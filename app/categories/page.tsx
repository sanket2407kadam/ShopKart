import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/data/products";

export default function CategoriesPage() {
  return <div className="page-shell content-page"><div className="breadcrumb"><Link href="/">Home</Link><span>/</span><span>Categories</span></div><div className="page-title"><span className="eyebrow">A WORLD OF GOOD FINDS</span><h1>Find your kind of thing.</h1><p>From little everyday upgrades to something you’ve been dreaming about.</p></div><div className="all-categories-grid">{categories.map((category) => <Link href={`/products?category=${encodeURIComponent(category.name)}`} key={category.name} className="all-category-card"><div className="all-category-image"><Image src={category.image} alt="" fill sizes="(max-width: 600px) 45vw, 260px" /></div><div><h2>{category.name}</h2><span>Explore collection <ArrowUpRight size={15} /></span></div></Link>)}</div></div>;
}
