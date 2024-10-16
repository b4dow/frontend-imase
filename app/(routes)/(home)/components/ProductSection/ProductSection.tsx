import { Card } from "@/components/Card";
import { getProductsHome } from "@/services/api/products";
import { DataProps } from "@/types";

export async function ProductSection() {
  const { products } = await getProductsHome();
  return (
    <section className="my-20 container mx-auto">
      <h2 className="text-red-500 font-bold mb-10 text-center text-4xl">
        Productos Destacados
      </h2>
      {!products.length ? (
        <p className="text-2xl font-black text-black/70 text-center">
          No hay datos
        </p>
      ) : (
        <div className="flex items-center justify-center  gap-4">
          {products.map((item: DataProps) => (
            <Card key={item.id} url="productos" data={item} />
          ))}
        </div>
      )}
    </section>
  );
}
