"use client";
import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";
import { dataNavbar } from "./navbar.data";

export function Navbar() {
  const pathname = usePathname();
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem className="flex gap-6">
          {dataNavbar.map((item) => (
            <Link
              href={item.href}
              key={item.id}
              className={`${pathname === item.href ? "text-red-500" : "text-white"} hover:text-red-500 text-lg`}
            >
              {item.name}
            </Link>
          ))}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
