import { EditProductForm } from "./ui/EditProductForm";
import { GetProductById } from "@/actions/product";

interface EditProductProps {
  searchParams: Promise<{ id: string }>;
}

export default async function EditProduct({ searchParams }: EditProductProps) {
  const { id } = await searchParams;

  const product = await GetProductById(id);

  if (!product) return null;

  return (
    <>
      <h2 className="text-3xl font-semibold">Editar Producto</h2>
      <EditProductForm product={product} />
    </>
  );
}
