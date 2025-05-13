"use server";

import { createClient } from "@/utils";

export const DeleteProduct = async (id: string) => {
  try {
    const supabase = await createClient();
    await supabase.from("products").delete().eq("id", id);
    return {
      ok: true,
      message: "Producto eliminado",
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: "Hubo un error al eliminar el producto",
    };
  }
};
