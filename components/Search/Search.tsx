"use client";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SearchSchema } from "@/schema";
import { SearchT } from "@/types";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { SearchServiceAction, SearchProductAction } from "@/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Props {
  placeholder: string;
  action: string;
}

interface SubmitProps {
  search: string;
}

export function Search({ placeholder, action }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const { register, handleSubmit } = useForm<SearchT>({
    resolver: zodResolver(SearchSchema),
  });

  async function onSearchSubmit({ search }: SubmitProps) {
    if (action === "servicio") {
      const { ok } = await SearchServiceAction(search);
      if (!ok) {
        return toast.error("No se encontraron resultados");
      }
    } else {
      const { ok } = await SearchProductAction(search);
      if (!ok) {
        return toast.error("No se encontraron resultados");
      }
    }

    router.push(`${pathname}?search=${search}`);
  }

  return (
    <>
      <div className="my-5 flex items-center justify-between w-full">
        <form onSubmit={handleSubmit(onSearchSubmit)} className="flex">
          <div className="flex items-center w-full max-w-sm space-x-2">
            <Input
              type="text"
              {...register("search")}
              placeholder={placeholder}
            />
            <Button type="submit" className="bg-red-500">
              Buscar
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
