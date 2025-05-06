import { GetServices } from "@/actions";
import { Pagination, Table } from "@/components";
import { Service } from "@/interface";

export const TableServices = async () => {
  const services = await GetServices();

  if (!services) return;

  return (
    <>
      <Table<Service> services={services} />
      <Pagination />
    </>
  );
};
