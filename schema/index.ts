"use client";
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

export const CreateSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "El campo del nombre no puede ir vacia" }),
  description: z
    .string()
    .trim()
    .min(1, { message: "El campo de la descripción no puede ir vacia" }),
  image: z
    .any()
    .refine(
      (value) =>
        value instanceof FileList &&
        value.length > 0 &&
        value[0] instanceof File,
      {
        message: "se requiere seleccionar una imagen válida",
      },
    ),
  url: z
    .string()
    .trim()
    .min(1, { message: "El campo de la url no puede ir vacia" }),
});

export const UpdateSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "El campo del nombre no puede ir vacia" }),
  description: z
    .string()
    .trim()
    .min(1, { message: "El campo de la descripción no puede ir vacia" }),
  image: z.custom((value) => value instanceof FileList),
  url: z
    .string()
    .trim()
    .min(1, { message: "El campo de la url no puede ir vacia" }),
});

export const SchemaLoginForm = z.object({
  email: z
    .string({ message: "Correo electrónico inválido" })
    .email("Correo electrónico inválido"),
  password: z
    .string()
    .min(6, { message: "La contraseña debe tener al menos 6 caracteres" }),
});
