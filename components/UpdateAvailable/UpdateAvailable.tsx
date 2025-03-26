"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ProductUpdateAvailibilityAction } from "@/actions";
import { DataProps } from "@/types";

interface Props {
  available: boolean;
  id: string;
}

interface SubmitProps {
  id: DataProps["id"];
}

const schemaId = z.object({
  id: z.string().min(1, { message: "el id no puede estar vacio" }),
});

export const UpdateAvailable = ({ available, id }: Props) => {
  const { register, handleSubmit } = useForm<z.infer<typeof schemaId>>({
    defaultValues: {
      id: id,
    },
  });

  const onSubmit = async (values: SubmitProps) => {
    await ProductUpdateAvailibilityAction(values.id);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input type="hidden" {...register("id")} />
      <Button
        type="submit"
        className={`cursor-pointer bg-transparent hover:bg-transparent ${
          available ? "text-black" : "text-red-500"
        }`}
      >
        {available ? "Disponible" : "No Disponible"}
      </Button>
    </form>
  );
};
