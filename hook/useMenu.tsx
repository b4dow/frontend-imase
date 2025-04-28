"use client";

import { useContext } from "react";
import { MenuContext } from "@/context/context.provider";

export const UseMenu = () => {
  const context = useContext(MenuContext);
  if (!context.state) {
    throw new Error("UseMenu must be used within a MenuProvider");
  }
  return context;
};
