import { GetProduct } from "@/actions";
import { TitleImage } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { FaMessage } from "react-icons/fa6";

interface Props {
  params: Promise<{ slug: string }>;
}

const ProductsById = async ({ params }: Props) => {
  const { slug } = await params;
  const product = await GetProduct(slug);

  if (!product) return;

  return (
    <>
      <TitleImage urlImage="/home/2.jpg">{product.name}</TitleImage>
      <div className="md:container mx-auto grid text-center grid-cols-1 sm:grid-cols-2 gap-5 my-10">
        <Image
          className="h-auto w-full max-w-full rounded-lg object-contain  md:h-[300px]"
          src={product.image.url}
          alt={product.name}
          width={400}
          height={400}
        />
        <div className="flex flex-col gap-4 justify-end items-end text-right">
          <p className="text-2xl">Descripción</p>
          <p className="text-lg">{product.description}</p>
          <Link href={`${product.url}`} target="__blank" className="">
            <button className="btn-primary gap-2 flex items-center ">
              <FaMessage size={20} className="text-white" />
              Consultar
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductsById;
