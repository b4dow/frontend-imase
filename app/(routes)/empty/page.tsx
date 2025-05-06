import { FaRegMoon } from "react-icons/fa";
import Link from "next/link";

const Empty = () => {
  return (
    <div className="flex-grow flex flex-col items-center justify-center px-4 my-12">
      <div className="text-center max-w-md">
        <div className="mb-8 relative w-64 h-64 mx-auto">
          <FaRegMoon className="w-64 h-64 text-gray-200" strokeWidth={1} />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          No hay data disponible
        </h1>
        <p className="text-gray-600 mb-8">
          No se encontró la información solicitada. Inténtelo más tarde o vuelva
          a la página de inicio.{" "}
        </p>
        <Link className="hover:underline text-lg" href="/">
          Retorna a inicio
        </Link>
      </div>
    </div>
  );
};

export default Empty;
