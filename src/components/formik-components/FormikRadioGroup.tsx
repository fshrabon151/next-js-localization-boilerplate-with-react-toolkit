import { cn } from "@/lib/utils";
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
  direction?: "horizontal" | "vertical"; // new prop for layout direction
}

export const FormikRadioGroup: React.FC<FormRadioGroupProps> = ({
  name,
  label,
  options,
  required = false,
  direction = "horizontal",
}) => {
  const [field, meta, helpers] = useField(name);

  return (
    <div className="relative">
      {/* Hidden input to enable peer placeholder-shown */}
      <input
        type="text"
        placeholder=" "
        className="peer absolute opacity-0 pointer-events-none w-full h-0 m-0 p-0"
        value={field.value || ""}
        readOnly
      />

      <fieldset
        id={name}
        className={cn(
          "rounded-lg border-[1px] bg-transparent px-6 pt-6 pb-4 roboto-regular text-txt-100 border-black-100 focus-within:border-primary-600",
          meta.touched && meta.error && "border-rose-500",
          "peer-placeholder-shown:border-black-100 peer-placeholder-shown:focus-within:border-primary-600"
        )}
        aria-describedby={`${name}-error`}
      >
        <legend
          className="absolute top-1 left-4 z-0 origin-[0] -translate-y-4 scale-75 transform bg-white roboto-regular text-txt-40 duration-300
            peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus-within:top-1 peer-focus-within:-translate-y-4 peer-focus-within:scale-75 px-2"
        >
          {label} {required && <span className="text-rose-500">*</span>}
        </legend>

        <div
          role="radiogroup"
          aria-labelledby={name}
          className={cn(
            "flex gap-4",
            direction === "horizontal" ? "flex-row" : "flex-col"
          )}
        >
          {options.map(({ label: optionLabel, value }) => (
            <label
              key={value}
              className="inline-flex items-center cursor-pointer roboto-regular text-txt-100"
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
      </fieldset>

      {meta.touched && meta.error && (
        <p
          id={`${name}-error`}
          className="text-rose-500 text-sm mt-1  text-start"
          role="alert"
        >
          {meta.error}
        </p>
      )}
    </div>
  );
};
