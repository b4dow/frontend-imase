import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Product } from "@/interface/product.interface";
import Link from "next/link";

interface Props {
  id: Product["id"];
}

export function Options({ id }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Link href="#" className="hover:underline">
          Acciones
        </Link>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Acciones</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="hover:underline">
          <Link href={`/dashboard/productos/editar?id=${id}`}>Editar</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="hover:underline">
          <Link href={`/dashboard/productos/eliminar/?id=${id}`}>Eliminar</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
