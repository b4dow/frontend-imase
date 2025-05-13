"use client";

import {
  Control,
  Controller,
  FieldError,
  FieldValues,
  Path,
} from "react-hook-form";
import { Input } from "components/ui/input";
import { ChangeEvent } from "react";
import { Label } from "components/ui";
import { IoInformationOutline } from "react-icons/io5";

interface FormInputImageProps<T extends FieldValues> {
  control: Control<T>;
  label: string;
  name: Path<T>;
  error?: FieldError;
  disabled?: boolean;
}

export const FormInputImage = <T extends FieldValues>({
  control,
  label,
  error,
  name,
  disabled = false,
}: FormInputImageProps<T>) => {
  return (
    <div className="my-5">
      <Label>{label}</Label>
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange, ...rest } }) => (
          <Input
            type="file"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              onChange(e.target?.files)
            }
            accept="image/*"
            className="bg-gray-200"
            disabled={disabled}
          />
        )}
      />
      {error && (
        <p className="flex items-center justify-center my-2 text-red-500 ">
          <IoInformationOutline />
          {error.message}
        </p>
      )}
    </div>
  );
};
