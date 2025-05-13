import { GetProductById } from "@/actions/product";
import { ConfirmDeleteProduct } from "./ui/ConfirmDeleteProduct";

interface DeleteFormPageProps {
  searchParams: { id: string };
}

export default async function DeleteFormPage({
  searchParams,
}: DeleteFormPageProps) {
  const { id } = searchParams;

  const product = await GetProductById(id);

  if (!product) return null;

  return (
    <>
      <h1 className="text-4xl font-semibold">Eliminar Producto</h1>
      <ConfirmDeleteProduct product={product} />
    </>
  );
}
