import { UseFormRegister } from "react-hook-form";
import { CreateT } from "@/types";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

interface Props {
  register: UseFormRegister<CreateT>;
  name: keyof CreateT;
  label: string;
  error?: any;
}

export const FormTextArea = ({ register, name, label, error }: Props) => {
  return (
    <div className="gap-4">
      <Label htmlFor={name}>{label}</Label>
      <Textarea
        {...register(name)}
        className={` ${error ? "is-invalid" : ""}`}
      ></Textarea>

      {error && <p className="text-red-500">{error.message}</p>}
    </div>
  );
};
