import { Card } from "@/components/Card/";
import { getServicesHome } from "@/services/api/services";
import { DataProps } from "@/types";

export async function ServiceSection() {
  const { services } = await getServicesHome();
  return (
    <>
      <section className="my-20 container mx-auto">
        <h2 className="text-red-500 text-center font-bold mb-10 text-4xl">
          Servicios Destacados
        </h2>

        {!services.length ? (
          <p className="text-2xl font-black text-black/70 text-center">
            No hay datos
          </p>
        ) : (
          <div className="flex justify-center gap-4 w-full">
            {services.map((item: DataProps) => (
              <Card key={item.id} url="servicios" data={item} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
