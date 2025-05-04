"use client";
import { ReactNode } from "react";
import clsx from "clsx";
import { FaCheck } from "react-icons/fa";
import { FiXCircle } from "react-icons/fi";
import { IoInformation } from "react-icons/io5";
import { Transition } from "../transition/Transition";

interface Props {
  children: ReactNode;
  open: boolean;
  variant?: "info" | "warning" | "error";
}

const variantStyles = {
  info: {
    icon: <FaCheck className="w-6 h-6 text-blue-500" />,
    alert: "alert-info bg-blue-100 text-blue-800",
  },
  warning: {
    icon: <IoInformation className="w-6 h-6 text-yellow-500" />,
    alert: "alert-warning bg-yellow-100 text-yellow-800",
  },
  error: {
    icon: <FiXCircle className="w-6 h-6 text-white" />,
    alert: "alert-error text-white bg-red-500",
  },
};

export const Alert = ({ children, open, variant = "error" }: Props) => {
  const { icon, alert } = variantStyles[variant];

  return (
    <Transition position="bottom">
      <div className="fixed top-5 left-5 z-50">
        <div
          className={clsx(
            "transition-all duration-500 ease-in-out transform shadow-lg flex items-center gap-3",
            "rounded-lg px-4 py-3",
            alert,
            open ? " translate-y-0 opacity-100" : "-translate-y-full opacity-0",
          )}
        >
          {icon}
          <span className="font-medium">{children}</span>
        </div>
      </div>
    </Transition>
  );
};
