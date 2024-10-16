import Link from "next/link";
import { useMemo } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { PaginationLink } from "@/components/PaginationLink";
import { ChevronLeft, ChevronRight } from "lucide-react";

type PaginationProps = {
  search: string;
  page: number;
  totalPages: number;
  url: string;
};

export const PaginationPage = ({
  search,
  page,
  totalPages,
  url,
}: PaginationProps) => {
  const pages = useMemo(
    () => Array.from({ length: totalPages }, (_, i) => i + 1),
    [totalPages]
  );

  const generatePage = (page: number, search: string) =>
    `/${url}?page=${page}${search ? `&search=${search}` : ""}`;

  const generatePagePrev = (page: number, search: string) =>
    `/${url}?page=${page - 1}${search ? `&search=${search}` : ""}`;

  const generatePageNext = (page: number, search: string) =>
    `/${url}?page=${page + 1}${search ? `&search=${search}` : ""}`;

  return (
    <div className="my-10">
      <Pagination>
        <PaginationContent className="flex gap-10 items-center justify-center">
          {page > 1 && (
            <PaginationItem>
              <Link href={generatePagePrev(page, search)}>
                <ChevronLeft />
              </Link>
            </PaginationItem>
          )}
          <PaginationItem className="flex ">
            {pages.map((currentPage) => (
              <PaginationLink
                key={currentPage}
                href={generatePage(currentPage, search)}
              >
                <span
                  className={`px-4 py-3 rounded ${
                    currentPage === page
                      ? "bg-red-500 text-white font-bold"
                      : ""
                  }`}
                >
                  {currentPage}
                </span>
              </PaginationLink>
            ))}
          </PaginationItem>

          <PaginationItem>
            {totalPages > page ? (
              <Link
                href={generatePageNext(page, search)}
                className={`${totalPages - 1 < page ? "bg-gray-500" : ""}`}
              >
                <ChevronRight />
              </Link>
            ) : (
              ""
            )}
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};
