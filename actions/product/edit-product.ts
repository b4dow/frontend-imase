"use server";

import { Product } from "@/interface";
import { createClient } from "utils";

interface EditProductProps {
  id: Product["id"];
  body: FormData;
}

export const EditProduct = async ({ id, body }: EditProductProps) => {
  try {
    const values = Object.fromEntries(body);
    const supabase = await createClient();

    if (values.imageUrl) {
      const responseImage = await supabase.storage
        .from("imase-images")
        .upload(`product/${values.slug}.png`, values.imageUrl, {
          cacheControl: "3600",
          upsert: true,
        });

      if (!responseImage) {
        return {
          ok: false,
          message: "No se pudo procesar la carga de la imagen",
        };
      }

      const { data } = supabase.storage
        .from("imase-images")
        .getPublicUrl(`product/${values.slug}.png`);

      await supabase
        .from("products")
        .update({
          ...values,
          name: values.name,
          url: values.url,
          slug: values.slug,
          descriptionShort: values.descriptionShort,
          description: values.description,
          imageUrl: data.publicUrl,
        })
        .eq("id", id);
      return {
        ok: true,
        message: "Producto Actualizado",
      };
    }

    const { imageUrl, ...rest } = values;
    await supabase
      .from("products")
      .update({
        ...rest,
        name: rest.name,
        url: rest.url,
        slug: rest.slug,
        descriptionShort: rest.descriptionShort,
        description: rest.description,
      })
      .eq("id", id);

    return {
      ok: true,
      message: "Producto Actualizado",
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: "Error al actualizar el producto",
    };
  }
};
