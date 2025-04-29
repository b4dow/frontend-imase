import { CardGrid, TitleImage, Pagination, Search } from "@/components";
import { GetServices, GetServicesByName } from "@/actions";
import { Service } from "@/interface";

interface Props {
  searchParams: Promise<{ search: string }>;
}

export default async function ServicePage({ searchParams }: Props) {
  const { search } = await searchParams;

  const services = await GetServices();

  const servicesByName = await GetServicesByName(search);

  if (!services?.length) return;

  return (
    <>
      <TitleImage urlImage="/banner-products.jpeg">Servicios</TitleImage>

      <div className="container mx-auto">
        <Search />

        {search ? (
          <CardGrid<Service>
            data={servicesByName as Service[]}
            title="servicios"
          />
        ) : (
          <CardGrid<Service> data={services} title="servicios" />
        )}
      </div>
      <Pagination />
    </>
  );
}
