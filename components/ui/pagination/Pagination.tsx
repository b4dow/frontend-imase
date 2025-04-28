import Link from "next/link";
import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5";

export const Pagination = () => {
  return (
    <div className="mb-32">
      <nav>
        <ul className="flex">
          <li>
            <button className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300">
              <IoChevronForwardOutline size={30} />
            </button>
          </li>
          <li>
            <Link
              className="mx-1 flex h-9 w-9 items-center justify-center rounded-full bg-pink-500 p-0 text-sm text-white shadow-md transition duration-150 ease-in-out"
              href="#"
            >
              1
            </Link>
          </li>
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
              <IoChevronBackOutline size={30} />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};
