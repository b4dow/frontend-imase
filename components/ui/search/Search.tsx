"use client";

import { IoSearchOutline } from "react-icons/io5";

export function Search() {
  return (
    <>
      <div className="my-10 flex items-center  w-full">
        <form className="flex">
          <div className="flex items-center max-w-sm space-x-2">
            <div className="flex items-center bg-gray-100  h-full pl-5 rounded-md">
              <IoSearchOutline size={20} className=" text-red-500" />
              <input type="text" className=" outline-none pl-5" />
            </div>
            <button type="submit" className=" btn-primary">
              Buscar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
