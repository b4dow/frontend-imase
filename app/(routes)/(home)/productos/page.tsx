import { GetProducts, GetProductsByName, TotalProducts } from "@/actions";
import { TitleImage, Search, CardGrid, Pagination } from "@/components";
import { Product } from "@/interface";
import { redirect } from "next/navigation";

interface Props {
  searchParams: Promise<{ search: string }>;
}

export default async function ProductPage({ searchParams }: Props) {
  const { search } = await searchParams;

  const products = await GetProducts();

  const productsByName = await GetProductsByName(search);

  const totalPages = await TotalProducts();

  if (!products?.length) return;

  if (!totalPages) return;

  return (
    <>
      <TitleImage urlImage="/banner-products.jpeg">Productos</TitleImage>
      <div className="md:container mx-auto">
        <Search />

        {search ? (
          <CardGrid<Product>
            data={productsByName as Product[]}
            title="productos"
          />
        ) : (
          <CardGrid<Product> data={products} title="productos" />
        )}
        <Pagination totalPages={totalPages} />
      </div>
    </>
  );
}
