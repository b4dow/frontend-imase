"use client";
import { toast } from "react-toastify";
import { SearchSchema } from "@/schema";
import { useRouter } from "next/navigation";
import { SearchService } from "@/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type searchProps = {
  placeholder: string;
};

export function SearchServicePage({ placeholder }: searchProps) {
  const router = useRouter();

  async function handleSearchForm(formData: FormData) {
    const data = {
      search: formData.get("search"),
    };
    const result = SearchSchema.safeParse(data);

    if (!result.success) {
      result.error.issues.forEach((issue: any) => {
        toast.error(issue.message);
      });
      return;
    }

    const { services } = await SearchService(result.data.search);

    if (services.length === 0) {
      toast.info("La data no esta disponible");
      return "";
    }

    router.push(`/servicios?search=${result.data.search}`);
  }

  return (
    <>
      <div className="my-5 flex items-center justify-between w-full">
        <form action={handleSearchForm} className="flex">
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="text" name="search" placeholder={placeholder} />
            <Button type="submit" className="bg-red-500">
              Buscar
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
