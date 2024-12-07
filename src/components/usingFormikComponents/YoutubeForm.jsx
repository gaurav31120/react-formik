import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
// import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "gaurav",
  email: "",
  channel: "",
  comments: "",
  address: "",
};
const onSubmit = (values) => {
  console.log("form data", values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required!"),
  email: Yup.string().email("Invalid email format!").required("Required!"),
  channel: Yup.string().required("Required!"),
});

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
    >
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
          <ErrorMessage name="name" />
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
          <ErrorMessage name="email" />
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
          <Field as="textarea" id="comments" name="comments"></Field>
        </div>
        <div className="form-control">
          <label htmlFor="addresss">Address</label>
          <Field name="address">
            {(props) => {
              const { field, form, meta } = props;
              console.log("props", props);

              return (
                <div>
                  <input type="text" id="address" {...field} />
                  {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                </div>
              );
            }}
          </Field>
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default YoutubeForm;
