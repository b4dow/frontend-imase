"use client";
import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";

const dataNavbar = [
  {
    id: 1,
    name: "Inicio",
    href: "/",
  },
  {
    id: 2,
    name: "Servicios",
    href: "/servicios",
  },
  {
    id: 3,
    name: "Productos",
    href: "/productos",
  },
  {
    id: 4,
    name: "Contacto",
    href: "/contacto",
  },
];

export function Navbar() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          {dataNavbar.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              legacyBehavior
              passHref
              className={`${pathname ? "text-red-500" : ""}`}
            >
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-transparent active:bg-transparent hover:text-red-500 active:text-red-500 text-white text-lg font-bold `}
              >
                {item.name}
              </NavigationMenuLink>
            </Link>
          ))}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
