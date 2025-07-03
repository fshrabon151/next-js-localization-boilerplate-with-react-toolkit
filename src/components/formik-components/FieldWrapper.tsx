import { useField } from "formik";
import React, { ReactNode } from "react";

const FieldWrapper: React.FC<{
  children: ReactNode;
  name: string;
  label: string;
  required: boolean;
}> = ({ name, label, required, children }) => {
  const [, meta] = useField(name);
  return (
    <div>
      <div className="relative">
        {children}
        <label
          htmlFor={name}
          className="absolute top-1 left-4 z-0 origin-[0] -translate-y-4 scale-75 transform bg-white roboto-regular text-txt-40 duration-300 peer-placeholder-shown:top-1/2 text-black peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-1 peer-focus:-translate-y-4 peer-focus:scale-75 px-2 peer-focus:px-2 peer-focus:text-primary-600"
        >
          {label} {required && <span className="text-rose-500">*</span>}
        </label>
      </div>
      {meta.touched && meta.error && (
        <p
          id={`${name}-error`}
          className="text-rose-500 text-sm mt-1 text-start"
          role="alert"
        >
          {meta.error}
        </p>
      )}
    </div>
  );
};

export default FieldWrapper;
