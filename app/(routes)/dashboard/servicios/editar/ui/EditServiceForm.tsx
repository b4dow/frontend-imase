"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { EditService as EditServiceType, Service } from "@/interface";
import { EditService } from "actions/service";
import {
  Button,
  FormInput,
  FormInputImage,
  FormTextArea,
} from "@/components/ui";

interface EditServiceFormProps {
  service: Service;
}

export const EditServiceForm = ({ service }: EditServiceFormProps) => {
  const router = useRouter();

  const { id, imageUrl, ...rest } = service;

  const { control, handleSubmit } = useForm<EditServiceType>({
    defaultValues: {
      ...rest,
    },
  });

  const onSubmit: SubmitHandler<EditServiceType> = async (values) => {
    const formData = new FormData();

    formData.append("name", values.name);
    formData.append("slug", values.slug);
    formData.append("url", values.url);
    formData.append("descriptionShort", values.descriptionShort);
    formData.append("description", values.description);
    formData.append("imageUrl", values.imageUrl?.[0] || "");

    const response = await EditService({ id, body: formData });

    if (!response) return null;

    if (!response.ok) {
      toast.error(response.message);
      return;
    }
    toast.success(response.message);
    router.refresh();
  };

  return (
    <div className="my-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormInput
            control={control}
            label="Nombre de Servicio"
            type="text"
            name="name"
          />
          <FormInput
            control={control}
            label="Slug del Servicio"
            type="text"
            name="slug"
          />
        </div>
        <FormInput
          control={control}
          label="Url de Whatsapp"
          type="text"
          name="url"
        />
        <FormTextArea
          control={control}
          label="Descripcion Corta"
          name="descriptionShort"
        />
        <FormInputImage
          control={control}
          name="imageUrl"
          label="Imagen del Servicio"
        />
        {service.imageUrl && (
          <div className=" mb-10 relative h-52 w-60 overflow-hidden transform hover:scale-105 transition-transform duration-300 ">
            <Image
              src={service.imageUrl}
              alt={service.name}
              fill
              className=" absolute object-cover  rounded-lg"
            />
          </div>
        )}
        <FormTextArea
          control={control}
          label="Descripcion"
          name="description"
        />
        <div className="flex items-center gap-4">
          <Link
            href="/dashboard/servicios"
            className="inline-block bg-red-500 py-1.5 px-4 text-white rounded-lg transform hover:scale-105 transition-transform duration-300"
          >
            Cancelar
          </Link>
          <Button
            type="submit"
            className="transform hover:scale-105 transition-transform duration-300"
          >
            Editar Servicio
          </Button>
        </div>
      </form>
    </div>
  );
};
