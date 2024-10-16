import { getProductsHome } from "@/services/api/products";
import { Card } from "@/components/Card";
import { DataProps } from "@/types";

export  async function ProductsHome() {
  const { products } = await getProductsHome();
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-4 mx-auto gap-4 m-10">
      {products.map((product: DataProps) => (
        <Card url="productos" data={product} key={product.id} />
      ))}
    </div>
  );
}
