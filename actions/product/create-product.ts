"use server";

import { z } from "zod";
import { createClient } from "@/utils/supabase/server";

const SchemaNewProductForm = z.object({
  id: z.string().uuid().optional().nullable(),
  name: z
    .string({ message: "El campo nombre no puede ir vacia" })
    .min(3, { message: "el campo nombre tiene que tener minimo 3 caracteres" })
    .max(50, {
      message: "el campo nombre no puede tener mas de 50 caracteres",
    }),
  descriptionShort: z
    .string({ message: "el campo de descripción no puede ir vacía" })
    .min(10, {
      message: "el campo descripción tiene que tener minimo 10 caracter",
    })
    .max(500, {
      message: "el campo descripción no puede tener mas de 500 caracteres",
    }),
  description: z
    .string({ message: "el campo:que descripción no puede ir vacía" })
    .min(10, {
      message: "el campo descripción tiene que tener minimo 10 caracter",
    }),
  url: z
    .string({ message: "el campo url no puede ir vacia" })
    .min(3, { message: "el campo url tiene que tener minimo 3 caracteres" }),
  slug: z
    .string({ message: "el campo slug no puede ir vacía" })
    .min(3, { message: "el campo slug tiene que tener minimo 3 caracter" }),
  imageUrl: z
    .instanceof(File, { message: "se requiere seleccionar una imagen válida" })
    .refine((files) => files.size <= 5 * 1024 * 1024, {
      message: "la imagen no puede pesar mas de 5MB",
    }),
});

export const CreateProduct = async (formData: FormData) => {
  try {
    const supabase = await createClient();

    const product = Object.fromEntries(formData.entries());
    console.log({ product });
    const {
      data: productParse,
      error,
      success,
    } = SchemaNewProductForm.safeParse(product);

    if (!success) {
      console.log(error);
      return {
        ok: false,
        message: "Error en la validación del producto",
      };
    }

    const uploadImage = await supabase.storage
      .from("imase-images")
      .upload(`product/${productParse.slug}.png`, productParse.imageUrl, {
        cacheControl: "3000",
        upsert: false,
      });

    if (uploadImage.error)
      return {
        ok: false,
        message: uploadImage.error.message,
      };

    const resultImageProduct = supabase.storage
      .from("imase-images")
      .getPublicUrl(uploadImage.data.path);

    await supabase.from("products").insert({
      name: productParse.name,
      slug: productParse.slug,
      url: productParse.url,
      available: true,
      descriptionShort: productParse.descriptionShort,
      description: productParse.description,
      imageUrl: resultImageProduct.data.publicUrl,
    });

    return {
      ok: true,
      message: "Producto creado ",
    };
  } catch (error) {
    console.log("Error en la creación del producto", error);
    return {
      ok: false,
      message: "Error en la creación del producto",
    };
  }
};
