import React from "react";
import "./form.css"

const Form = () => {
  return (
    <>
     
     <div className="container-fluid bg">
     <div className="container mt-2 mb-4 ">
        <div className="row mt-5 mb-5">
          <div className="col-12">
            <p className="fs-1 fw-bold text-primary">Contact Us</p>
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-lg-4 col-md-6 p-3 text-start">
            <nav class="nav">
              <a class="nav-link link-dark ps-0 pt-2 pb-1" aria-current="page" href="#">
                <i class="fa-solid fa-location-dot pe-2"></i> 1215, Mapple Trade
                Centre,Ahmedabad 380052
              </a>
              <a class="nav-link link-dark ps-0 pt-2 pb-1" href="#">
                <i class="fa-solid fa-location-dot pe-2"></i>+91 81600 87371
              </a>
              <a class="nav-link link-dark ps-0 pt-2 pb-1" href="#">
                <i class="fa-solid fa-location-dot pe-2"></i>{" "}
                contact@praeclarumtech.com
              </a>
            </nav>
            <div className="d-flex pt-2">
                <p className=" bg-primary d-flex justify-content-center align-items-center" style={{width:"30px",height:"30px",borderRadius:"50%"}}>
                <i class="fa-brands fa-instagram fs-5 text-dark"></i>
                </p>
                <p className=" ms-4 bg-primary d-flex justify-content-center align-items-center" style={{width:"30px",height:"30px",borderRadius:"50%"}}>
                <i class="fa-brands fa-instagram fs-5 text-dark"></i>
                </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 p-3 ">
            <div className="row">
                <div className="col-12">
                    <input placeholder="First name*" className="w-100 bg-light border-0 p-2  fs-5 shadow" type="text" />
                </div>
                <div className="col-12 mt-4">
                    <input placeholder="last Name*" className="w-100 bg-light border-0 p-2  fs-5 shadow" type="text" />
                </div>
                <div className="col-12 mt-4">
                    <input placeholder="Email*" className="w-100 bg-light border-0 p-2  fs-5 shadow" type="text" />
                </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 p-3 ">
            <div className="row">
            <div className="col-12 ">
                <textarea placeholder="Your messge*" name="" id="" cols="30" rows="4"  className="w-100 bg-light border-0 p-2  fs-5 shadow"></textarea>
                </div>
                <div className="col-12 mt-2 text-md-start text-center ">
                <button className="btn btn-primary pe-3 ps-3 p-2 "> submite</button>
                </div>
            </div>
          </div>
        </div>
      </div>
     </div>
    </>
  );
};
export default Form;
