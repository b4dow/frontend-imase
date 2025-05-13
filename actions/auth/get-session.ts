"use server";

import { createClient } from "utils";

export const GetSession = async () => {
  const supabase = await createClient();
  const session = await supabase.auth.getSession();
};
