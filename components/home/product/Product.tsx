import { getFeaturedProducts } from "actions/product";
import { Card, Transition } from "components/ui";
import type { Product as ProductType } from "interface";

export const Product = async () => {
  const products = await getFeaturedProducts(3);

  return (
    <Transition position="right" className="my-32 md:container mx-auto">
      <h2 className="text-red-500 mb-4 text-center text-5xl">
        Productos Destacados
      </h2>
      <p className="prose mx-auto text-center mb-10">
        Precisión que impulsa tu productividad: tecnología confiable y soporte
        experto en cada paso.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {products?.map((product: ProductType) => (
          <Card<ProductType> key={product.id} url="productos" data={product} />
        ))}
      </div>
    </Transition>
  );
};
