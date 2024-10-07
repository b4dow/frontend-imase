"use server";

import { ContactService } from "@/services/api";

export const createContactAction = async (data: any) => {
  try {
    const response = await ContactService(data);
    return response
  } catch (error) {
    console.log(error);
  }
};
