"use server";

import { createClient } from "@/utils/supabase/server";

export const GetProducts = async () => {
  try {
    const supabase = await createClient();
    const { error, data: products } = await supabase
      .from("products")
      .select("*, image(url)");

    if (error) {
      throw new Error(error.message);
    }

    return products;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};
