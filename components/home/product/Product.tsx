import { getFeaturedProducts } from "@/actions";
import { Card, Transition } from "@/components";
import type { Product as ProductType } from "@/interface";

export const Product = async () => {
  const products = await getFeaturedProducts(3);
  console.log({ products: products?.length });

  return (
    <Transition position="right" className="my-20 md:container mx-auto">
      <h2 className="text-red-500 mb-10 text-center text-5xl">
        Productos Destacados
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {products?.map((product: ProductType) => (
          <Card<ProductType> key={product.id} url="productos" data={product} />
        ))}
      </div>
    </Transition>
  );
};
