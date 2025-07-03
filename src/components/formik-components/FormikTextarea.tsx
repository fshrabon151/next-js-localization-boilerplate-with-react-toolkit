import { useField } from "formik";
import * as React from "react";
import { Textarea } from "../ui/textarea";
import FieldWrapper from "./FieldWrapper";

interface FormTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
  required?: boolean;
}

export const FormikTextarea = React.forwardRef<
  HTMLTextAreaElement,
  FormTextareaProps
>(({ label, name, required = false, ...props }, ref) => {
  const [field, meta] = useField(name);

  return (
    <FieldWrapper name={name} label={label} required={required}>
      <Textarea
        id={name}
        {...field}
        {...props}
        placeholder=" "
        ref={ref}
        rows={4}
        className={`peer block w-full appearance-none rounded-lg border-[1px] bg-transparent px-6 pt-4 pb-2.5 roboto-regular text-txt-100 focus:outline-none focus:ring-0 border-black-100 focus:border-primary-600 resize-none ${
          meta.touched && meta.error ? "border-rose-500" : ""
        }`}
        aria-invalid={!!(meta.touched && meta.error)}
        aria-describedby={`${name}-error`}
      />
    </FieldWrapper>
  );
});

FormikTextarea.displayName = "FormikTextarea";
