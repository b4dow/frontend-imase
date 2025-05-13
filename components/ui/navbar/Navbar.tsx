"use client";

import Image from "next/image";
import Link from "next/link";
import { useUiStore } from "store/ui/ui.store";
import { NavbarMobile } from "./navbar-mobile/NavbarMobile";
import { NavbarDesktop } from "./navbar-desktop/NavbarDesktop";

export const Navbar = () => {
  const openSideMenu = useUiStore((state) => state.isSideOpenMenu);

  return (
    <div className="flex items-center justify-between max-h-screen py-2 w-full my-2 px-5 md:container">
      <div>
        <Link href="/">
          <Image src="/logo.webp" alt="Logo Image" width={100} height={50} />
        </Link>
      </div>
      <div className="hidden sm:block">
        <NavbarDesktop />
      </div>
      <div className="block sm:hidden">
        <button
          className="hover:bg-gray-200 rounded-lg px-5 py-2 cursor-pointer"
          onClick={openSideMenu}
        >
          Menu
        </button>
        <NavbarMobile />
      </div>
    </div>
  );
};
