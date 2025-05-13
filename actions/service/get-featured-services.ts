"use server";

import { createClient } from "@/utils/supabase/server";

export const getFeaturedServices = async (limit: number) => {
  try {
    const supabase = await createClient();

    const { data: services } = await supabase
      .from("services")
      .select("*")
      .limit(limit);

    return services;
  } catch (error) {
    console.log(error);
  }
};
