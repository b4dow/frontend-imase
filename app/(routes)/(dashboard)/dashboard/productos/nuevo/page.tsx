import { Button } from "@/components/ui/button";
import { CreateServiceForm } from "../components/ServicesForm/";
import Link from "next/link";

export default function NewProduct() {
  return (
    <>
      <Link href="/dashboard/productos">
        <Button>Volver</Button>
      </Link>
      <h1 className="text-2xl font-semibold text-center">Nuevo Producto</h1>
      <CreateServiceForm />
    </>
  );
}
