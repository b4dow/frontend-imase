"use server";

import { createClient } from "@/utils/supabase/server";

export const GetServices = async () => {
  try {
    const supabase = await createClient();

    const { data: services } = await supabase
      .from("services")
      .select("*, image(url)");

    return services;
  } catch (error) {
    console.log(error);
  }
};
