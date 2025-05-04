import {
  Control,
  Controller,
  FieldError,
  FieldValues,
  Path,
} from "react-hook-form";

interface Props<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  type?: string;
  error?: FieldError;
}

export const FormInput = <T extends FieldValues>({
  control,
  name,
  label,
  type,
  error,
  ...inputProps
}: Props<T>) => {
  return (
    <div className="gap-4">
      <label htmlFor={name} className="block ">
        {label}
      </label>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <input
            type={type}
            {...field}
            className={`border rounded-lg text-black w-full py-2 px-2 mt-2 border-b-black shadow outline-none${error ? " border-red-500" : ""}  `}
            {...inputProps}
          />
        )}
      />

      {error && <p className="text-red-500">{error.message}</p>}
    </div>
  );
};
