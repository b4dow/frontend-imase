import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { IoCloseOutline } from "react-icons/io5";
import { useUiStore } from "@/store";

export const TopMenuLinks = () => {
  const isSideMenu = useUiStore((state) => state.isSideMenu);
  const closeMenu = useUiStore((state) => state.isSideCloseMenu);

  return (
    <div>
      {isSideMenu && <div className="fixed inset-0 bg-black z-10 opacity-80" />}

      {isSideMenu && (
        <div
          className="fixed inset-0 blur backdrop-blur-sm z-10"
          onClick={closeMenu}
        />
      )}

      <nav
        className={clsx(
          "fixed w-[300px] top-0 bottom-0 left-0 bg-white min-h-screen z-20 transform  transform-translate duration-700 ease-in",
          {
            "-translate-x-full": !isSideMenu,
          },
        )}
      >
        <IoCloseOutline
          size={30}
          className=" absolute top-2 left-5 mb-9 cursor-pointer hover:text-red-500"
          onClick={closeMenu}
        />
        <div className="flex items-center  pt-10 flex-col space-y-10">
          <Link href="/">
            <Image src="/logo.webp" alt="Logo Image" width={100} height={50} />
          </Link>
          <Link className="menuItems" href="/dashboard">
            Dashboard
          </Link>
          <Link className="menuItems" href="/dashboard/servicios">
            Tabla de Servicios
          </Link>
          <Link className="menuItems" href="/dashboard/productos">
            Tabla de Productos
          </Link>
          <Link className="menuItems" href="/dashboard/inventario">
            Inventario de Productos
          </Link>
          <Link className="menuItems" href="/dashboard/Cotizador">
            Cotizador
          </Link>
        </div>
      </nav>
    </div>
  );
};
