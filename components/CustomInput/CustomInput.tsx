import { UseFormRegister } from "react-hook-form";
import { Input } from "../ui/input";
import { CreateT } from "@/types";
import { Label } from "../ui/label";

interface Props {
  register: UseFormRegister<CreateT>;
  name: keyof CreateT;
  label: string;
  type?: string;
  error?: any;
  accept?: string;
}

export const FormInput = ({
  register,
  name,
  label,
  type,
  error,
  accept,
}: Props) => {
  return (
    <div className="gap-4">
      <Label htmlFor={name}>{label}</Label>
      <Input
        type={type}
        {...register(name)}
        className={` ${error ? "is-invalid" : ""}`}
        accept={accept}
      />
      {error && <p className="text-red-500">{error.message}</p>}
    </div>
  );
};
