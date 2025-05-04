"use server";

import { createClient } from "@/utils/supabase/server";

interface Props {
  email: string;
  password: string;
}

interface Response {
  errorMessage?: string | null;
}

export const LoginWithEmail = async ({
  email,
  password,
}: Props): Promise<Response | undefined> => {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw new Error(error.message);
    }
  } catch (error) {
    if (error instanceof Error) {
      return {
        errorMessage: error.message,
      };
    }
  }
};
