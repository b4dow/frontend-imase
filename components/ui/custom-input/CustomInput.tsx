import {
  Control,
  Controller,
  FieldError,
  FieldValues,
  Path,
} from "react-hook-form";
import { IoInformationOutline } from "react-icons/io5";
import { Input } from "@/components/ui/input";
import { Label } from "components/ui";

interface Props<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  type?: string;
  error?: FieldError;
  disabled?: boolean;
}

export const FormInput = <T extends FieldValues>({
  control,
  name,
  label,
  type,
  error,
  disabled = false,
}: Props<T>) => {
  return (
    <div className="my-4">
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <>
            <Label htmlFor={name} className="inline-block mb-1 ">
              {label}
            </Label>
            <Input
              type={type}
              {...field}
              className={`bg-gray-200 ${error ? " border-red-500" : ""}  `}
              disabled={disabled}
            />
          </>
        )}
      />

      {error && (
        <p className="flex items-center justify-center text-red-500 mt-2 gap-1 text-sm">
          <IoInformationOutline />
          {error.message}
        </p>
      )}
    </div>
  );
};
