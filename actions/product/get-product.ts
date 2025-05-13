"use server";

import { Product } from "@/interface";
import { createClient } from "@/utils/supabase/server";

export const GetProduct = async (
  slug: string,
): Promise<Product | undefined> => {
  try {
    const supabase = await createClient();
    const { data: product } = await supabase
      .from("products")
      .select("*")
      .eq("slug", slug)
      .single();

    return product;
  } catch (error) {
    console.log(error);
  }
};
