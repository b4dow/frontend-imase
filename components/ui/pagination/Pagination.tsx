"use client";

import clsx from "clsx";
import Link from "next/link";
import { redirect, usePathname, useSearchParams } from "next/navigation";
import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5";
import { generatePaginationNumbers } from "utils";

interface Props {
  totalPages: number;
}

export const Pagination = ({ totalPages }: Props) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const pageString = searchParams.get("page") ?? 1;
  const currentPage = isNaN(+pageString) ? 1 : +pageString;

  if (totalPages <= 0) return null;

  if (currentPage < 1 || isNaN(+pageString)) {
    redirect(pathname);
  }

  const allPages = generatePaginationNumbers(currentPage, totalPages);

  const createPageUrl = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);

    if (pageNumber === "..." || +pageNumber < 1 || +pageNumber > totalPages) {
      return `${pathname}?${params.toString()}`;
    }

    if (+pageNumber > totalPages) {
      return `${pathname}?${params.toString()}`;
    }

    if (+pageNumber === 0) {
      return `${pathname}`;
    }

    params.set("page", pageNumber.toString());

    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className=" mb-16 flex items-center  justify-center ">
      <nav>
        <ul className="flex">
          <li>
            <Link
              href={createPageUrl(currentPage - 1)}
              className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
            >
              <IoChevronBackOutline size={30} />
            </Link>
          </li>
          {allPages.map((page, index) => (
            <li key={page + "-" + index}>
              <Link
                className={clsx(
                  "mx-1 flex h-9 w-9 items-center justify-center rounded-full p-0 text-sm text-white shadow-md transition duration-150 ease-in-out",
                  {
                    "bg-red-500": page === currentPage,
                    "hover:bg-gray-200 hover:text-gray-800":
                      page !== currentPage,
                  },
                )}
                href={createPageUrl(page)}
              >
                {page}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href={createPageUrl(currentPage + 1)}
              className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
            >
              <IoChevronForwardOutline size={30} />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
