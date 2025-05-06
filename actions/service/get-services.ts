"use server";

import { createClient } from "@/utils";

export const GetServices = async () => {
  try {
    const supabase = await createClient();

    const { data: services } = await supabase
      .from("services")
      .select("*, image(url)");

    console.log(services);
    return services;
  } catch (error) {
    console.log(error);
  }
};
