"use client";
import { LoginSchema } from "@/schema";
import { LoginT } from "@/types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import "./style.css";
import { LoginAction } from "@/actions/login.action";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const FormLogin = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = async (values: LoginT) => {
    const response = await LoginAction(values);
    if (response?.status === 500) {
      toast.error("usuario no registrado");
      return;
    }

    router.push("/dashboard");
  };

  return (
    <div className="w-full   grid place-content-center  h-[100vh]  ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-72 h-72">
          <div className="mb-8">
            <label className="labelForm" htmlFor="email">
              Email
            </label>
            <input className="inputForm" type="text" {...register("email")} />
            {errors.email && (
              <span className="errorForm">{errors.email.message}</span>
            )}
          </div>
          <div className="mb-8">
            <label className="labelForm" htmlFor="password">
              Password
            </label>
            <input
              className="inputForm"
              type="password"
              {...register("password")}
            />
            {errors.password && (
              <span className="errorForm">{errors.password.message}</span>
            )}
          </div>
          <input className="buttonForm" type="submit" value="Iniciar Sesión" />
        </div>
      </form>
    </div>
  );
};
