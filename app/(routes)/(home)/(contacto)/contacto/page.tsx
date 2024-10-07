import Heading from "@/components/Heading";
import { FormContact } from "../components/FormContact";

export default function Contacto() {
  return (
    <>
      <Heading imageUrl="/banner-contacto.jpg">Contacto</Heading>
      <section className="my-10 grid grid-cols-1 sm:grid-cols-2 gap-20 mx-5">
        <div className="flex flex-col gap-y-4 text-white">
          <div className="bg-red-500 p-5 rounded-2xl ">
            <h2 className="font-bold text-lg">Horario de Atención</h2>
            <p>8am a 4pm</p>
          </div>
          <div className="bg-red-500 p-5 rounded-2xl ">
            <h2 className="font-bold text-lg">Dirección</h2>
            <p>
              Jr. Atanacio Catojeras 115 - 1er piso Urb. Almirante Miguel Grau-
              SMP
            </p>
          </div>
          <div className="bg-red-500 p-5 rounded-2xl ">
            <h2 className="font-bold text-lg">Correo</h2>
            <p>ventas@imase.pe</p>
          </div>
        </div>
        <FormContact />
      </section>
    </>
  );
}
