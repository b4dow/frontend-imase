"use client";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { postDataSchema } from "@/schema";
import { ServiceForm } from "@/components/ServiceForm";
import { DataProps } from "@/types";
import { base64Image } from "@/lib/utils";
import { redirect, useRouter } from "next/navigation";
import { editProductAction } from "@/actions";

type EditServiceProps = {
  product: DataProps;
};

export function EditProduct({ product }: EditServiceProps) {
  const router = useRouter();

  const submitHandler = async (formData: FormData) => {
    const image = formData.get("image") as File;
    const data = {
      name: formData.get("name"),
      description: formData.get("description"),
      image:
        image.size > 0 ? await base64Image(image) : formData.get("imageUrl"),
      url: formData.get("url"),
    };

    const result = postDataSchema.safeParse(data);
    if (!result.success) {
      console.log(result);
      result.error.issues.forEach((issue) => toast.error(issue.message));
      return;
    }
    const productData = await editProductAction(product.id, result.data);
    toast.success(productData);
    router.refresh();
    redirect("/dashboard/productos");
  };

  return (
    <>
      <div className="flex justify-end">
        <Dialog>
          <DialogTrigger asChild>
            <Button>Editar Producto</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Editar Servicio</DialogTitle>
            </DialogHeader>
            <form action={submitHandler}>
              <ServiceForm data={product} />
              <DialogFooter>
                <Button type="submit">Guardar Cambios</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
