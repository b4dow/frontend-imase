import { GetServiceById } from "@/actions/service";
import { EditServiceForm } from "./ui/EditServiceForm";

interface EditServiceProps {
  searchParams: Promise<{ id: string }>;
}

export default async function EditService({ searchParams }: EditServiceProps) {
  const { id } = await searchParams;

  const service = await GetServiceById(id);

  if (!service) return null;

  return (
    <>
      <h2 className="text-3xl font-semibold">Editar Servicio</h2>
      <EditServiceForm service={service} />
    </>
  );
}
