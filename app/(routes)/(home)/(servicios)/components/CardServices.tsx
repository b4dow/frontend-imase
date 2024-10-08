import Card from "@/components/Card";
import { DataProps } from "@/types";

type CardsServicesProps = {
  services: DataProps[];
};

export default async function CardServices({ services }: CardsServicesProps) {
  return (
    <> 
      {services.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        { services.map((service: DataProps) => (
          <Card data={service} url={"servicios"} key={service.id} />
        ))}
      </div>
      ) : <p className="text-2xl font-black text-black/70 text-center">No hay servicios</p>}
    </>
  );
}
