"use client";
import { CreateContactAction } from "@/actions/create-contact.action";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SubmitContactI } from "@/types";
import { toast } from "sonner";

export const FormContact = () => {
  const { register, handleSubmit, reset } = useForm<SubmitContactI>({});

  const SubmitContact = async (values: SubmitContactI) => {
    const { ok } = await CreateContactAction(values);
    if (!ok) {
      return toast.error("Hubo un error al enviar el mensaje");
    }
    reset();
    return toast("mensaje enviado con exito");
  };

  return (
    <div className="flex flex-col">
      <h2 className="text-2xl font-extrabold mb-5 text-red-500">
        Que esperas, Cotiza ya!
      </h2>
      <form
        onSubmit={handleSubmit(SubmitContact)}
        className="flex flex-col gap-y-5"
      >
        <Input type="text" {...register("name")} placeholder="Tu nombre..." />
        <Input
          type="email"
          {...register("email")}
          placeholder="Tu correo electronico..."
        />
        <Textarea {...register("message")} placeholder="Tu mensaje..." />
        <Button type="submit" className="w-full bg-red-500">
          Cotizar
        </Button>
      </form>
    </div>
  );
};
