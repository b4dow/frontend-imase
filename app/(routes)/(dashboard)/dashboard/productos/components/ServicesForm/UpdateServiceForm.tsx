"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { CreateT, DataProps, UpdateT } from "@/types";
import { UpdateSchema } from "@/schema";
import { FormInput } from "@/components/CustomInput/";
import { CreateOrUpdateProductAction } from "@/actions";
import { Button } from "@/components/ui/button";

interface Props {
  product: DataProps;
}

export const UpdateServiceForm = ({ product }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateT>({
    resolver: zodResolver(UpdateSchema),
    defaultValues: {
      ...product,
      image: undefined,
    },
  });

  const onSubmit: SubmitHandler<UpdateT> = async (data) => {
    const formData = new FormData();
    console.log(data);

    const { image, ...productToSave } = data;

    formData.append("name", productToSave.name);
    formData.append("description", productToSave.description);
    formData.append("url", productToSave.url);

    if (image) {
      for (let i = 0; i < image.length; i++) {
        formData.append("image", image[i]);
      }
    }

    await CreateOrUpdateProductAction({
      formData,
      imageSrc: product.image,
      public_id: product.public_id,
      id: product.id,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
        {product?.image && (
          <Image
            src={product.image}
            alt={product.name}
            width={200}
            height={200}
            unoptimized
          />
        )}

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
          Actualizar
        </Button>
      </div>
    </form>
  );
};
