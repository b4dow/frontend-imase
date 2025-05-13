import { Form } from "@/components/contact/form/Form";
import { GoogleMaps } from "@/components/contact/google-maps/GoogleMaps";
import { Info } from "@/components/contact/info/Info";
import { TitleImage } from "@/components/ui/title-image/TitleImage";

export default function Contacto() {
  return (
    <>
      <TitleImage urlImage="/banner-contacto.jpg">Contacto</TitleImage>
      <section className="md:container my-10 mx-2 md:mx-auto">
        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-20 ">
          <div className="flex flex-col gap-y-4 text-white">
            <Info title="Horario e Atención" value="8am a 4pm" />
            <Info
              title="Dirección"
              value="Jr. Atanacio Catojeras 115 - 1er piso Urb. Almirante Miguel Grau-
              SMP"
            />

            <Info title="Correo" value="ventas@imase.pe" />
          </div>
          <Form />
        </div>
        <GoogleMaps />
      </section>
    </>
  );
}
