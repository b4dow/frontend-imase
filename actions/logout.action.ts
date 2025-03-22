"use server";
import { cookies } from "next/headers";

export const LogoutAction = async () => {
  const cookieStore = cookies();
  cookieStore.set("token", "");
};
