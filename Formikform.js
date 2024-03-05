import React from 'react'
import { Formik , useFormik } from 'formik'
import { Link } from 'react-router-dom';
const initialValues = {
  name: "",
  email: "",
  channel: ""
};

const onSubmit = (values, { resetForm }) => {
  console.log('formdata', values);
  resetForm();
};

 const validate=values =>{
  let errors={}
  if(!values.name){
    errors.name="Name Required"
  }
  if(!values.email){
    errors.email="Email Required";
  }
  else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)){
    errors.email="Invalid Email";
  }
  
  if(!values.channel){
    errors.channel="Channel Required"
  }
   return errors
}
function Formikform() {
   const formik= useFormik({
    initialValues,
    //  onSubmit: values => {
    //   console.log("formdata", values);
    //   formik.resetForm();
    // },
    onSubmit,
    validate,
    
  })
  const signupStyle = {
    border: '3px solid blue',
    padding: '20px',
    borderRadius: '8px',
    maxWidth: '500px',
    margin: 'auto',
    marginTop: '52px',
  }
  const btnStyle={
    color:'white',
    backgroundColor: '#007bff',
    borderColor: '#007bff'
  }
   console.log("forms error ",formik.errors  )
  return (
    <div style={signupStyle}>
       <Formik>
         <form onSubmit={formik.handleSubmit}>
           <h2>Formik Login </h2>
          <div className="form-control">
                <label htmlFor="Fullname">Fullname</label>
                <input type="text"
                 id="name"
                 name="name"
                 onChange={formik.handleChange}
                 value={formik.values.name}
                 />
                 {formik.errors.name ?<div className="error">{formik.errors.name}</div> : null}
                 </div>
                 <div className="form-control">
                <label htmlFor="email">Email Address</label>
                <input type="email"
                 id="email"
                 name="email" className='custom-input email'
                 onChange={formik.handleChange}
                 value={formik.values.email}
                 />
                 {formik.errors.email ?<div className="error">{formik.errors.email}</div> : null}
                 </div>
                 <div className="form-control">
                <label htmlFor="Channel">Channel Name</label>
                <input type="text"
                id="channel" 
                name="channel"
                onChange={formik.handleChange}
                value={formik.values.channel}/>
                {formik.errors.channel ?<div className="error">{formik.errors.channel}</div> : null} 
                </div>
                <button className='btn-primary1' type='submit'>Submit
                </button>
                <button className='btn-primary2' type='submit'>
                <Link to="/signup" style={{btnStyle,color:'white'  }}>Signup</Link>
                <Link to="/forget" style={{btnStyle,marginLeft:'30px', color:'white'}}>Forget Password</Link>
                </button>
         </form>
        </Formik>      
    </div>
  )
}

export default Formikform
