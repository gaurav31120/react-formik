// import React from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  FastField,
} from "formik";
// import { useFormik } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";

const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  address: "",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumbers: ["", ""],
  phNumbers: [""],
};
const onSubmit = (values, onSubmitProps) => {
  console.log("form data", values);
  console.log("submit props", onSubmitProps);
  onSubmitProps.setSubmitting(false);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required!"),
  email: Yup.string().email("Invalid email format!").required("Required!"),
  channel: Yup.string().required("Required!"),
  // comments: Yup.string().required("Required"),
});

const validateComments = (value) => {
  let error;
  if (!value) {
    error = "required c";
  }
  return error;
};

function YoutubeForm() {
  // const formik = useFormik({
  //     initialValues,
  //     onSubmit,
  //     validationSchema,
  //     // validate,
  //   });
  // console.log("Form values", formik.values);
  //   console.log("Form errors", formik.errors);
  //   console.log("Form visited fields", formik.touched);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      // validateOnMount
      // validateOnChange={false}
      // validateOnBlur={false}
    >
      {(formik) => {
        console.log("Formik props ", formik);
        return (
          <Form>
            <div className="form-control">
              <label htmlFor="name">Name</label>
              <Field
                type="text"
                id="name"
                name="name"
                placeholder="Enter name"
                // {...formik.getFieldProps("name")}
              />
              <ErrorMessage name="name" component={TextError} />
              {/* <{formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}> */}
            </div>
            <div className="form-control">
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Enter email"
                // {...formik.getFieldProps("email")}
              />
              <ErrorMessage name="email" component={TextError}>
                {/* {errorMsg => {
                  <div className="error">{errorMsg}</div>;
                }} */}
              </ErrorMessage>
              {/* {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null} */}
            </div>
            <div className="form-control">
              <label htmlFor="channel">Channel</label>
              <Field
                type="text"
                id="channel"
                name="channel"
                placeholder="Enter chaanel"
                // {...formik.getFieldProps("channel")}
              />
              <ErrorMessage name="channel" />
              {/* {formik.touched.channel && formik.errors.channel ? (
            <div className="error">{formik.errors.channel}</div>
          ) : null} */}
            </div>
            <div className="form-control">
              <label htmlFor="comments">Comments</label>
              <Field
                as="textarea"
                id="comments"
                name="comments"
                validate={validateComments}
              ></Field>
              <ErrorMessage name="comments" component={TextError} />
            </div>
            <div className="form-control">
              <label htmlFor="addresss">Address</label>
              <FastField name="address">
                {/* {(props) => {
                  console.log("Field render");
                  const { field, form, meta } = props;
                  console.log("props", props);

                  return (
                    <div>
                      <input type="text" id="address" {...field} />
                      {meta.touched && meta.error ? (
                        <div>{meta.error}</div>
                      ) : null}
                    </div>
                  );
                }} */}
              </FastField>
            </div>
            <div className="form-control">
              <label htmlFor="facebook">facebook profile</label>
              <Field type="text" id="facebook" name="social.facebook" />
            </div>
            <div className="form-control">
              <label htmlFor="twitter">Twitter profile</label>
              <Field type="text" id="twitter" name="social.twitter" />
            </div>
            <div className="form-control">
              <label htmlFor="primaryPh">Primary phone number</label>
              <Field type="text" id="primaryPh" name="phoneNumbers[0]" />
            </div>
            <div className="form-control">
              <label htmlFor="secondfaryPh">Secondary phone number</label>
              <Field type="text" id="secondfaryPh" name="phoneNumbers[1]" />
            </div>
            <div className="form-control">
              <label>List of phone number</label>
              <FieldArray name="phNumbers">
                {(fieldArrayProps) => {
                  // console.log("fieldArrayProps", fieldArrayProps);
                  const { push, remove, form } = fieldArrayProps;
                  const { values } = form;
                  const { phNumbers } = values;
                  console.log("Form errors", form.errors);
                  return (
                    <div>
                      {phNumbers.map((phNumber, index) => (
                        <div key={index}>
                          <Field name={`phNumbers[${index}]`} />
                          {index > 0 && (
                            <button type="button" onClick={() => remove(index)}>
                              -
                            </button>
                          )}
                          <button type="button" onClick={() => push(index)}>
                            +
                          </button>
                        </div>
                      ))}
                    </div>
                  );
                }}
              </FieldArray>
            </div>
            <button
              type="button"
              onClick={() => formik.validateField("comments")}
            >
              Validate comments
            </button>
            <button type="button" onClick={() => formik.validateForm()}>
              Validate all
            </button>
            <button
              type="button"
              onClick={() => formik.setFieldTouched("comments")}
            >
              Visit comments
            </button>
            <button
              type="button"
              onClick={() =>
                formik.setTouched({
                  name: true,
                  email: true,
                  channel: true,
                  comments: true,
                })
              }
            >
              Visit fields
            </button>
            <button
              type="submit"
              // disabled={!(formik.dirty && formik.isValid)}
              // disabled={formik.isSubmitting}
              disabled={!(formik.isValid || formik.isSubmitting)}
            >
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default YoutubeForm;
