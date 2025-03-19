"use server";

import axios, { isAxiosError } from "axios";
import { cookies } from "next/headers";
import { env } from "../../config/env";
import { LoginT } from "../../types/";

interface LoginServiceProps {
  body: LoginT;
}
const { API_URL } = env;

export const loginService = async ({ body }: LoginServiceProps) => {
  try {
    const cookieStore = cookies();

    const data = await axios.post(API_URL + "/auth/login", body);
    cookieStore.set("token", data.data);
    return {
      status: data.status,
    };
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      return {
        status: error.response.status,
      };
    }
  }
};
