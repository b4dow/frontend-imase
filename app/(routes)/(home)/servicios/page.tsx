import { redirect } from "next/navigation";
import { GetServicesByName, GetServices } from "actions/service";
import { TitleImage, Search, CardGrid, Pagination } from "components/ui";
import { Service } from "interface";

interface Props {
  searchParams: Promise<{ search: string; page?: string }>;
}

export default async function ServicePage({ searchParams }: Props) {
  const { search, page } = await searchParams;
  const pageNumber = page ? +page : 1;

  const { services, totalPages } = search
    ? await GetServicesByName({ search, page: pageNumber })
    : await GetServices({ page: pageNumber });

  if (!services) redirect("/empty");

  return (
    <>
      <TitleImage urlImage="/banner-products.jpeg">Servicios</TitleImage>

      <div className="container mx-auto">
        <Search />

        <CardGrid<Service> data={services} title="servicios" />

        <Pagination totalPages={totalPages} />
      </div>
    </>
  );
}
