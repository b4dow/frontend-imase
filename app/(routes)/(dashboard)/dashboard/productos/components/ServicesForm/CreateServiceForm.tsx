"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateT } from "@/types";
import { CreateSchema } from "@/schema";
import { FormInput } from "@/components/CustomInput/";
import { CreateOrUpdateProductAction } from "@/actions";
import { Button } from "@/components/ui/button";

export const CreateServiceForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateT>({
    resolver: zodResolver(CreateSchema),
  });

  const onSubmit: SubmitHandler<CreateT> = async (data) => {
    const formData = new FormData();

    const { image, ...productToSave } = data;

    formData.append("name", productToSave.name);
    formData.append("description", productToSave.description);
    formData.append("url", productToSave.url);

    if (image) {
      for (let i = 0; i < image.length; i++) {
        formData.append("image", image[i]);
      }
    }

    const { ok } = await CreateOrUpdateProductAction(formData);
    console.log({ ok });
  };

  return (
    <form encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
      <div className="w-[60%] mx-auto grid grid-cols-1 gap-4 py-4">
        <FormInput
          name="name"
          register={register}
          label="Nombre"
          type="text"
          error={errors.name}
        />
        <FormInput
          name="image"
          register={register}
          label="Imagen"
          type="file"
          error={errors.image}
          accept="image/png image/jpeg"
        />

        <FormInput
          name="description"
          register={register}
          label="Descripción"
          type="text"
          error={errors.description}
        />
        <FormInput
          name="url"
          register={register}
          label="Url"
          type="text"
          error={errors.url}
        />

        <Button type="submit" className="w-[40%] mx-auto mt-6">
          Crear
        </Button>
      </div>
    </form>
  );
};
