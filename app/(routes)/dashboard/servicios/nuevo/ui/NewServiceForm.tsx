"use client";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, FormInput, FormInputImage, FormTextArea } from "components/ui";
import { CreateService } from "actions/service";
import { NewService } from "interface";
import { toast } from "sonner";
import Link from "next/link";

export const NewServiceForm = () => {
  const router = useRouter();
  const { control, handleSubmit } = useForm<NewService>();

  const onSubmit: SubmitHandler<NewService> = async (values) => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("slug", values.slug);
    formData.append("url", values.url);
    formData.append("descriptionShort", values.descriptionShort);
    formData.append("description", values.description);
    formData.append("imageUrl", values.imageUrl[0]);

    const { ok, message } = await CreateService(formData);

    if (!ok) {
      toast.error(message);
    }

    toast.success(message);
    router.push("/dashboard/servicios");
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormInput
            control={control}
            type="text"
            name="name"
            label="Nombre del Servicio"
          />
          <FormInput
            control={control}
            type="text"
            name="slug"
            label="Slug del Servicio"
          />
        </div>
        <FormInput
          control={control}
          type="text"
          name="url"
          label="Url de Whatsapp"
        />
        <FormTextArea
          control={control}
          name="descriptionShort"
          label="Descripción corta del Servicio"
        />
        <FormInputImage
          control={control}
          label="Imagen del Servicio"
          name="imageUrl"
        />
        <FormTextArea
          control={control}
          name="description"
          label="Descripción del Servicio"
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
            Crear Servicio
          </Button>
        </div>
      </form>
    </>
  );
};
