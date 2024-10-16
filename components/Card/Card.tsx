import { DataProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const Card = ({
  data,
  url,
}: {
  data: DataProps;
  url: DataProps["url"];
}) => {
  return (
    <>
      {!data.available ? null : (
        <div className="shadow-2xl shadow-black/70  rounded-2xl w-1/4">
          <figure className="relative h-48 w-full overflow-hidden rounded-t-2xl">
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

            <Link
              href={`${url}/${data.id}`}
              className="btn btn-error text-white"
            >
              <Button className="w-full mt-5 bg-red-500 hover:bg-black/95">
                Ver detalles
              </Button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
