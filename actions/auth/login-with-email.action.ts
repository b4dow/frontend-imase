"use server";

import { createClient } from "@/utils/supabase/server";

interface Props {
  email: string;
  password: string;
}

export const LoginWithEmail = async ({
  email,
  password,
}: Props): Promise<{
  ok: boolean;
  message: string;
}> => {
  try {
    const supabase = await createClient();
    await supabase.auth.signInWithPassword({
      email,
      password,
    });

    return {
      ok: true,
      message: "Usuario Loggeado",
    };
  } catch (error) {
    console.log("Error al iniciar sesión:", error);
    return {
      ok: false,
      message: "Credenciales Invalidas",
    };
  }
};
