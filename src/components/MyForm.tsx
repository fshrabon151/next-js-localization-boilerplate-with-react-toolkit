"use client";
import { FormikCheckbox } from "@/components/formik-components/FormikCheckbox";
import { FormikRadioGroup } from "@/components/formik-components/FormikRadioGroup";
import { FormikSelect } from "@/components/formik-components/FormikSelect";
import { FormikText } from "@/components/formik-components/FormikText";
import { FormikTextarea } from "@/components/formik-components/FormikTextarea";
import { Form, FormikProvider, useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { Button } from "./ui/button";

interface FormValues {
  firstName: string;
  bio: string;
  favoriteColor: string;
  gender: string;
  subscribe: boolean;
}

const initialValues: FormValues = {
  firstName: "",
  bio: "",
  favoriteColor: "",
  gender: "",
  subscribe: false,
};

const validationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  bio: Yup.string().required("Bio is required"),
  favoriteColor: Yup.string().required("Favorite Color is required"),
  gender: Yup.string().required("Gender is required"),
  subscribe: Yup.boolean(),
});

export const MyForm: React.FC = () => {
  const formik = useFormik<FormValues>({
    initialValues,
    validationSchema,
    onSubmit: (values, actions) => {
      alert(JSON.stringify(values, null, 2));
      actions.setSubmitting(false);
    },
  });

  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Example Form</h2>
      <FormikProvider value={formik}>
        <Form className="space-y-4" autoCapitalize="off" autoComplete="off">
          <FormikText name="firstName" label="First Name" required />
          <FormikTextarea name="bio" label="Bio" />
          <FormikSelect
            name="favoriteColor"
            label="Favorite Color"
            options={[
              { label: "Red", value: "red" },
              { label: "Blue", value: "blue" },
            ]}
            required
          />
          <FormikRadioGroup
            name="gender"
            label="Gender"
            options={[
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
            ]}
            required
          />
          <FormikCheckbox
            name="subscribe"
            label="Subscribe to newsletter"
            required
          />
          <Button type="submit" disabled={formik.isSubmitting}>
            Submit
          </Button>
        </Form>
      </FormikProvider>
    </div>
  );
};
