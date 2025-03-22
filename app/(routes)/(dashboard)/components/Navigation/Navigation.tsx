"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavigationI } from "../../dashboard/layout";
import clsx from "clsx";

interface Props {
  navigation: Array<NavigationI>;
}

export const Navigation = ({ navigation }: Props) => {
  const pathname = usePathname();
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
