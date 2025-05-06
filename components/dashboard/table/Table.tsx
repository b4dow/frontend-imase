"use client";

import { Service } from "@/interface";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props<T> {
  services: Array<T>;
}

export const Table = <T extends Service>({ services }: Props<T>) => {
  const pathname = usePathname();
  return (
    <div className="container my-14">
      <table className="text-left w-full">
        <thead className="bg-black flex text-white w-full">
          <tr className="flex w-full mb-4">
            <th className="p-4 w-1/4">Nombre</th>
            <th className="p-4 w-1/4">Slug</th>
            <th className="p-4 w-1/4">Disponibilidad</th>
            <th className="p-4 w-1/4">URL de Whatsapp</th>
            <th className="p-4 w-1/4">Opciones</th>
          </tr>
        </thead>
        <tbody className="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll w-full h-[50vh]">
          {services.map((service) => (
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
              <td className=" p-4 w-1/4 space-x-4 ">
                <Link
                  href={`${pathname}/editar`}
                  className="hover:underline cursor-pointer"
                >
                  Editar
                </Link>
                <Link
                  href={`${pathname}/eliminar`}
                  className="text-red-500 hover:underline cursor-pointer"
                >
                  Eliminar
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
