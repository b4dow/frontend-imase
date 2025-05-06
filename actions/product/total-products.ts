"use server";

import { createClient } from "@/utils";

export const TotalProducts = async () => {
  const supabase = await createClient();
  const { count } = await supabase.from("products").select("*, image(url)");
  return count;
};
