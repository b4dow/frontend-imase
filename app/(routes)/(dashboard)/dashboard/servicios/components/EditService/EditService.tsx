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
import { postDataSchema } from "@/schema";
import { toast } from "react-toastify";
import { ServiceForm } from "@/components/ServiceForm";
import { DataProps } from "@/types";
import { base64Image } from "@/lib/utils";
import { editServiceAction } from "@/actions";
import { redirect, useRouter } from "next/navigation";

type EditServiceProps = {
  service: DataProps;
};

export function EditService({ service }: EditServiceProps) {
  const router = useRouter();

  const submitHandler = async (formData: FormData) => {
    const image = formData.get("image") as File;
    let base64EncodedImage = "";
    if (image) {
      base64EncodedImage = (await base64Image(image)) as string;
    }

    const data = {
      name: formData.get("name"),
      description: formData.get("description"),
      image: image ? base64EncodedImage : formData.get("imageUrl"),
      url: formData.get("url"),
    };

    const result = postDataSchema.safeParse(data);
    if (!result.success) {
      console.log(result);
      result.error.issues.forEach((issue) => toast.error(issue.message));
      return;
    }
    const serviceData = await editServiceAction(service.id, result.data);
    toast.success(serviceData);
    router.refresh();
    redirect("/dashboard/servicios");
  };

  return (
    <>
      <div className="flex justify-end">
        <Dialog>
          <DialogTrigger asChild>
            <Button>Editar Servicio</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Editar Servicio</DialogTitle>
            </DialogHeader>
            <form action={submitHandler}>
              <ServiceForm data={service} />
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
