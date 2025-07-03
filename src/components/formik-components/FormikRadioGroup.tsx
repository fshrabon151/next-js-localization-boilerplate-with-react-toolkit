import { useField } from "formik";
import * as React from "react";

interface Option {
  label: string;
  value: string | number;
}

interface FormRadioGroupProps {
  name: string;
  label: string;
  options: Option[];
  required?: boolean;
}

export const FormikRadioGroup: React.FC<FormRadioGroupProps> = ({
  name,
  label,
  options,
  required = false,
}) => {
  const [field, meta, helpers] = useField(name);

  return (
    <fieldset className="mb-4">
      <legend className="mb-2 roboto-regular text-txt-40">
        {label} {required && <span className="text-rose-500">*</span>}
      </legend>
      <div role="radiogroup" aria-labelledby={name}>
        {options.map(({ label: optionLabel, value }) => (
          <label
            key={value}
            className="inline-flex items-center mr-6 cursor-pointer roboto-regular text-txt-100"
          >
            <input
              type="radio"
              {...field}
              name={name}
              value={String(value)}
              checked={field.value === value}
              onChange={() => helpers.setValue(value)}
              className="mr-2 cursor-pointer"
              aria-checked={field.value === value}
            />
            {optionLabel}
          </label>
        ))}
      </div>
      {meta.touched && meta.error && (
        <p className="text-rose-500 text-sm mt-1" role="alert">
          {meta.error}
        </p>
      )}
    </fieldset>
  );
};
