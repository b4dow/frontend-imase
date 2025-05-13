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
    .string({ message: "correo electrónico inválido" })
    .email("correo electrónico inválido"),
  password: z
    .string({ message: "la contraseña no puede ir vacía" })
    .min(6, { message: "la contraseña debe tener al menos 6 caracteres" }),
});

export const SchemaNewProductForm = z.object({
  id: z.string().uuid().optional().nullable(),
  name: z
    .string({ message: "El campo nombre no puede ir vacia" })
    .min(3, { message: "el campo nombre tiene que tener minimo 3 caracteres" })
    .max(50, {
      message: "el campo nombre no puede tener mas de 50 caracteres",
    }),
  descriptionShort: z
    .string({ message: "el campo de descripción no puede ir vacía" })
    .min(10, {
      message: "el campo descripción tiene que tener minimo 10 caracter",
    })
    .max(500, {
      message: "el campo descripción no puede tener mas de 500 caracteres",
    }),
  description: z
    .string({ message: "el campo de descripción no puede ir vacía" })
    .min(10, {
      message: "el campo descripción tiene que tener minimo 10 caracter",
    }),
  url: z
    .string({ message: "el campo url no puede ir vacia" })
    .min(3, { message: "el campo url tiene que tener minimo 3 caracteres" }),
  slug: z
    .string({ message: "el campo slug no puede ir vacía" })
    .min(3, { message: "el campo slug tiene que tener minimo 3 caracter" }),
});

export const SchemaNewServiceForm = z.object({
  id: z.string().uuid().optional().nullable(),
  name: z
    .string({ message: "El campo nombre no puede ir vacia" })
    .min(3, { message: "el campo nombre tiene que tener minimo 3 caracteres" })
    .max(50, {
      message: "el campo nombre no puede tener mas de 50 caracteres",
    }),
  descriptionShort: z
    .string({ message: "el campo de descripción no puede ir vacía" })
    .min(10, {
      message: "el campo descripción tiene que tener minimo 10 caracter",
    })
    .max(500, {
      message: "el campo descripción no puede tener mas de 500 caracteres",
    }),
  description: z
    .string({ message: "el campo de descripción no puede ir vacía" })
    .min(10, {
      message: "el campo descripción tiene que tener minimo 10 caracter",
    }),
  url: z
    .string({ message: "el campo url no puede ir vacia" })
    .min(3, { message: "el campo url tiene que tener minimo 3 caracteres" }),
  slug: z
    .string({ message: "el campo slug no puede ir vacía" })
    .min(3, { message: "el campo slug tiene que tener minimo 3 caracter" }),
});

export const SchemaEditService = z.object({
  name: z
    .string({ message: "El campo nombre no puede ir vacia" })
    .min(3, { message: "el campo nombre tiene que tener minimo 3 caracteres" })
    .max(50, {
      message: "el campo nombre no puede tener mas de 50 caracteres",
    }),
  descriptionShort: z
    .string({ message: "el campo de descripción no puede ir vacía" })
    .min(10, {
      message: "el campo descripción tiene que tener minimo 10 caracter",
    })
    .max(500, {
      message: "el campo descripción no puede tener mas de 500 caracteres",
    }),
  description: z
    .string({ message: "el campo de descripción no puede ir vacía" })
    .min(10, {
      message: "el campo descripción tiene que tener minimo 10 caracter",
    }),
  url: z
    .string({ message: "el campo url no puede ir vacia" })
    .min(3, { message: "el campo url tiene que tener minimo 3 caracteres" }),
  slug: z
    .string({ message: "el campo slug no puede ir vacía" })
    .min(3, { message: "el campo slug tiene que tener minimo 3 caracter" }),
});
