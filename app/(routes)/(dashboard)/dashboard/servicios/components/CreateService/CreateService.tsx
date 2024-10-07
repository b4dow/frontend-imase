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
import { createServiceAction } from "@/actions";
import { useRouter, redirect } from "next/navigation";
import { base64Image } from "@/lib/utils";

export function CreateService() {
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
    const service = await createServiceAction(result.data);
    console.log(service);
    toast.success(service);
    router.refresh();
    redirect("/dashboard/servicios");
  };

  return (
    <>
      <div className="flex justify-end">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-red-500">Crear Servicio</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Crear Servicio</DialogTitle>
            </DialogHeader>
            <form action={handleForm}>
              <ServiceForm />
              <DialogFooter>
                <Button type="submit">Enviar</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
