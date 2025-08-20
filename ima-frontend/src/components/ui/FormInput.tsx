// src/components/FormInput.tsx
import React from "react";
import type { FieldError } from "react-hook-form";

interface FormInputProps {
  label: string;
  type?: string;
  placeholder?: string;
  error?: FieldError;
 rest: React.InputHTMLAttributes<HTMLInputElement>;
}

export const FormInput: React.FC<FormInputProps> = ({
  label,
  type = "text",
  placeholder,
  error,
  ...rest
}) => (
  <div className="mb-4">
    <label className="block mb-1 font-medium">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring ${
        error ? "border-red-500" : "border-gray-300"
      }`}
      {...rest}
    />
    {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
  </div>
);
