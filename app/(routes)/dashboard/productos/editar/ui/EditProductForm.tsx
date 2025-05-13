"use client";

import { useRouter } from "next/navigation";
import { EditProduct } from "actions/product";
import {
  Button,
  FormInput,
  FormInputImage,
  FormTextArea,
} from "@/components/ui";
import { EditProduct as EditProducType, Product } from "@/interface";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import Link from "next/link";

interface EditProductFormProps {
  product: Product;
}

export const EditProductForm = ({ product }: EditProductFormProps) => {
  const router = useRouter();

  const { id, imageUrl, ...rest } = product;

  const { control, handleSubmit } = useForm<EditProducType>({
    defaultValues: {
      ...rest,
    },
  });

  const onSubmit: SubmitHandler<EditProducType> = async (values) => {
    const formData = new FormData();

    formData.append("name", values.name);
    formData.append("slug", values.slug);
    formData.append("url", values.url);
    formData.append("descriptionShort", values.descriptionShort);
    formData.append("description", values.description);
    formData.append("imageUrl", values.imageUrl?.[0] || "");

    const response = await EditProduct({ id, body: formData });

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
            label="Nombre del Producto"
            type="text"
            name="name"
          />
          <FormInput
            control={control}
            label="Slug del Producto"
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
          label="Imagen del Producto"
        />
        {product.imageUrl && (
          <div className=" mb-10 relative h-52 w-60 overflow-hidden transform hover:scale-105 transition-transform duration-300 ">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className=" absolute object-cover  rounded-lg"
            />
          </div>
        )}
        <FormTextArea
          control={control}
          label="Descripcion del Producto"
          name="description"
        />
        <div className="flex items-center gap-4">
          <Link
            href="/dashboard/productos"
            className="inline-block bg-red-500 py-1.5 px-4 text-white rounded-lg transform hover:scale-105 transition-transform duration-300"
          >
            Cancelar
          </Link>
          <Button
            type="submit"
            className="transform hover:scale-105 transition-transform duration-300"
          >
            Editar Producto
          </Button>
        </div>
      </form>
    </div>
  );
};
