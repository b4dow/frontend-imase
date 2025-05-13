import { Box, Home } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import Image from "next/image";

const menu = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Listado de Servicios",
    url: "/dashboard/servicios",
    icon: Box,
  },
  {
    title: "Listado de Productos",
    url: "/dashboard/productos",
    icon: Home,
  },
  {
    title: "Inventario",
    url: "/dashboard/inventario",
    icon: Home,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="mx-5">
        <SidebarGroup>
          <div className="flex items-center gap-4">
            <Image
              src="https://avatars.githubusercontent.com/u/64246172?v=4"
              alt="Avatar Github"
              width={50}
              height={50}
              className="rounded-full"
              unoptimized
            />
            <span className="text-sm">hackc7360@gmail.com</span>
          </div>
        </SidebarGroup>
      </SidebarHeader>
      <SidebarContent className="mx-5">
        <SidebarGroup />
        <SidebarGroupLabel>Aplicacion</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu className="space-y-5">
            {menu.map((item) => (
              <SidebarMenuItem key={item.title} className="">
                <SidebarMenuButton asChild>
                  <Link href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
