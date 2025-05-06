"use client";
import { useUiStore } from "@/store";
import { TopMenuLinks } from "./ui/TopMenuLinks";
import { SignOut } from "@/actions";

interface Props {
  email: string;
}

export const TopMenu = ({ email }: Props) => {
  const openMenu = useUiStore((state) => state.isSideOpenMenu);
  return (
    <div className="flex justify-between items-center mx-10 my-5 pb-2 border-b border-gray-200">
      <div>
        <button
          onClick={openMenu}
          className="hover:bg-gray-100 px-3 py-1 rounded-lg cursor-pointer"
        >
          Menu
        </button>
        <TopMenuLinks />
      </div>
      <div className="flex gap-5">
        <p className="text-sm">{email}</p>
        <button
          className="text-sm hover:text-red-500 cursor-pointer outline-none"
          onClick={async () => await SignOut()}
        >
          Cerrar Sesion
        </button>
      </div>
    </div>
  );
};
