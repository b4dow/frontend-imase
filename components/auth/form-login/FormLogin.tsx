"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useRouter } from "next/navigation";
import Image from "next/image";

import { LoginWithEmail } from "@/actions";
import { Login } from "@/interface";
import { SchemaLoginForm } from "@/schema";
import { FormInput, Alert } from "@/components";
import { useEffect, useState } from "react";

export const FormLogin = () => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>({
    resolver: zodResolver(SchemaLoginForm),
  });

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        setOpen(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [open]);

  const onSubmit: SubmitHandler<Login> = async (values) => {
    const { email, password } = values;

    const result = await LoginWithEmail({
      email,
      password,
    });

    if (result?.errorMessage) {
      setOpen(true);
      return;
    }

    return router.push("/dashboard");
  };

  return (
    <>
      <div className="bg-gray-100 flex justify-center items-center h-screen ">
        <div className="w-1/2 h-screen hidden lg:block">
          <Image
            src="/foto-portada-login.png"
            alt="Placeholder Image"
            className="object-cover w-full h-full"
            width={800}
            height={800}
          />
        </div>
        <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
          <h1 className="text-2xl font-semibold mb-4">Login</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <FormInput
                label="Correo Electrónico"
                control={control}
                name="email"
                type="email"
                error={errors.email}
              />
            </div>
            <div className="mb-4">
              <FormInput
                label="Contraseña"
                control={control}
                name="password"
                type="password"
                error={errors.password}
              />
            </div>
            {/* TODO: Crear el link para recordar la Sesión */}
            {/* <div className="mb-6 text-blue-500"> */}
            {/*   <a href="#" className="hover:underline"> */}
            {/*     Forgot Password? */}
            {/*   </a> */}
            {/* </div> */}
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md py-2 px-4 w-full cursor-pointer"
            >
              Ingresar
            </button>
          </form>
          {/* TODO: Crear el link para el registro del usuario con su permiso respectivo */}
        </div>
      </div>
    </>
  );
};
