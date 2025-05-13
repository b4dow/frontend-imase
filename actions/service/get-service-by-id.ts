"use server";

import type { Service } from "@/interface";
import { createClient } from "@/utils/supabase/server";

export const GetServiceById = async (id: Service["id"]) => {
  try {
    const supabase = await createClient();
    const { data: service } = await supabase
      .from("services")
      .select("*")
      .eq("id", id)
      .single();
    return service;
  } catch (error) {
    console.log(error);
  }
};
