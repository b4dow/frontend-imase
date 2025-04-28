import Link from "next/link";

export const NavbarDesktop = () => {
  return (
    <div className="flex gap-5">
      <Link
        href="/servicios"
        className="hover:bg-gray-200 rounded-lg px-3 py-2"
      >
        Servicios
      </Link>
      <Link
        href="/productos"
        className="hover:bg-gray-200 rounded-lg px-3 py-2"
      >
        Productos
      </Link>
      <Link href="/contacto" className="hover:bg-gray-200 rounded-lg px-3 py-2">
        Contacto
      </Link>
    </div>
  );
};
