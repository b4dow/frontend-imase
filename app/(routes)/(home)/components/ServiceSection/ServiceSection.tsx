import Card from "@/components/Card";
import { getServicesHome } from "@/services/api/services";
import { DataProps } from "@/types";

export async function ServiceSection() {
  const { services } = await getServicesHome();
  console.log(services.length)
  return (
    <>
      <section className="my-20 flex items-center justify-center flex-col mx-auto">
        <h2 className="text-red-500 text-center font-bold mb-10 text-4xl">
          Nuestros Servicios Destacados
        </h2>

        {!services.length ? (
          <p className="text-2xl font-black text-black/70 text-center">
            No hay datos
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-3  w-full">
            {services.map((item: DataProps) => (
              <Card key={item.id} url="servicios" data={item} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
