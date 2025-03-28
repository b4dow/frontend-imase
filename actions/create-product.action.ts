"use server";

import { postProduct } from "@/services/api/";

export const CreateOrUpdateProductAction = async (formData: FormData) => {
  const id = formData.get("id") as string | null;
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const url = formData.get("url") as string;
  const image = formData.get("image") as File;

  const product = {
    name,
    description,
    url,
    image,
  };
  if (id) {
    //actualizar
  } else {
    //crear
    await postProduct(product);
  }

  return {
    ok: true,
  };
};
