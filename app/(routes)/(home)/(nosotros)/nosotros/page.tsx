import Image from "next/image";
import { CarouselAbout } from "../components/CarouselAbout/CarouselAbout";
import ImagePrimary from "@/public/image-about-section.png";
import ImageSecondary from "@/public/image-about-section-second.png";

export default function Nosotros() {
  return (
    <>
      <CarouselAbout />
      <section className="flex  mx-10 flex-col sm:flex-row justify-between items-center my-20">
        <div className="sm:w-1/4 mb-10 sm:mb-0">
          <p className="font-medium text-base">
            Somos una empresa fundada en el año 1987, contamos con más de 30
            años de experiencia, con los más altos estándares de calidad y
            seguridad que ofrecemos a nuestros clientes.
          </p>
        </div>
        <div className="relative sm:w-1/2 w-full h-72">
          <Image
            className="object-cover rounded-xl"
            src={ImagePrimary}
            alt="image about"
            fill
          />
        </div>
      </section>
      <section className="flex flex-col sm:flex-row gap-6 mx-10 justify-between items-center">
        <div className="relative sm:w-1/2 w-full h-60 ">
          <Image
            className="w-full h-full object-cover rounded-xl"
            src={ImageSecondary}
            alt="image about"
            fill
          />
        </div>
        <div className="sm:w-1/2 ">
          <p className="font-medium text-base">
            Brindamos un servicio técnico de calidad, basado en el conocimiento
            y con experiencia comprobada por 35 años. Nuestra finalidad es
            asegurar una asistencia que resuelva el problema en el menor tiempo
            posible, procurando realizarlo en el mismo local sin retirar el
            producto. Realizamos instalación en planta, supervisamos,
            verificamos el funcionamiento, realizamos pruebas, etc. A la vez,
            realizamos el servicio post-venta, ofreciendo garantía, asistencia
            técnica, provisión de accesorios y repuestos.
          </p>
        </div>
      </section>
    </>
  );
}
