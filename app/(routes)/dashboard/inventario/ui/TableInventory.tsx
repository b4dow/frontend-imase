import { GetProducts } from "@/actions";
import Link from "next/link";

export const TableInventory = async () => {
  const products = await GetProducts();

  if (!products) return;

  return (
    <div className="container my-14">
      <table className="text-left w-full">
        <thead className="bg-black flex text-white w-full">
          <tr className="flex w-full mb-4">
            <th className="p-4 w-1/4">Nombre</th>
            <th className="p-4 w-1/4">Slug</th>
            <th className="p-4 w-1/4">Disponibilidad</th>
            <th className="p-4 w-1/4">URL de Whatsapp</th>
            <th className="p-4 w-1/4">Cantidad</th>
          </tr>
        </thead>
        <tbody className="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll w-full h-[50vh]">
          {products.map((service) => (
            <tr key={service.id} className="flex w-full mb-4">
              <td className="p-4 w-1/4">{service.name}</td>
              <td className="p-4 w-1/4">{service.slug}</td>
              <td className="p-4 w-1/4">
                {service.available ? "Disponible" : "No Disponible"}
              </td>
              <td className="p-4 w-1/4">
                <Link className="hover:underline" href={service.url}>
                  Whatsapp
                </Link>
              </td>
              <td className="p-4 w-1/4">{service.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
