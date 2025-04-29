import { GetProducts, GetProductsByName } from "@/actions";
import { TitleImage, Search, CardGrid, Pagination } from "@/components";
import { Product } from "@/interface";

interface Props {
  searchParams: Promise<{ search: string }>;
}

export default async function ProductPage({ searchParams }: Props) {
  const { search } = await searchParams;

  const products = await GetProducts();

  const productsByName = await GetProductsByName(search);

  if (!products?.length) return;

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
        <Pagination />
      </div>
    </>
  );
}
