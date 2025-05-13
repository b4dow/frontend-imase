"use client";

import { Product } from "@/interface/product.interface";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { Options } from "./Options";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
// kkj

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "name",
    header: "Nombre",
  },
  {
    accessorKey: "slug",
    header: "Slug",
  },
  {
    accessorKey: "available",
    header: "Disponibilidad",
    cell: ({ row }) => {
      return row.original.available ? "Disponible" : "No disponible";
    },
  },
  {
    accessorKey: "url",
    header: "Url de Whataspp",
    cell: ({ row }) => {
      return <Link href={row.original.url}>Whatsapp</Link>;
    },
  },
  {
    id: "acciones",
    cell: ({ row }) => {
      return <Options id={row.original.id} />;
    },
  },
];
