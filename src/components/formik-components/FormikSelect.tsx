import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useField } from "formik";
import * as React from "react";
import FieldWrapper from "./FieldWrapper";

interface Option {
  label: string;
  value: string | number;
}

interface FormSelectProps {
  label: string;
  name: string;
  options: Option[];
  required?: boolean;
}

export const FormikSelect = React.forwardRef<HTMLDivElement, FormSelectProps>(
  ({ label, name, options, required = false }, ref) => {
    const [field, meta, helpers] = useField(name);
    const { setValue } = helpers;

    return (
      <FieldWrapper name={name} label={label} required={required}>
        <Select
          onValueChange={(val) => setValue(val)}
          value={field.value?.toString() ?? ""}
        >
          <SelectTrigger
            className={`h-14 rounded-lg border-[1px] bg-transparent px-6 py-2.5 roboto-regular text-txt-100 appearance-none focus:outline-none focus:ring-0 border-black-100 focus:border-primary-600 ${
              meta.touched && meta.error ? "border-rose-500" : ""
            }`}
          >
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            {options.map(({ label, value }) => (
              <SelectItem key={value} value={value.toString()}>
                {label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FieldWrapper>
    );
  }
);

FormikSelect.displayName = "FormikSelect";
