"use server";

import { createClient } from "@/utils";

export const TotalServices = async () => {
  const supabase = await createClient();
  const { count } = await supabase.from("services").select("*, image(url)");
  return count;
};
