import { getProducts } from "@/services/api";
import { DataProps } from "@/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CreateProduct } from "./components/createProduct";
import { PaginationPage } from "@/components/PaginationPage";
import { redirect } from "next/navigation";
import { EditProduct } from "./components/editProduct";
import { DeleteProduct } from "./components/deleteProduct";
import { UpdateAvailable } from "@/components/UpdateAvailable";

type ProductsPageProps = {
  searchParams: {
    search: string;
    page: number;
    pageSize: number;
  };
};

export default async function TableProductPage({
  searchParams,
}: ProductsPageProps) {
  const search = searchParams.search;
  const page = searchParams.page || 1;
  const pageSize = 6;

  if (page < 0) redirect("/dashboard/productos");

  const { products, count } = await getProducts({
    search,
    page,
    pageSize,
  });

  const totalPages = count > 0 ? Math.ceil(count / pageSize) : 1;

  if (page > totalPages) redirect("/dashboard/productos");

  return (
    <div>
      <h2 className="text-3xl font-extrabold mb-10">Lista de Productos</h2>
      <CreateProduct />
      {!count ? (
        <p className="text-center text-2xl font-black text-black/70">
          No hay Datos
        </p>
      ) : (
        <>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nombre</TableHead>
                <TableHead>Whatsapp</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead>Opciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product: DataProps) => (
                <TableRow key={product.id}>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell className="font-medium">{product.url}</TableCell>
                  <TableCell>
                    <UpdateAvailable {...product} title="product" />
                  </TableCell>
                  <TableCell className="flex gap-2">
                    <EditProduct product={product} />
                    <DeleteProduct id={product.id} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {count > 0 && (
            <PaginationPage
              search={search}
              page={page}
              totalPages={totalPages}
              url="dashboard/productos"
            />
          )}
        </>
      )}
    </div>
  );
}
