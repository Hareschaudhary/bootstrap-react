import React from "react";
import {useFormik} from "formik"
const Form = () => {
   const{values,handleSubmit,handleChange}= useFormik({
        initialValues:{
            email:"",
            password:"",
        },
        onSubmit:(values)=>{
         console.log(values)
            console.log(values)
         alert("form submited")
        }
    })
  return (
    <>
    <div className="container pt-4 pb-4">
    <form onSubmit={handleSubmit} className="mt-4 mb-4 " >
        <div class="mb-3">
          <label htmlFor="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label htmlFor="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
    </>
  );
};
export default Form;
