import { Item } from "interface";
import Image from "next/image";
import Link from "next/link";

interface Props<T> {
  data: T;
  url: string;
}

export const Card = <T extends Item>({ data, url }: Props<T>) => {
  return (
    <>
      <div className=" transform hover:scale-105 transition-transform duration-300 shadow-2xl shadow-black/70  rounded-2xl ">
        <figure className="relative h-48 w-full overflow-hidden rounded-t-2xl">
          <Image
            src={data.imageUrl}
            alt={data.name}
            sizes="100vw"
            width={500}
            height={500}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNcvXFjPQAGqgKObEwVYQAAAABJRU5ErkJggg=="
            className="object-cover"
          />
        </figure>
        <div className="m-5">
          <h2 className="text-center text-xl py-2">{data.name}</h2>
          <p className="text-sm truncate ... text-ellipsis ">
            {data.description}
          </p>

          <Link
            href={`${url}/${data.slug}`}
            className="w-full block mt-5 btn-primary hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Detalles
          </Link>
        </div>
      </div>
    </>
  );
};
