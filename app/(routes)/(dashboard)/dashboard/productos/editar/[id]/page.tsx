import { UpdateServiceForm } from "../../components/ServicesForm/";
import { getProductById } from "@/services/api";

interface Props {
  params: {
    id: string;
  };
}
const UpdateProductPage = async ({ params }: Props) => {
  const { id } = params;
  const product = await getProductById(id);
  return (
    <>
      <h1 className="text-2xl text-center font-semibold">
        Actualizar Producto
      </h1>
      <UpdateServiceForm product={product} />;
    </>
  );
};

export default UpdateProductPage;
