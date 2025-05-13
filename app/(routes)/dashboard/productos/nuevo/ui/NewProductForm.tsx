"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { SubmitHandler, useForm } from "react-hook-form";
import { NewProduct } from "@/interface/product.interface";
import { Button } from "@/components/ui/button";
import { FormInputImage, FormInput, FormTextArea } from "components/ui";
import { CreateProduct } from "actions/product";

export const NewProductForm = () => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewProduct>();

  const onSubmit: SubmitHandler<NewProduct> = async (values) => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("slug", values.slug);
    formData.append("url", values.url);
    formData.append("descriptionShort", values.descriptionShort);
    formData.append("description", values.description);
    formData.append("imageUrl", values.imageUrl?.[0]);

    const response = await CreateProduct(formData);

    if (!response) return null;

    if (!response.ok) {
      toast.error(response.message);
      reset();
      return;
    }

    toast(response.message);
    reset();
    router.push("/dashboard/productos");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FormInput
            control={control}
            name="name"
            label="Nombre"
            type="text"
            error={errors.name}
          />
          <FormInput
            control={control}
            name="slug"
            label="Slug"
            type="text"
            error={errors.slug}
          />
        </div>
        <FormInput
          control={control}
          name="url"
          label="Url de Whatsapp"
          type="text"
          error={errors.url}
        />
        <FormTextArea
          control={control}
          label="Descripción corta"
          name="descriptionShort"
          error={errors.descriptionShort}
        />
        <FormInputImage
          label="Imagen"
          name="imageUrl"
          control={control}
          error={errors.imageUrl}
        />

        <FormTextArea
          control={control}
          label="Descripción"
          name="description"
          error={errors.description}
        />
        <Button type="submit">Crear</Button>
      </form>
    </div>
  );
};
