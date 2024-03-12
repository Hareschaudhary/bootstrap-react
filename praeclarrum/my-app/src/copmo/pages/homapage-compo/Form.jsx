import React from "react";
import "./form.css"
const Form = () => {
  return (
    <>
      
      <form  className="mt-5 mb-5  p-5 img">
      <div className="container mt-4 mb-4">
        <div className="row">
          <div className="col-md-4 fs-1 text-white">
            <p>Request A Call Back.</p>
          </div>
          <div className="col-md-8">
            <div className="row">
                <div className="col-12 fs-5 text-white fw-bold">
                    <p>I would like to discuss:</p>
                </div>
                <div className="col-md-6 mt-2 mb-2">
                   <select className="w-100 btn  bg-white p-2" name="" id="">
                    <option value="">Business opportunity</option>
                    <option value="">Business opportunity</option>
                    <option value="">Business opportunity</option>
                   </select>
                </div>
                <div className="col-md-6 mt-2 mb-2">
                    <input placeholder="first-name" className="w-100 btn  bg-white p-2" type="text" />
                </div>
                <div className="col-md-6 mt-2 mb-2">
                    <input placeholder="last-name" className="w-100 btn  bg-white p-2" type="text" />
                </div>
                <div className="col-md-6 mt-2 mb-2 text-md-start text-center">
                    <button className="btn btn-outline-info fs-5 ">submite</button>
                </div>
            </div>
          </div>
        </div>
      </div>
      </form>
    </>
  );
};

export default Form;
