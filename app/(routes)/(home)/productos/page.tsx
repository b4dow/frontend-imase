import { GetProducts } from "@/actions";
import { TitleImage, Search, CardGrid, Pagination } from "@/components";

export default async function ProductPage() {
  const products = await GetProducts();

  if (!products) return;

  return (
    <>
      <TitleImage urlImage="/banner-products.jpeg">Productos</TitleImage>
      <div className="md:container mx-auto">
        <Search />

        <CardGrid data={products} title="productos" />
        <Pagination />
      </div>
    </>
  );
}
