import Link from "next/link";
import { TableServices } from "./ui/TableServices";

const ServicePage = async () => {
  return (
    <>
      <h1 className="text-4xl mb-4">Listado de Servicios </h1>
      <Link
        href="/dashboard/servicios/nuevo"
        className="inline-block hover:underline mb-4"
      >
        Nuevo Servicio
      </Link>
      <TableServices />
    </>
  );
};

export default ServicePage;
