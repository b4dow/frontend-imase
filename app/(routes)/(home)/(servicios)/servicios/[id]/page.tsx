import { getServiceById } from "@/services/api";
import Heading from "@/components/Heading";
import Image from "next/image";
import Link from "next/link";
import { MessageCirclePlus } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServiceById = async ({ params }: { params: { id: string } }) => {
  const servicio = await getServiceById(params.id);
  return (
    <>
      <div className="my-10">
        <Heading>{servicio.name}</Heading>
      </div>
      <div className="grid text-center grid-cols-1 sm:grid-cols-2 gap-5 mx-2">
        <div className="gap-4 ">
          <div>
            <Image
              className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[300px]"
              alt={servicio.name}
              src={servicio.image}
              width={400}
              height={400}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-center">
          <p className="text-lg">{servicio.description}</p>
          <Link href={`${servicio.url}`} target="__blank" className="">
            <Button className="gap-2">
              <MessageCirclePlus className="w-4 h-4" />
              Consulta del Servicio
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ServiceById;
