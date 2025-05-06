import { GetProducts } from "@/actions";
import { Pagination, Table } from "@/components";

export const TableProducts = async () => {
  const products = await GetProducts();

  if (!products) return;

  return (
    <>
      <Table services={products}></Table>
      <Pagination />
    </>
  );
};
