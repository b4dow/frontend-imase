"use server";

import { createClient } from "@/utils/supabase/server";

export const getFeaturedProducts = async (limit: number) => {
  try {
    const supabase = await createClient();

    const { data: products } = await supabase
      .from("products")
      .select("*")
      .limit(limit);

    return products;
  } catch (error) {
    console.log(error);
  }
};
