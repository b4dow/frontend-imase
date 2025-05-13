"use server";

import type { Product } from "@/interface";
import { createClient } from "@/utils/supabase/server";

export const GetProductById = async (
  id: Product["id"],
): Promise<Product | undefined> => {
  try {
    const supabase = await createClient();
    const { data: product } = await supabase
      .from("products")
      .select("*")
      .eq("id", id)
      .single();

    return product;
  } catch (error) {
    console.log(error);
  }
};
