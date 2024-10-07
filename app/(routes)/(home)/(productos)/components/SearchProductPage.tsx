"use client";
import { toast } from "react-toastify";
import { SearchSchema } from "@/schema";
import { useRouter } from "next/navigation";
import { searchProduct } from "@/actions";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type searchProps = {
  placeholder: string;
};

export default function SearchProductPage({ placeholder }: searchProps) {
  const router = useRouter();

  async function handleSearchForm(formData: FormData) {
    const data = {
      search: formData.get("search"),
    };
    const result = SearchSchema.safeParse(data);

    if (!result.success) {
      result.error.issues.forEach((issue) => {
        toast.error(issue.message);
      });
      return;
    }

    const { products } = await searchProduct(result.data.search);

    if (products.length === 0) {
      toast.info("La data no esta disponible");
      return;
    }

    router.push(`/productos?search=${result.data.search}`);
  }

  return (
    <>
      <div className="my-5 flex items-center justify-between">
        <form
          action={handleSearchForm}
          className="flex w-full max-w-sm items-center space-x-2"
        >
          <Input type="text" name="search" placeholder={placeholder} />
          <Button type="submit" className="bg-red-500">
            Buscar
          </Button>
        </form>
      </div>
    </>
  );
}
