"use client";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

export function NavbarMobile() {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className=" flex-col">
        <ul className="flex items-center justify-center flex-col gap-5 px-5 py-10 text-center w-full">
          <li className={`${pathname === "/" ? "bg-red-300" : ""} w-full`}>
            <Link href="/">Inicio</Link>
          </li>
          <li
            className={`${
              pathname === "/servicios" ? "bg-red-300" : ""
            } w-full`}
          >
            <Link href="/servicios">Servicios</Link>
          </li>
          <li
            className={`${
              pathname === "/productos" ? "bg-red-300" : ""
            } w-full`}
          >
            <Link href="/productos">Productos</Link>
          </li>
          <li
            className={`${pathname === "/contacto" ? "bg-red-300" : ""} w-full`}
          >
            <Link href="/contacto">Contacto</Link>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
}
