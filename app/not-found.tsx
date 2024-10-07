import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center  gap-4 my-10">
      <h2 className="text-4xl font-bold">Error 404 - No Encontrado</h2>
      <Link href="/">
        <Button className="bg-red-500">Volver al Home</Button>
      </Link>
    </div>
  );
}
