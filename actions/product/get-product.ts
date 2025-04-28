"use server";

import { createClient } from "@/utils/supabase/server";

export const GetProduct = async (slug: string) => {
  try {
    const supabase = await createClient();
    const { data: product } = await supabase
      .from("products")
      .select("*, image(url)")
      .eq("slug", slug)
      .single();

    return product;
  } catch (error) {
    console.log(error);
  }
};
