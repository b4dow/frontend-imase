"use client";
import { createContactAction } from "@/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormSchema } from "@/schema";
import { toast } from "react-toastify";

export const FormContact = () => {
  const createContactMessage = async (formData: FormData) => {
    const data = Object.fromEntries(formData.entries());
    console.log(data);

    const result = FormSchema.safeParse(data);

    if (!result.success) {
      result.error.issues.forEach((issue) => toast.error(issue.message));
      return;
    }

    const dataForm = await createContactAction(data);
    toast.success(dataForm);
  };
  return (
    <div className="flex flex-col">
      <h2 className="text-2xl font-extrabold mb-5 text-red-500">
        Que esperas, Cotiza ya!
      </h2>
      <form action={createContactMessage} className="flex flex-col gap-y-5">
        <Input type="text" name="name" placeholder="Tu nombre..." />
        <Input
          type="email"
          name="email"
          placeholder="Tu correo electronico..."
        />
        <Textarea placeholder="Tu mensaje..." name="message" />
        <Button type="submit" className="w-full bg-red-500">
          Cotizar
        </Button>
      </form>
    </div>
  );
};
