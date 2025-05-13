"use client";
import { useUiStore } from "@/store/ui/ui.store";
import clsx from "clsx";
import Link from "next/link";
import { IoCloseOutline } from "react-icons/io5";

export const NavbarMobile = () => {
  const isSideMenu = useUiStore((state) => state.isSideMenu);

  const isSideCloseMenu = useUiStore((state) => state.isSideCloseMenu);

  return (
    <div>
      {isSideMenu && (
        <div className="fixed top-0 right-0 bottom-0 z-10 bg-black w-full min-h-screen opacity-80" />
      )}

      {isSideMenu && (
        <div
          className="fixed top-0 right-0 z-10 w-full min-h-screen backdrop-filter backdrop-blur-sm"
          onClick={isSideCloseMenu}
        />
      )}

      <nav
        className={clsx(
          " fixed right-0 top-0 bottom-0 w-[300px] min-h-screen bg-white z-20 shadow-2xl transform transition-all duration-700 ease-in ",
          {
            "translate-x-full": !isSideMenu,
          },
        )}
      >
        <IoCloseOutline
          size={30}
          className="absolute right-5 top-5 hover:text-red-500"
          onClick={isSideCloseMenu}
        />
        <div className="flex flex-col items-center gap-10 mt-20 ">
          <Link href="/" className="text-lg hover:text-red-500 ">
            Inicio
          </Link>
          <Link href="/" className="text-lg hover:text-red-500">
            Servicios
          </Link>
          <Link href="/" className="text-lg hover:text-red-500">
            Productos
          </Link>
          <Link href="/" className="text-lg hover:text-red-500">
            Contacto
          </Link>
        </div>
      </nav>
    </div>
  );
};
