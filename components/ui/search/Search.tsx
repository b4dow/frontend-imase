"use client";

import { toast } from "sonner";
import { IoSearchOutline } from "react-icons/io5";
import { useState } from "react";
import { GetServicesByName } from "actions/service";
import { GetProductsByName } from "actions/product";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

export function Search() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [search, setSearch] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const params = new URLSearchParams(searchParams);

    if (!search.length) {
      return router.push(pathname);
    }

    if (pathname === "/productos") {
      const { ok, message } = await GetProductsByName({ search });
      if (!ok && message) {
        toast.error(message);
        return;
      }
    }

    if (pathname === "/servicios") {
      const { ok, message } = await GetServicesByName({ search });
      if (!ok && message) {
        toast.error(message);
        return;
      }
    }

    params.set("search", search);

    router.push(`${pathname}?${params.toString()}`);

    setSearch("");
  };

  return (
    <>
      <div className="my-10 flex items-center  w-full">
        <form className="flex" onSubmit={handleSubmit}>
          <div className="flex items-center max-w-sm space-x-2">
            <div className="flex items-center bg-gray-100  h-full pl-5 rounded-md">
              <IoSearchOutline size={20} className=" text-red-500" />
              <input
                type="text"
                name="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className=" outline-none pl-5"
              />
            </div>
            <button type="submit" className="btn-primary">
              Buscar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
