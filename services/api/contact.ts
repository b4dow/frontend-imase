import axios, { isAxiosError } from "axios";
import { APIUrls } from "./urls";
import { SubmitContactI } from "@/types";

export const ContactService = async (values: SubmitContactI) => {
  try {
    const response = await axios.post<{ status: number; message: string }>(
      `${APIUrls.contacto.all}`,
      values,
    );
    return {
      status: response.status,
      message: response.data,
    };
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      return {
        status: error.response.status,
        message: error.response.data,
      };
    }
  }
};
