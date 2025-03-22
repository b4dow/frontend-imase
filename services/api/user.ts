"use server";
import axios, { isAxiosError } from "axios";
import { APIUrls } from "./urls";
import { cookies } from "next/headers";

export const userService = async () => {
  try {
    const cookieStore = cookies();
    const getCookie = cookieStore.get("token")?.value;
    const { data, status } = await axios(APIUrls.auth.user, {
      headers: {
        Authorization: `Bearer ${getCookie}`,
      },
    });

    return {
      username: data.username,
      email: data.email,
      status: status,
    };
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      return {
        status: error.response.status,
      };
    }
  }
};
