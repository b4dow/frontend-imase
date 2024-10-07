import Image from "next/image";
import { SidebarRoutes } from "../SidebarRoutes";
import Link from "next/link";

export function Sidebar() {
  return (
    <div>
      <div className="flex flex-col h-full   items-center justify-between border-r border-slate-400">
        <div className=" py-10 w-3/4 ">
          <div className="relative flex items-center justify-center">
            <Link href="/dashboard">
              <Image
                src="/logo-oficial.png"
                alt="Logo"
                width={120}
                height={50}
              />
            </Link>
          </div>
          <div className="py-5 text-center">
            <SidebarRoutes />
          </div>
        </div>
      </div>
    </div>
  );
}
