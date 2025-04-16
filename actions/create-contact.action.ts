"use server";

import { ContactService } from "@/services/api";
import { SubmitContactI } from "@/types";

export const CreateContactAction = async (data: SubmitContactI) => {
  const result = await ContactService(data);
  if (result?.status !== 200) {
    return {
      ok: false,
      message: result?.message,
    };
  }
  return {
    ok: true,
    message: result.message,
  };
};
