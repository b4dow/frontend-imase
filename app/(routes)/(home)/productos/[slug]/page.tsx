import Image from "next/image";
import Link from "next/link";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { GetProduct } from "actions/product";
import { TitleImage } from "components/ui";
import { TabsProduct } from "./ui/Tabs";

interface Props {
  params: Promise<{ slug: string }>;
}

const ProductsById = async ({ params }: Props) => {
  const { slug } = await params;
  const product = await GetProduct(slug);
  console.log(product);
  if (!product) return;

  return (
    <>
      <TitleImage urlImage="/home/2.jpg">{product.name}</TitleImage>
      <div className="md:container mx-auto ">
        <div className="grid text-center grid-cols-1 sm:grid-cols-2 gap-5 my-10">
          <Image
            className="h-auto w-full max-w-full rounded-lg object-contain  md:h-[300px]"
            src={product.imageUrl}
            alt={product.name}
            width={400}
            height={400}
          />
          <div className="flex flex-col gap-4 justify-center items-end text-right">
            <p className="text-lg prose">{product.descriptionShort}</p>
            <Link href={`${product.url}`} target="__blank" className="">
              <button className="btn-primary gap-1 flex items-center transform hover:scale-105 transition-transform duration-300  ">
                <IconBrandWhatsapp stroke={2} />
                Consultar
              </button>
            </Link>
          </div>
        </div>
        <TabsProduct description={product.description} />
        {/* <div className="my-10"> */}
        {/*   <h3 className="text-4xl font-semibold">Descripción</h3> */}
        {/*   <MarkdownDescription description={product.description} /> */}
        {/* </div> */}
      </div>
    </>
  );
};

export default ProductsById;
