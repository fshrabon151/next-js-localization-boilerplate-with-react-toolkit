import { cn } from "@/lib/utils";
import { useField } from "formik";
import * as React from "react";
import { Input } from "../ui/input";
import FieldWrapper from "./FieldWrapper";

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  required?: boolean;
}

export const FormikText = React.forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, name, required = false, type = "text", ...props }, ref) => {
    const [field, meta] = useField(name);

    return (
      <FieldWrapper name={name} label={label} required={required}>
        <Input
          id={name}
          {...field}
          {...props}
          type={type}
          placeholder=" "
          ref={ref}
          className={cn(
            "peer block w-full h-14 appearance-none rounded-lg border-[1px] bg-transparent px-6 py-2.5 roboto-regular text-txt-100 focus:outline-none focus:ring-0 border-black-100 focus:border-primary-600",
            "focus:outline-none"
          )}
          aria-invalid={!!(meta.touched && meta.error)}
          aria-describedby={`${name}-error`}
        />
      </FieldWrapper>
    );
  }
);

FormikText.displayName = "FormikText";
