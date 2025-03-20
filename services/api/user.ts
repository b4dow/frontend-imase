"use server";
import axios, { isAxiosError } from "axios";
import { APIUrls } from "./urls";
import { cookies } from "next/headers";

interface UserDTO {
  status: number;
  user: {
    username: string;
    email: string;
  };
}

export const userService = async (): Promise<UserDTO | undefined> => {
  try {
    const cookieStore = cookies();
    const getCookie = cookieStore.get("token")?.value;
    const user = await axios(APIUrls.auth.user, {
      headers: {
        Authorization: `Bearer ${getCookie}`,
      },
    });

    return {
      status: user.status,
      user: {
        username: user.data.username,
        email: user.data.email,
      },
    };
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      console.log(error.response.data);
    }
  }
};
