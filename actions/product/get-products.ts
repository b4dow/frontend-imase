"use server";

import { createClient } from "@/utils/supabase/server";

export const GetProducts = async () => {
  try {
    const supabase = await createClient();
    const { data: products } = await supabase
      .from("products")
      .select("*, image(url)");

    return products;
  } catch (error) {
    console.log(error);
  }
};
