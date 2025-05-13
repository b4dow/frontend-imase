import {
  Control,
  Controller,
  FieldError,
  FieldValues,
  Path,
} from "react-hook-form";
import { IoInformationOutline } from "react-icons/io5";
import { Textarea } from "@/components/ui/textarea";

interface FormTextAreaProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  error?: FieldError;
  disabled?: boolean;
}

export const FormTextArea = <T extends FieldValues>({
  control,
  name,
  label,
  error,
  disabled = false,
}: FormTextAreaProps<T>) => {
  return (
    <div className="my-4">
      <label htmlFor={name} className="block ">
        {label}
      </label>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Textarea
            {...field}
            name={name}
            className={`bg-gray-200 h-32 ${error ? " border-red-500" : ""}  `}
            disabled={disabled}
          ></Textarea>
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
