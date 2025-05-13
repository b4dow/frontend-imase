import Link from "next/link";
import Image from "next/image";
import { GetService } from "actions/service";
import { TitleImage } from "components/ui";

interface Props {
  params: Promise<{ slug: string }>;
}

const ServiceById = async ({ params }: Props) => {
  const { slug } = await params;

  const service = await GetService(slug);

  if (!service) return;

  return (
    <>
      <TitleImage urlImage="/home/1.jpg">{service.name}</TitleImage>
      <div className="md:container mx-auto grid text-center grid-cols-1 sm:grid-cols-2 gap-5 my-10 ">
        <Image
          className="h-auto w-full max-w-full rounded-lg  object-cover md:h-[300px]"
          alt={service.name}
          src={service.imageUrl}
          width={400}
          height={400}
        />
        <div className="flex flex-col gap-4 justify-center text-start">
          <p className="text-2xl">Descripción </p>
          <p className="text-lg">{service.descriptionShort}</p>
          <Link href={`${service.url}`} target="__blank" className="">
            <button className="btn-primary gap-2">Consultar</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ServiceById;
