"use server";

import { loginService } from "@/services/api";
import { LoginT } from "../types";

export const LoginAction = async (body: LoginT) => {
  const login = await loginService({ body });
  return login;
};
