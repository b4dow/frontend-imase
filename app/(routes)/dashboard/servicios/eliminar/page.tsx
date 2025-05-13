import { GetServiceById } from "@/actions/service";
import { ConfirmDeleteService } from "./ui/ConfirmDeleteService";

interface DeleteServiceProps {
  searchParams: Promise<{ id: string }>;
}
export default async function DeleteService({
  searchParams,
}: DeleteServiceProps) {
  const { id } = await searchParams;

  const service = await GetServiceById(id);

  return (
    <>
      <h2 className="text-4xl">Eliminar Producto</h2>
      <ConfirmDeleteService service={service} />
    </>
  );
}
