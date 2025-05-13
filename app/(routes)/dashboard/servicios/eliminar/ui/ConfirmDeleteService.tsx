"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";
import { Service } from "interface";
import { Button, FormInput, FormTextArea } from "components/ui";
import { DeleteService } from "@/actions/service";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { revalidatePath } from "next/cache";

interface ConfirmDeleteServiceProps {
  service: Service;
}

export function ConfirmDeleteService({ service }: ConfirmDeleteServiceProps) {
  const router = useRouter();
  const { control, handleSubmit } = useForm<Service>({
    defaultValues: { ...service },
  });

  const onSubmit: SubmitHandler<Service> = async (values) => {
    const { ok, message } = await DeleteService(values.id);
    if (!ok) {
      toast.error(message);
      return;
    }
    toast.success(message);
    router.push("/dashboard/servicios");
  };
  return (
    <div className="my-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormInput
            control={control}
            name="name"
            label="Nombre del Servicio"
            disabled={true}
          />
          <FormInput
            control={control}
            name="slug"
            label="Slug del Servicio"
            disabled={true}
          />
        </div>
        <FormInput
          control={control}
          name="url"
          label=" Url de Whatsapp"
          disabled={true}
        />
        <FormTextArea
          control={control}
          name="descriptionShort"
          label="Descripcion Corta"
          disabled={true}
        />
        <div className="relative w-60 h-48 my-5">
          <Image
            src={service.imageUrl}
            alt={service.name}
            fill
            className="absolute rounded-lg object-cover"
          />
        </div>
        <FormTextArea
          control={control}
          name="description"
          label="Descripcion del Servicio"
          disabled={true}
        />
        <div className="flex items-center gap-4">
          <Link
            href="/dashboard/servicios"
            className="inline-block bg-red-500 py-1.5 px-4 text-white rounded-lg transform hover:scale-105 transition-transform duration-300"
          >
            Cancelar
          </Link>
          <Button
            variant="destructive"
            className="transform hover:scale-105 transition-transform duration-300"
            type="submit"
          >
            Estas Seguro de Eliminar?
          </Button>
        </div>
      </form>
    </div>
  );
}
