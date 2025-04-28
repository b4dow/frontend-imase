"use server";

import type { Service } from "@/interface";
import { createClient } from "@/utils/supabase/server";

export const GetService = async (
  slug: string,
): Promise<Service | undefined> => {
  try {
    const supabase = await createClient();
    const { data: service } = await supabase
      .from("services")
      .select("*, image(url)")
      .eq("slug", slug)
      .single();

    return service;
  } catch (error) {
    console.log(error);
  }
};
