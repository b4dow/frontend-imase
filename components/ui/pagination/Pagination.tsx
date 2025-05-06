"use client";

import { generatePaginationNumbers } from "@/utils/generate-pagination/GeneratePagination";
import clsx from "clsx";
import Link from "next/link";
import { redirect, usePathname, useSearchParams } from "next/navigation";
import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5";

interface Props {
  totalPages: number;
}

export const Pagination = ({ totalPages }: Props) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const pageString = searchParams.get("page") ?? 1;
  const currentPage = isNaN(+pageString) ? 1 : +pageString;

  if (currentPage < 1 || isNaN(+pageString)) {
    redirect(pathname);
  }

  const allPages = generatePaginationNumbers(currentPage, totalPages);

  const createPageUrl = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);

    if (pageNumber === "...") {
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
    <div className="mb-32 flex items-center justify-center">
      <nav>
        <ul className="flex">
          <li>
            <button className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300">
              <IoChevronBackOutline size={30} />
            </button>
          </li>
          {allPages.map((page, index) => (
            <li key={page + "-" + index}>
              <Link
                className={clsx(
                  "mx-1 flex h-9 w-9 items-center justify-center rounded-full bg-pink-500 p-0 text-sm text-white shadow-md transition duration-150 ease-in-out",
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
            <a
              className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
              href="#"
            >
              2
            </a>
          </li>
          <li>
            <a
              className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
              href="#"
            >
              3
            </a>
          </li>
          <li>
            <button
              className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
              aria-label="Next"
            >
              <IoChevronForwardOutline size={30} />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};
