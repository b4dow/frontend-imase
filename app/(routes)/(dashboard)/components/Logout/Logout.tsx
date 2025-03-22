"use client";

import { LogoutAction } from "@/actions";

export const Logout = () => {
  return (
    <div className="px-6 -mx-6  pt-4 flex justify-between items-center border-t">
      <button
        onClick={() => LogoutAction()}
        className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
          />
        </svg>
        <span className="group-hover:text-gray-700">Logout</span>
      </button>
    </div>
  );
};
