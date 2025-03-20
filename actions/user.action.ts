"use server";
import { userService } from "../services/api/";

export const getUser = async () => {
  const response = await userService();
  console.log(response);
  return response;
};
