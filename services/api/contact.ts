import axios from "axios";
import { APIUrls } from "./urls";

export const ContactService = async (data: any) => {
  const response = await axios.post(`${APIUrls.contacto.all}`, data);
  return response.data;
};
