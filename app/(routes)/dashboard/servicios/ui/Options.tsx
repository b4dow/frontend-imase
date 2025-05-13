import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Service } from "@/interface/service.interface";
import Link from "next/link";

interface Props {
  id: Service["id"];
}

export function Options({ id }: Props) {
  console.log({ id });
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
          <Link href={`/dashboard/servicios/editar?id=${id}`}>Editar</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="hover:underline">
          <Link href={`/dashboard/servicios/eliminar?id=${id}`}>Eliminar</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
