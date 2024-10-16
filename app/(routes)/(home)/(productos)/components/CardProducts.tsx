import { Card } from "@/components/Card/";
import { DataProps } from "@/types";

type CardProductsProps = {
  products: DataProps[];
};

export default async function CardProducts({ products }: CardProductsProps) {
  return (
    <>
      {products.length ? (
        <div className="flex flex-wrap gap-4 justify-center ">
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
