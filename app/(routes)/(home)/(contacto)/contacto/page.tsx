import { HeadingBanner } from "@/components/HeadingBanner";
import { FormContact } from "../components/FormContact";
import { Info } from "@/components/Info/Info";

export default function Contacto() {
  return (
    <section className="container mx-auto">
      <HeadingBanner imageUrl="/banner-contacto.jpg">Contacto</HeadingBanner>
      <div className=" my-10 mx-auto grid grid-cols-1 sm:grid-cols-2 gap-20 ">
        <div className="flex flex-col gap-y-4 text-white">
          <Info title="Horario e Atención" value="8am a 4pm" />
          <Info
            title="Dirección"
            value="Jr. Atanacio Catojeras 115 - 1er piso Urb. Almirante Miguel Grau-
              SMP"
          />
          <Info title="Correo" value="ventas@imase.pe" />
        </div>
        <FormContact />
      </div>
    </section>
  );
}
