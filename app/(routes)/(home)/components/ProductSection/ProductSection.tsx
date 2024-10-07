import Card from "@/components/Card";
import { getProductsHome } from "@/services/api/products";
import { DataProps } from "@/types";

export async function ProductSection() {
  const { products } = await getProductsHome();
  return (
    <section className="my-20">
      <h2 className="text-red-500 text-center font-bold mb-10 text-4xl">
        Nuestros Productos Destacados
      </h2>
      {products.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-4">
          {products.map((item: DataProps) => (
            <Card key={item.id} url="productos" data={item} />
          ))}
        </div>
      ) : (
        <p className="text-2xl font-black text-black/70 text-center">
          No hay datos
        </p>
      )}
    </section>
  );
}
