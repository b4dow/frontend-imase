import Link from "next/link";
import { usePathname } from "next/navigation";

import { GeneralDataDashboard } from "./SidebarRoutes.data";

export function SidebarRoutes() {
  const location = usePathname();
  return (
    <div className="flex flex-col gap-2 items-center justify-center w-full">
      {GeneralDataDashboard.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className={`w-full py-2 ${ 
            location === item.href ? "bg-red-500 text-white" : ""
          } `}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}
