import Card from "@/components/Card";
import { DataProps } from "@/types";

type CardProductsProps = {
  products: DataProps[];
};

export default async function CardProducts({ products }: CardProductsProps) {
  return (
    <>
      {products.length ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
          {products.map((producto: DataProps) => (
            <Card url="productos" key={producto.id} data={producto} />
          ))}
        </div>
      ) : (
        <p className="text-2xl font-black text-black/70 text-center">
          No hay productos
        </p>
      )}
    </>
  );
}
