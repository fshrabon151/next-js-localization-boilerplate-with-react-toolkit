"use client";
import { Form, Formik, FormikHelpers } from "formik";
import React from "react";
import * as Yup from "yup";
import { FormikText } from "@/components/formik-components/FormikText";
import { FormikRadioGroup } from "@/components/formik-components/FormikRadioGroup";
import { FormikSelect } from "@/components/formik-components/FormikSelect";
import { FormikSwitch } from "@/components/formik-components/FormikSwitch";
import { FormikTextarea } from "@/components/formik-components/FormikTextarea";

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
  const handleSubmit = (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
  };

  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Example Form</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-6">
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
            <FormikSwitch name="subscribe" label="Subscribe to newsletter" />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary-600 text-white py-3 rounded hover:bg-primary-700 transition"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
