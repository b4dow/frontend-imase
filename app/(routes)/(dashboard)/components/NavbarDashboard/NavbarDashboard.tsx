"use client";
import { Button } from "@/components/ui/button";
import SidebarMobile from "../SidebarMobile/SidebarMobile";

export function NavbarDashboard() {

  return (
    <div className="my-5 flex items-center justify-between md:justify-end mx-10">
      <div className="md:hidden">
        <SidebarMobile/>
      </div>
      <Button className="bg-red-500 ">Cerrar Sesión</Button>
    </div>
  );
}
