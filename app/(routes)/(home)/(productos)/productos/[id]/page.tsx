import { getProductById } from "@/services/api";
import Heading from "@/components/Heading";
import Image from "next/image";
import Link from "next/link";
import { MessageCirclePlus } from "lucide-react";
import { Button } from "@/components/ui/button";

const GenerateStaticParam = async ({ params }: { params: { id: string } }) => {
  const producto = await getProductById(params.id);
  return (
    <>
      <div className="my-10">
        <Heading>{producto.name}</Heading>
      </div>
      <div className="grid text-center grid-cols-1 sm:grid-cols-2 gap-5 mx-2">
        <div className="gap-4 ">
          <div>
            <Image
              className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[300px]"
              src={producto.image}
              alt={producto.name}
              width={400}
              height={400}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-center">
          <p className="text-lg">{producto.description}</p>
          <Link href={`${producto.url}`} target="__blank" className="">
            <Button className="gap-2">
              <MessageCirclePlus className="w-4 h-4" />
              Consulta del Producto
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default GenerateStaticParam;
