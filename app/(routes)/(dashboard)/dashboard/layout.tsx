"use client";
import { NavbarDashboard } from "../components/NavbarDashboard";
import { Sidebar } from "../components/Sidebar/";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-full h-full">
      <div className="hidden h-full lg:block w-80 xl:fixed ">
        <Sidebar />
      </div>
      <div className="w-full h-full xl:ml-80 ">
        <NavbarDashboard />
        <div className="p-6 h-max">{children}</div>
      </div>
    </div>
  );
}
