"use server";

import { createClient } from "@/utils";

interface Props {
  email: string;
  password: string;
}

export const LoginWithEmail = async ({
  email,
  password,
}: Props): Promise<{ success: boolean; message?: string }> => {
  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return {
      success: false,
      message: "Credenciales Invalidas",
    };
  }

  return {
    success: true,
  };
};
