import Image from "next/image";
import { ReactNode } from "react";

type HeadingBannerProps = {
  children: ReactNode;
  urlImage: string;
};

export const TitleImage = ({ children, urlImage }: HeadingBannerProps) => {
  return (
    <div className="relative bg-black h-[300px]  overflow-hidden ">
      {urlImage ? (
        <Image
          src={urlImage}
          alt="Imagen de banner"
          fill
          className=" object-cover"
        />
      ) : (
        <div className="w-full h-[300px] bg-gray-200" />
      )}

      <div className="absolute inset-0 bg-black/50"></div>
      <div className="absolute inset-0 text-white flex items-center justify-center">
        <p className="text-3xl sm:text-4xl font-bold text-center mx-4">
          {children}
        </p>
      </div>
    </div>
  );
};
