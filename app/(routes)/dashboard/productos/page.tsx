import { TableProducts } from "./ui/TableProducts";

export default async function ProductDashboard() {
  return (
    <div className=" container mx-auto py-10 ">
      <h1 className="text-4xl mb-5">Listado de Productos</h1>
      <TableProducts />
    </div>
  );
}
