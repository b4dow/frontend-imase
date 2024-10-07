import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { DataProps } from "@/types";

type ServiceFormProps = {
  data?: DataProps;
};

export const ServiceForm = ({data} : ServiceFormProps) => {
  return (
    <div className="grid gap-4 py-4">
      <Input type="hidden" name="id" defaultValue={data?.id} />
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-right">
          Nombre
        </Label>
        <Input
          id="name"
          className="col-span-3"
          placeholder="ingresa el nombre..."
          name="name"
          defaultValue={data?.name}
        />
      </div>
      <div className="grid grid-cols-4 items-start gap-4">
        <Label htmlFor="description" className="text-right">
          Descripción
        </Label>
        <Textarea
          id="description"
          className="col-span-3"
          placeholder="ingresa la descripción..."
          name="description"
          defaultValue={data?.description}
        />
      </div>

      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="image" className="text-right">
          imagen
        </Label>
        <Input
          type="file"
          className="col-span-3"
          placeholder="Sube la imagen..."
          name="image"
        />
        <Input type="hidden" name="imageUrl" defaultValue={data?.image}/>
      </div>

      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="url" className="text-right">
          url
        </Label>
        <Input
          id="url"
          className="col-span-3"
          placeholder="ingresa la url de whatsapp..."
          name="url"
          defaultValue={data?.url}
        />
      </div>
    </div>
  );
};
