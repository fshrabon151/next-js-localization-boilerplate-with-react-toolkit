import { useField } from "formik";
import * as React from "react";

interface FormSwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

export const FormikCheckbox = React.forwardRef<
  HTMLInputElement,
  FormSwitchProps
>(({ label, name, required, ...props }, ref) => {
  const [field, meta, helpers] = useField({ name, type: "checkbox" });

  return (
    <div className="flex items-center">
      <label htmlFor={name} className="roboto-regular text-txt-100">
        {label} {required && <span className="text-rose-500">*</span>}
      </label>
      <input
        type="checkbox"
        id={name}
        {...field}
        {...props}
        checked={field.value}
        ref={ref}
        className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-300 peer focus:outline-none"
        role="switch"
        aria-checked={field.value}
        onChange={() => helpers.setValue(!field.value)}
      />
      {meta.touched && meta.error && (
        <p className="text-rose-500 text-sm mt-1 text-start" role="alert">
          {meta.error}
        </p>
      )}
    </div>
  );
});

FormikCheckbox.displayName = "FormikCheckbox";
