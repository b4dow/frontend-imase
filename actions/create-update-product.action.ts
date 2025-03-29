"use server";

import { postProduct, updateProduct } from "@/services/api/";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

interface Props {
  formData: FormData;
  imageSrc: string;
  public_id: string;
  id?: string;
}

export const CreateOrUpdateProductAction = async ({
  formData,
  imageSrc,
  public_id,
  id,
}: Props) => {
  const product = {
    name: formData.get("name") as string,
    description: formData.get("description") as string,
    image: formData.get("image") as File,
    url: formData.get("url") as string,
  };

  if (id) {
    //actualizar
    const { image, ...productWithoutImage } = product;
    if (!image) {
      const updatedProduct = {
        ...productWithoutImage,
        image: imageSrc,
        public_id,
      };
      await updateProduct(id, updatedProduct);
      redirect("/dashboard/productos");
    }

    await updateProduct(id, product);
  } else {
    //crear
    await postProduct(product);
  }

  revalidatePath("/dashboard/productos");
  redirect("/dashboard/productos");
};
