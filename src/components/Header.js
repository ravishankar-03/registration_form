import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import "../../src/style.css";


import { useNavigate } from "react-router-dom";
const Header = () => {
  const initialvalues = {
    name: "",
    subject: "",
    group: "",
    year: "",
    checkbox: false,
  };

  const schema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    subject: Yup.string().required("Subject is Required"),
    group: Yup.string().required("Group is Required"),
    year: Yup.string().required("Year is Required"),
    checkbox: Yup.boolean().oneOf([true], "All field is Required"),
  });

  const navigate = useNavigate();

  const handlesubmit = (value) => {
    localStorage.setItem("name",value.name)
    localStorage.setItem("subject",value.subject)
    localStorage.setItem("year",value.year)
    localStorage.setItem("group",value.group)
    navigate('/home')


  };



  return (
    <div className="container mt-5">
      <Formik
        initialValues={initialvalues}
        validationSchema={schema}
        onSubmit={handlesubmit}
      >
        <Form className="register-form">
        <h4 className="text-center">Registration Form</h4>
          <div className="form-group">
            <label>Name</label>
            <Field name="name" type="text" className={"form-control"} />
            <p className="text-danger" ><ErrorMessage name="name"/></p>
          </div>

          <div className="form-group">
            <label > Year </label>
            <Field name="year" type="date" className={"form-control"} />
            <p className="text-danger" ><ErrorMessage name="year"/></p>
          </div>

          <div className="form-group">
            <label > Subject </label>
            <Field name="subject" type="subject" className={"form-control"} />
            <p className="text-danger" ><ErrorMessage name="subject"/></p>
          </div>

          <div className="form-group">
            <label > Group </label>
            <Field name="group" type="group" className={"form-control"} component="select"><option value='' disabled>select group</option><option value='Iteg'>ITEG</option><option value='Beg'>BEG</option><option value='Meg'>MEG</option></Field>
            <p className="text-danger" ><ErrorMessage name="group"/></p>
          </div>

          <div className="form-check">
            <Field
              name="checkbox"
              type="checkbox"
              className={"form-check-input"}
            />
            <label className="form-check-label">All fields confirmed ?</label>
            <p className="text-danger" ><ErrorMessage name="checkbox"/></p>
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Header;
