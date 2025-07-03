import { useField } from "formik";
import * as React from "react";

interface Option {
  label: string;
  value: string | number;
}

interface FormSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  options: Option[];
  required?: boolean;
}

export const FormikSelect = React.forwardRef<HTMLSelectElement, FormSelectProps>(
  ({ label, name, options, required = false, ...props }, ref) => {
    const [field, meta] = useField(name);

    return (
      <div className="relative">
        <select
          id={name}
          {...field}
          {...props}
          ref={ref}
          className={`peer block w-full h-14 rounded-lg border-[1px] bg-transparent px-6 py-2.5 roboto-regular text-txt-100 appearance-none focus:outline-none focus:ring-0 border-black-100 focus:border-primary-600 ${
            meta.touched && meta.error ? "border-rose-500" : ""
          }`}
          aria-invalid={!!(meta.touched && meta.error)}
          aria-describedby={`${name}-error`}
        >
          <option value="" disabled>
            Select an option
          </option>
          {options.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        <label
          htmlFor={name}
          className="absolute top-1 left-4 z-0 origin-[0] -translate-y-4 scale-75 transform bg-white roboto-regular text-txt-40 duration-300 peer-placeholder-shown:top-1/2 text-black peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-1 peer-focus:-translate-y-4 peer-focus:scale-75 px-2 peer-focus:px-2 peer-focus:text-primary-600"
        >
          {label} {required && <span className="text-rose-500">*</span>}
        </label>
        {meta.touched && meta.error && (
          <p
            id={`${name}-error`}
            className="text-rose-500 text-sm mt-1"
            role="alert"
          >
            {meta.error}
          </p>
        )}
      </div>
    );
  }
);

FormikSelect.displayName = "FormikSelect";
