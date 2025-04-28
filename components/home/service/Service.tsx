import { Card, Transition } from "@/components";
import type { Service } from "@/interface";
import { getFeaturedServices } from "@/actions";

export async function Service() {
  const services = await getFeaturedServices(3);

  return (
    <Transition position="bottom" className="my-20 md:container">
      <h2 className="text-red-500 text-center mb-10 text-5xl">
        Servicios Destacados
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-2 sm:mx-0">
        {services?.map((service: Service) => (
          <Card<Service> key={service.id} url="services" data={service} />
        ))}
      </div>
    </Transition>
  );
}
