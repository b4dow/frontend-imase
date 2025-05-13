import { Service } from "@/interface/service.interface";
import { columns } from "./Column";
import { DataTable } from "./DataTable";
import { GetServices } from "@/actions/service/get-services";

async function getData(): Promise<Service[]> {
  const { services } = await GetServices({});
  return services;
}

export const TableServices = async () => {
  const data = await getData();

  if (!data) return null;
  return (
    <>
      <DataTable columns={columns} data={data} />
    </>
  );
};
