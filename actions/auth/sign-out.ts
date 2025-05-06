"use server";

import { createClient } from "@/utils";

export const SignOut = async () => {
  const supabase = await createClient();
  await supabase.auth.signOut();
};
