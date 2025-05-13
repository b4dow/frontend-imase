"use server";

import { Service } from "@/interface";
import { createClient } from "utils";

interface EditServiceProps {
  id: Service["id"];
  body: FormData;
}

export const EditService = async ({ id, body }: EditServiceProps) => {
  try {
    const values = Object.fromEntries(body);
    const supabase = await createClient();

    if (values.imageUrl) {
      const responseImage = await supabase.storage
        .from("imase-images")
        .upload(`service/${values.slug}.png`, values.imageUrl, {
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
        .getPublicUrl(`service/${values.slug}.png`);

      await supabase
        .from("services")
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
        message: "Servicio Actualizado",
      };
    }

    const { imageUrl, ...rest } = values;
    await supabase
      .from("services")
      .update({
        ...rest,
        name: rest.name,
        url: rest.url,
        slug: rest.slug,
        descriptionShort: rest.descriptionShort,
        description: rest.description,
      })
      .eq("id", id);
    console.log({ rest });
    console.log("se envio con exito");

    return {
      ok: true,
      message: "Servicio Actualizado",
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: "Error al actualizar el servicio",
    };
  }
};
