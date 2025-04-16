"use client";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { dataNavbar } from "../navbar.data";

export function NavbarMobile() {
  const route = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="link">
          <IoMenu className="text-white" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <div className="h-full flex items-center justify-center">
          <ul>
            {dataNavbar.map((item) => (
              <li
                key={item.id}
                className={`text-center py-4 ${route === item.href && "text-red-500"}`}
              >
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
}
