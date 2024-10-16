import { Suspense } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import {HeadingBanner} from "@/components/HeadingBanner";
import CardServices from "../components/CardServices";
import { getServices } from "@/services/api";
import { SearchServicePage } from "../components/SearchServicePage";
import { Button } from "@/components/ui/button";
import { SkeletonServices } from "../../../../../components/SkeletonHome/SkeletonServices";
import { PaginationPage } from "@/components/PaginationPage";

type ServicePageProps = {
  searchParams: {
    page: number;
    search: string;
  };
};

export default async function ServicePage({ searchParams }: ServicePageProps) {
  const search = searchParams.search;
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
        <HeadingBanner imageUrl="/banner-products.jpeg">Búsqueda</HeadingBanner>
      ) : (
        <HeadingBanner imageUrl="/banner-products.jpeg">Servicios</HeadingBanner>
      )}
      <div className="flex items-center ">
        <Suspense fallback={<SkeletonServices />}>
          <SearchServicePage placeholder="Buscar..." />
        </Suspense>
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
