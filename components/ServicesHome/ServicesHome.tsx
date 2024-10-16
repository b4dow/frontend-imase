import { getServicesHome } from "@/services/api/services";
import {Card} from "@/components/Card";
import { DataProps } from "@/types";

export  async function ServicesHome() {
  const { services } = await getServicesHome();
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-4 mx-auto gap-4 m-10">
      {services.map((service: DataProps) => (
        <Card url="servicios" data={service} key={service.id} />
      ))}
    </div>
  );
}
