"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useRouter } from "next/navigation";
import Image from "next/image";

import { Login } from "@/interface/auth.interface";
import { LoginWithEmail } from "@/actions/auth/login-with-email.action";
import { FormInput } from "@/components/ui/custom-input/CustomInput";
import { SchemaLoginForm } from "@/schema";
import { useState } from "react";
import { IoInformationOutline } from "react-icons/io5";

export const FormLogin = () => {
  const router = useRouter();

  const [errorMessage, setErrorMessage] = useState<string>("");

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Login>({
    resolver: zodResolver(SchemaLoginForm),
  });

  const onSubmit: SubmitHandler<Login> = async (values) => {
    const { email, password } = values;

    const resp = await LoginWithEmail({
      email,
      password,
    });

    if (!resp.ok) {
      setErrorMessage(resp.message);
      reset();
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

            {errorMessage && (
              <p className="flex items-center justify-center text-red-500 mt-2 gap-1 text-sm">
                <IoInformationOutline />
                {errorMessage}
              </p>
            )}

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
