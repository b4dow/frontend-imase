"use server";

import { createClient } from "@/utils";

export const DeleteService = async (id: string) => {
  try {
    const supabase = await createClient();
    await supabase.from("services").delete().eq("id", id);
    return {
      ok: true,
      message: "Servicio eliminado",
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: "Hubo un error al eliminar el servicio",
    };
  }
};
