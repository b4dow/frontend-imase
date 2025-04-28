"use client";
import { UseMenu } from "@/hook/useMenu";
import clsx from "clsx";
import Link from "next/link";
import { IoCloseOutline } from "react-icons/io5";

export const NavbarMobile = () => {
  const { state, dispatch } = UseMenu();
  return (
    <div>
      {state.isSideOpen && (
        <div className="fixed top-0 right-0 z-10 bg-black w-full h-full opacity-80" />
      )}

      {state.isSideOpen && (
        <div
          className="fixed top-0 right-0 z-10 w-full h-full backdrop-filter backdrop-blur-sm"
          onClick={() => dispatch({ type: "CLOSE_MENU" })}
        />
      )}

      <nav
        className={clsx(
          " fixed  right-0 top-0 w-[300px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-700 ease-in ",
          {
            "translate-x-full": !state.isSideOpen,
          },
        )}
      >
        <IoCloseOutline
          size={30}
          className="absolute right-5 top-5 hover:text-red-500"
          onClick={() => dispatch({ type: "CLOSE_MENU" })}
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
