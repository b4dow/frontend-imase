import { z } from "zod";

export const SearchSchema = z.object({
  search: z
    .string()
    .trim()
    .min(1, { message: "La busqueda no puede ir vacia" }),
});

export const FormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "el campo nombre no puede ir vacía" }),
  email: z
    .string()
    .trim()
    .min(1, { message: "el campo email no puede ir vacía" }),
  message: z
    .string()
    .trim()
    .min(1, { message: "el campo de mensaje no puede ir vacía" }),
});

export const postDataSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "El campo del nombre no puede ir vacia" }),
  description: z
    .string()
    .trim()
    .min(1, { message: "El campo de la descripción no puede ir vacia" }),
  image: z
    .string()
    .min(1, { message: "El campo de la imagen no puede ir vacia" }),
  url: z
    .string()
    .trim()
    .min(1, { message: "El campo de la url no puede ir vacia" }),
});

export const LoginSchema = z.object({
  email: z.string().min(1, { message: "El campo de email no puede ir vacia" }),
  password: z
    .string()
    .min(8, { message: "El campo de password no puede ir vacia" }),
});
