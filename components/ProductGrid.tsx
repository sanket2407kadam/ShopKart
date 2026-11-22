import type { Product } from "@/types";
import { ProductCard } from "@/components/ProductCard";

export function ProductGrid({ products: items, compact = false }: { products: Product[]; compact?: boolean }) {
  if (items.length === 0) return <div className="empty-results"><span>✦</span><h3>No products found</h3><p>Try changing your search or filters to find your next favourite.</p></div>;
  return <div className={`product-grid${compact ? " compact-grid" : ""}`}>{items.map((product) => <ProductCard key={product.id} product={product} compact={compact} />)}</div>;
}
