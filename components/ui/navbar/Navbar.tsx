"use client";
import { UseMenu } from "@/hook/useMenu";
import { NavbarMobile } from "./navbar-mobile/NavbarMobile";
import Image from "next/image";
import { NavbarDesktop } from "./navbar-desktop/NavbarDesktop";
import Link from "next/link";

export const Navbar = () => {
  const { dispatch } = UseMenu();

  return (
    <div className="flex items-center justify-between py-2 w-full mb-5 container">
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
          onClick={() => dispatch({ type: "OPEN_MENU" })}
        >
          Menu
        </button>
        <NavbarMobile />
      </div>
    </div>
  );
};
