"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "react-toastify";
import { ServiceForm } from "@/components/ServiceForm/";
import { postDataSchema } from "@/schema";
import { useRouter, redirect } from "next/navigation";
import { base64Image } from "@/lib/utils";
import { createProductAction } from "@/actions";

export function CreateProduct() {
  const router = useRouter();

  const handleForm = async (formData: FormData) => {
    const picture = formData.get("image") as File;
    let base64String = "";

    if (picture) {
      base64String = (await base64Image(picture)) as string;
    }

    const data = {
      name: formData.get("name"),
      description: formData.get("description"),
      image: base64String,
      url: formData.get("url"),
    };
    const result = postDataSchema.safeParse(data);
    if (!result.success) {
      result.error.issues.forEach((issue) => toast.error(issue.message));
      return;
    }
    const product = await createProductAction(result.data);
    console.log(product);
    if (product.statusCode === 400) {
      toast.error(product.message);
    }
    toast.success(product);
    router.refresh();
    redirect("/dashboard/productos");
  };

  return (
    <>
      <div className="flex justify-end">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-red-500 hover:bg-black/95">
              Crear Producto
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Crear Producto</DialogTitle>
            </DialogHeader>
            <form action={handleForm}>
              <ServiceForm />
              <DialogFooter>
                <Button type="submit" className="w-full bg-red-500 hover:bg-black/95">
                  Enviar
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
