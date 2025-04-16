import { Suspense } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { HeadingBanner } from "@/components/HeadingBanner";
import SearchProductPage from "../components/SearchProductPage";
import { getProducts } from "@/services/api";
import CardProducts from "../components/CardProducts";
import { SkeletonCards } from "@/components/SkeletonHome";
import { PaginationPage } from "@/components/PaginationPage";
import { Button } from "@/components/ui/button";
import { Search } from "@/components/Search/Search";

type ProductsProps = {
  searchParams: {
    search?: string;
    page: number;
    pageSize: number;
  };
};

export default async function ProductPage({ searchParams }: ProductsProps) {
  const search = searchParams.search as string;
  const page = +searchParams.page || 1;
  const pageSize = 6;
  if (page < 0) redirect("/productos");

  const { products, productCount } = await getProducts({
    search,
    page,
    pageSize,
  });
  const totalPages = productCount > 0 ? Math.ceil(productCount / pageSize) : 1;
  if (page > totalPages) redirect("/productos");

  return (
    <section className="container mx-auto">
      {search ? (
        <HeadingBanner imageUrl="/banner-products.jpeg">Búsqueda</HeadingBanner>
      ) : (
        <HeadingBanner imageUrl="/banner-products.jpeg">
          Productos
        </HeadingBanner>
      )}
      <div className="flex justify-between items-center ">
        <Search placeholder="Buscar..." action="producto" />
        {search && (
          <Link href="/productos">
            <Button className="bg-red-500">Volver</Button>
          </Link>
        )}
      </div>

      <Suspense fallback={<SkeletonCards />}>
        <CardProducts products={products} />
      </Suspense>
      {productCount > 0 && (
        <PaginationPage
          search={search}
          page={page}
          totalPages={totalPages}
          url="productos"
        />
      )}
    </section>
  );
}
