import { getServices } from "@/services/api";
import { DataProps } from "@/types";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CreateService } from "./components/CreateService";
import { EditService } from "./components/EditService";
import { PaginationPage } from "@/components/PaginationPage";
import { redirect } from "next/navigation";
import { DeleteService } from "./components/DeleteService";
import { Button } from "@/components/ui/button";
import { updateAvailability } from "@/services/api";
import { revalidatePath } from "next/cache";
import { Input } from "@/components/ui/input";

type ServicesPageProps = {
  searchParams: {
    search: string;
    page: number;
    pageSize: number;
  };
};

export default async function TableServicesPage({
  searchParams,
}: ServicesPageProps) {
  const search = searchParams.search;
  const page = searchParams.page || 1;
  const pageSize = 6;

  if (page < 0) redirect("/dashboard/servicios");

  const { services, servicesCount } = await getServices({
    search,
    page,
    pageSize,
  });

  const totalPages =
    servicesCount > 0 ? Math.ceil(servicesCount / pageSize) : 1;

  if (page > totalPages) redirect("/dashboard/servicios");

  const handleForm = async (formData: FormData) => {
    "use server";
    const id = formData.get("id");
    await updateAvailability(id as string);
    revalidatePath("/dashboard/servicios");
  };

  return (
    <div>
      <h2 className="text-3xl font-extrabold mb-10">Lista de Servicios</h2>
      <CreateService />
      {!servicesCount ? (
        <p className="text-2xl font-black text-center text-black/70">No hay Datos</p>
      ) : (
        <>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Nombre</TableHead>
                <TableHead>Whatsapp</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead>Opciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {services.map((service: DataProps) => (
                <TableRow key={service.id}>
                  <TableCell className="font-medium">{service.name}</TableCell>
                  <TableCell className="font-medium">{service.url}</TableCell>
                  <TableCell>
                    <form action={handleForm}>
                      <Input type="hidden" name="id" value={service.id} />
                      <Button
                        type="submit"
                        className={`cursor-pointer bg-transprent hover:bg-transparent ${
                          service.available ? "text-black" : "text-red-500"
                        }`}
                      >
                        {service.available ? "Disponible" : "No Disponible"}
                      </Button>
                    </form>
                  </TableCell>
                  <TableCell className="flex gap-2">
                    <EditService service={service} />

                    <DeleteService id={service.id} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </>
      )}
      {servicesCount > 0 && (
        <PaginationPage
          search={search}
          page={page}
          totalPages={totalPages}
          url="dashboard/servicios"
        />
      )}
    </div>
  );
}
