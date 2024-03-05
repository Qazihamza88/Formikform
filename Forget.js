import React from 'react'
import { useFormik } from "formik";
import * as yup from "yup";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const initialValues = {
  Email: "",
  Password: ""
};

const validationSchema = yup.object({
  Email: yup.string().email("Invalid Email Format").required("Email Is Required"),
  Password: yup.string().required("Password is required")
});

function Forget() {
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
  const btnStyle={
    color:'white',
    backgroundColor: '#007bff',
    borderColor: '#007bff',
    marginLeft:'10px'
  }

  const  onSubmit= (values, { resetForm }) => {
    console.log("formdata", values);
    resetForm();  
}
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  });

  return (
    <div className="SIGNUP" style={signupStyle}>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <h2>Formik Forget Password</h2>
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
         <button className="btn-primary1" type="submit">Enter
          </button>
           <Link to="./" style={btnStyle}>Login</Link>
        </div>
        
      </form>
    </div>
  );
}

export default Forget
