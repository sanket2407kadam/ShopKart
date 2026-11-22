import { ProductListing } from "@/components/ProductListing";

type Props = { searchParams: Promise<{ q?: string; category?: string; sort?: string }> };

export default async function ProductsPage({ searchParams }: Props) {
  const params = await searchParams;
  const sort = ["popular", "low", "high", "rating", "newest", "discount"].includes(params.sort ?? "") ? params.sort! : "popular";
  return <ProductListing initialQuery={params.q ?? ""} initialCategory={params.category ?? ""} initialSort={sort} />;
}
