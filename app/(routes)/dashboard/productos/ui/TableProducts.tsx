import Link from "next/link";
import { columns } from "./Column";
import { DataTable } from "./DataTable";
import { GetProducts } from "actions/product";
import { Product } from "@/interface/product.interface";

async function getData(): Promise<Product[] | null> {
  const { products } = await GetProducts({});
  if (!products) return null;
  return products;
}

export const TableProducts = async () => {
  const data = await getData();

  if (!data) return null;

  return (
    <>
      <Link
        href="/dashboard/productos/nuevo"
        className="inline-block hover:underline mb-5"
      >
        Nuevo Producto
      </Link>
      <DataTable columns={columns} data={data} />
    </>
  );
};
