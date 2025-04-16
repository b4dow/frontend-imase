"use client";
import Image from "next/image";
import { CarouselAbout } from "../components/CarouselAbout/";
import { Transition } from "@/components/Transition/Transition";

export default function Nosotros() {
  return (
    <>
      <CarouselAbout />
      <Transition
        position="bottom"
        className="container flex  mx-auto flex-col sm:flex-row justify-between items-center my-20"
      >
        <div className="sm:w-1/2 mb-10 sm:mb-0">
          <p className="font-medium text-lg">
            Somos una empresa fundada en el año 1987, contamos con más de 30
            años de experiencia, con los más altos estándares de calidad y
            seguridad que ofrecemos a nuestros clientes.
          </p>
        </div>
        <div className="relative sm:w-1/2 w-full h-72">
          <Image
            className="object-cover rounded-xl"
            src="/image-about-section.png"
            alt="image about"
            fill
          />
        </div>
      </Transition>
      <Transition position="bottom" className="my-20">
        <div className="container flex flex-col sm:flex-row gap-6 justify-between items-center mx-auto">
          <div className="relative w-full md:w-2/5 h-96">
            <Image
              className=" object-cover rounded-xl"
              src="/image-about-section-second.png"
              alt="image about"
              fill
            />
          </div>
          <div className="sm:w-1/2 ">
            <p className="font-medium text-lg">
              Brindamos un servicio técnico de calidad, basado en el
              conocimiento y con experiencia comprobada por 35 años. Nuestra
              finalidad es asegurar una asistencia que resuelva el problema en
              el menor tiempo posible, procurando realizarlo en el mismo local
              sin retirar el producto. Realizamos instalación en planta,
              supervisamos, verificamos el funcionamiento, realizamos pruebas,
              etc. A la vez, realizamos el servicio post-venta, ofreciendo
              garantía, asistencia técnica, provisión de accesorios y repuestos.
            </p>
          </div>
        </div>
      </Transition>
      {/* <section className="my-20"> */}
      {/*   <h2 className="text-4xl text-center text-red-500 font-semibold"> */}
      {/*     Proyectos */}
      {/*   </h2> */}
      {/*   <div></div> */}
      {/* </section> */}
    </>
  );
}
