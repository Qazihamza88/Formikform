import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";

const initialValues = {
  Fullname: "",
  Lastname: "",
  Email: "",
  Password: ""
};

const validationSchema = yup.object({
  Fullname: yup.string().required(" Fullname is required"),
  Lastname: yup.string().required(" Lastname is required "),
  Email: yup.string().email("Invalid Email Format").required("Email Is Required"),
  Password: yup.string().required("Password is required")
});

function Signup() {
  const signupStyle = {
    border: "3px solid blue",
    padding: "20px",
    borderRadius: "8px",
    maxWidth: "500px",
    margin: "auto",
    marginTop: "52px"
  };

  const hrStyle = {
    position: "relative",
    right: "12px",
    width: "430px",
    margin: "10px auto"
  };

  const formik = useFormik({
    initialValues,
    onSubmit: (values, { resetForm }) => {
      console.log("formdata", values);
      resetForm();
    },
    validationSchema
  });

  return (
    <div className="SIGNUP" style={signupStyle}>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <h2>Formik SIGN UP</h2>
          <label htmlFor="Fullname">Full Name </label>
          <input
            type="text"
            id="Fullname"
            name="Fullname"
            onChange={formik.handleChange}
            value={formik.values.Fullname}
          />
          <hr style={hrStyle} />
          {formik.errors.Fullname ? (
            <div className="error">{formik.errors.Fullname}</div>
          ) : null}
          <label htmlFor="Lastname">Last Name </label>
          <input
            type="text"
            id="Lastname"
            name="Lastname"
            onChange={formik.handleChange}
            value={formik.values.Lastname}
          />
          <hr style={hrStyle} />
          {formik.errors.Lastname ? (
            <div className="error">{formik.errors.Lastname}</div>
          ) : null}
          <label htmlFor="Email">Email </label>
          <input
            type="email"
            id="Email"
            name="Email"
            onChange={formik.handleChange}
            value={formik.values.Email}
          />
          <hr style={hrStyle} />
          {formik.errors.Email ? (
            <div className="error">{formik.errors.Email}</div>
          ) : null}
          <label htmlFor="Password">Password </label>
          <input
            type="Password"
            id="Password"
            name="Password"
            onChange={formik.handleChange}
            value={formik.values.Password}
          />
          <hr style={hrStyle} />
          {formik.errors.Password ? (
            <div className="error">{formik.errors.Password}</div>
          ) : null}
          <p className="para">
            Already a member? <Link to="./">Log in</Link>
          </p>
          <button className="btn-primary" type="submit">
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
