import { Suspense } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import Heading from "@/components/Heading";
import CardServices from "../components/CardServices";
import { getServices } from "@/services/api";
import { SearchServicePage } from "../components/SearchServicePage";
import { Button } from "@/components/ui/button";
import { SkeletonServices } from "../components/SkeletonServices";
import { PaginationPage } from "@/components/PaginationPage";

type ServicePageProps = {
  searchParams: {
    page: number;
    search: string;
  };
};

export default async function ServicePage({ searchParams }: ServicePageProps) {
  const search = searchParams.search as string;
  const page = +searchParams.page || 1;
  const pageSize = 6;
  if (page < 0) redirect("/servicios");

  const { services, servicesCount } = await getServices({
    search,
    page,
    pageSize,
  });
  const totalPages =
    servicesCount > 0 ? Math.ceil(servicesCount / pageSize) : 1;
  if (page > totalPages) redirect("/servicios");

  return (
    <>
      {search ? (
        <Heading imageUrl="/banner-products.jpeg">Búsqueda</Heading>
      ) : (
        <Heading imageUrl="/banner-products.jpeg">Servicios</Heading>
      )}
      <div className="flex items-center ">
        <SearchServicePage placeholder="Buscar..." />
        {search && (
          <div className="btn rounded-none  bg-red-500 text-white">
            <Link href="/servicios">
              <Button className="bg-red-500">Volver</Button>
            </Link>
          </div>
        )}
      </div>

      <Suspense fallback={<SkeletonServices />}>
        <CardServices services={services} />
      </Suspense>
      {servicesCount > 0 && (
        <PaginationPage
          search={search}
          page={page}
          totalPages={totalPages}
          url="servicios"
        />
      )}
    </>
  );
}
