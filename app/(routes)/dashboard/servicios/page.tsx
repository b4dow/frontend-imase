import { TableServices } from "./ui/TableServices";

const ServicePage = async () => {
  return (
    <>
      <h1 className="text-4xl text-center">Listado de Servicios </h1>
      <TableServices />
    </>
  );
};

export default ServicePage;
