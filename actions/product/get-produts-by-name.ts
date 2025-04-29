"use server";
import { createClient } from "@/utils/supabase/server";

export const GetProductsByName = async (name: string) => {
  try {
    const supabase = await createClient();
    const { data: products } = await supabase
      .from("products")
      .select("*, image(url)")
      .ilike("name", `%${name}%`);
    console.log({ products });

    if (!products?.length) {
      throw new Error("No existen productos");
    }

    return products;
  } catch (error) {
    console.log(error);
  }
};
