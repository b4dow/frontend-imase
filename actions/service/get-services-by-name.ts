"use server";

import { createClient } from "@/utils/supabase/server";

export const GetServicesByName = async (name: string) => {
  try {
    const supabase = await createClient();
    const { data: services } = await supabase
      .from("services")
      .select("*, image(url)")
      .ilike("name", `%${name}%`);

    if (!services?.length) {
      throw new Error("No existen esos servicios");
    }

    return services;
  } catch (error) {
    console.log(error);
  }
};
