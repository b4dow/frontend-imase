import { getFeaturedServices } from "actions/service";
import { Service as ServiceType } from "interface";
import { Card, Transition } from "components/ui";

export async function Service() {
  const services = await getFeaturedServices(3);

  return (
    <Transition position="bottom" className="my-32 md:container mx-auto">
      <h2 className="text-red-500 text-center mb-4 text-5xl">
        Servicios Destacados
      </h2>
      <p className="prose  mx-auto text-center  mb-16">
        Potencie la precisión y la continuidad de sus procesos con nuestros
        servicios clave.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-2 sm:mx-0">
        {services?.map((service: ServiceType) => (
          <Card<ServiceType> key={service.id} url="services" data={service} />
        ))}
      </div>
    </Transition>
  );
}
