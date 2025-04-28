"use client";
import Image from "next/image";
import Link from "next/link";
import { Transition } from "@/components";

export const About = () => {
  return (
    <Transition position="right" className="md:container my-20 px-2 md:px-0">
      <div className="text-center sm:text-start sm:flex justify-around items-center">
        <div className="mx-5 sm:w-72 mb-10">
          <h2>
            Apuntamos a ser la mejor opción para el cliente que requiere de un
            buen servicio para mantener la eficacia de su trabajo Industrias
            IMASE, actualmente brinda su atención/servicios a nivel nacional e
            internacional, contando con distribuidores autorizados en Alemania,
            de la marca SYSTEC.
          </h2>
          <Link href="/">
            <button className="btn-primary mt-5">Ver mas detalles</button>
          </Link>
        </div>
        <div className="w-full  h-52 md:w-96 md:h-96 rounded-2xl relative overflow-hidden">
          <Image
            src="/image-about-2.png"
            alt="Image about"
            fill
            priority
            className="object-cover "
          />
        </div>
      </div>
    </Transition>
  );
};
