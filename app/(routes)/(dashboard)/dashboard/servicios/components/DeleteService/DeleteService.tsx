"use client"
import { toast } from "react-toastify";
import { useRouter, redirect } from "next/navigation";
import { deleteServiceAction } from "@/actions";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type DeleteServiceProps = {
  id: string;
};

export function DeleteService({ id }: DeleteServiceProps) {
  const router = useRouter();
  const submitHandler = async (formData: FormData) => {
    const id = formData.get("id") as string;

    const response = await deleteServiceAction(id);
    toast.success(response);
    router.refresh();
    redirect("/dashboard/servicios");
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="bg-red-500">Eliminar</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Estas seguro de querer eliminarlo?
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>No</AlertDialogCancel>
          <form action={submitHandler}>
            <Input type="hidden" name="id" defaultValue={id} />
            <Button type="submit" className="bg-red-500">
              Si, Eliminar
            </Button>
          </form>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
