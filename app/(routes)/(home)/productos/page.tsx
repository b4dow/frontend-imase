import { redirect } from "next/navigation";
import { GetProducts, GetProductsByName } from "actions/product";
import { CardGrid, TitleImage, Search } from "components/ui";
import { Pagination } from "components/ui/pagination/Pagination";
import { Product } from "interface";

interface Props {
  searchParams: Promise<{ search: string; page?: string }>;
}

export default async function ProductPage({ searchParams }: Props) {
  const { search, page } = await searchParams;
  const pageNumber = page ? +page : 1;
  console.log({ pageNumber });

  const { products, totalPages } = search
    ? await GetProductsByName({ search, page: pageNumber })
    : await GetProducts({ page: pageNumber });

  if (!products) redirect("/empty");

  if (!totalPages) redirect("/empty");

  return (
    <>
      <TitleImage urlImage="/banner-products.jpeg">Productos</TitleImage>
      <div className="md:container mx-auto ">
        <Search />

        {!products ? (
          <p className="text-lg text-center mt-10">
            No hay productos disponibles
          </p>
        ) : (
          <CardGrid<Product> data={products} title="productos" />
        )}
        <Pagination totalPages={totalPages} />
      </div>
    </>
  );
}
