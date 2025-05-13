"use server";

import { createClient } from "utils";

export const GetUser = async () => {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();
  const draftData = {
    email: data.user?.email,
    role: data.user?.role,
  };
  return draftData;
};
