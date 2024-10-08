import { DataProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Card = ({ data, url }: { data: DataProps; url: DataProps["url"] }) => {
  return (
    <>
      {!data.available ? null : (
        <div className="">
          <figure className="relative h-48 overflow-hidden rounded-2xl mx-2">
            <Image
              src={data.image}
              alt={data.name}
              fill
              className="object-cover"
            />
          </figure>
          <div className="m-5">
            <h2 className="text-center text-xl py-2">{data.name}</h2>
            <p className="text-sm truncate ... text-ellipsis ">
              {data.description}
            </p>

            <Button className="w-full mt-5 bg-red-500">
              <Link
                href={`${url}/${data.id}`}
                className="btn btn-error text-white"
              >
                Ver detalles
              </Link>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
