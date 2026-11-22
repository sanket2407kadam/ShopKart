import Link from "next/link";
import { Baby, BookOpen, Dumbbell, Laptop, Refrigerator, Shirt, ShoppingBasket, Smartphone, Sofa, Sparkles } from "lucide-react";
import { categories } from "@/data/products";

const iconMap = { Smartphone, Laptop, Shirt, Sofa, Refrigerator, Sparkles, ShoppingBasket, Baby, Dumbbell, BookOpen };

export function CategoryBar() {
  return <section className="category-strip" aria-label="Shop categories"><div className="category-strip-inner">
    {categories.map((category) => {
      const Icon = iconMap[category.icon as keyof typeof iconMap];
      return <Link key={category.name} href={`/products?category=${encodeURIComponent(category.name)}`} className="category-chip"><span className="category-icon"><Icon size={22} strokeWidth={1.7} /></span><span>{category.name}</span></Link>;
    })}
  </div></section>;
}
