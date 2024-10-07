import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function AboutSection() {
  return (
    <section className="my-20">
      <div className="text-center sm:text-start sm:flex justify-around items-center">
        <div className="mx-5 sm:w-72 mb-10">
          <h2>
            Apuntamos a ser la mejor opción para el cliente que requiere de un
            buen servicio para mantener la eficacia de su trabajo Industrias
            IMASE, actualmente brinda su atención/servicios a nivel nacional e
            internacional, contando con distribuidores autorizados en Alemania,
            de la marca SYSTEC.
          </h2>
          <Link href="/nosotros">
            <Button className="mt-5">Ver mas detalles</Button>
          </Link>
        </div>
        <div className="w-96 h-96 rounded-2xl relative overflow-hidden">
          <Image
            src="/image-about-section-second.png"
            alt="Image about section"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
