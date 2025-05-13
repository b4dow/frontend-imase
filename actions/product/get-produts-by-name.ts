"use server";
import { createClient } from "@/utils/supabase/server";

interface Props {
  search: string;
  page?: number;
  take?: number;
}

export const GetProductsByName = async ({
  search,
  page = 1,
  take = 8,
}: Props) => {
  try {
    const supabase = await createClient();

    const from = (page - 1) * take;
    const to = from + take - 1;

    const { data: products } = await supabase
      .from("products")
      .select("*")
      .ilike("name", `%${search}%`)
      .range(from, to);

    if (!products?.length) {
      return {
        ok: false,
        message: "No existen productos",
      };
    }

    const { count: totalCount } = await supabase
      .from("products")
      .select("*", { count: "exact", head: true })
      .ilike("name", `%${search}%`)
      .range(from, to);

    if (!totalCount) {
      return {
        ok: false,
        message: "No existen productos",
      };
    }

    const totalPages = Math.ceil(totalCount / take);

    return {
      ok: true,
      products,
      totalPages,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: "Hubo un error al mostrar los productos",
    };
  }
};
