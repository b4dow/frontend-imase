"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { AiOutlineProduct } from "react-icons/ai";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineInventory2 } from "react-icons/md";

export interface NavigationI {
  title: string;
  icon: React.ReactNode;
  link: string;
}

export const SidebarRoutes = () => {
  const pathname = usePathname();
  const navigation: Array<NavigationI> = [
    {
      title: "Dashboard",
      icon: <IoHomeOutline />,
      link: "/dashboard",
    },
    {
      title: "Productos",
      icon: <AiOutlineProduct />,
      link: "/dashboard/productos",
    },
    {
      title: "Servicios",
      icon: <AiOutlineProduct />,
      link: "/dashboard/servicios",
    },
    {
      title: "Inventario",
      icon: <MdOutlineInventory2 />,
      link: "/dashboard/inventario",
    },
  ];

  return (
    <>
      <ul className="space-y-2 tracking-wide mt-4">
        {navigation.map((item: NavigationI) => (
          <li key={item.link}>
            <Link
              href={item.link}
              className={clsx(
                "relative px-4 py-3 flex items-center space-x-4 rounded-xl text-black",

                {
                  "text-white bg-gradient-to-r from-red-600 to-gray-400":
                    pathname === item.link,
                },
              )}
            >
              {item.icon}
              <span className="-mr-1 font-medium">{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
