import { CardGrid, TitleImage, Pagination, Search } from "@/components";
import { GetServices } from "@/actions";
import { Service } from "@/interface";

export default async function ServicePage() {
  const services = await GetServices();

  if (!services?.length) return;

  return (
    <>
      <TitleImage urlImage="/banner-products.jpeg">Servicios</TitleImage>

      <div className="container mx-auto">
        <Search />
        <CardGrid<Service> data={services} title="servicios" />
      </div>
      <Pagination />
    </>
  );
}
