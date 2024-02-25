import React from "react";
import "./slider.css";
const Slider = () => {
  let i = 1;
  let ii = 1;

  function next(e) {
    e[1].style.left = `${i * -100}%`;
    console.log(e.length);
    i++;
    if (i == e.length) {
      i = 0;
    }
  }

  function prev(e) {
    if (ii <= 0) {
      ii = e.length;
    }
    ii--;
    e[1].style.left = `${ii * -100}%`;
    console.log(e.length);
  }
  
  return (
    <>
      <div className="slider  position-relative">
        <button
          onClick={ (e) => prev(e.target.parentNode.childNodes)}
          className="btn z-1 ms-sm-5 top-50 btn-outline-secondary position-absolute "
        >
          Prev
        </button>
        <div className="slides position-absolute">
          <div className="slide slide-one">
             <div className="row h-100 align-items-center justify-content-center text-center">
             <div className="col-12">
             <p  className="display-3 fw-bold text-white item-one ">
                Digital <span className="text-warning">merketing</span> Agency
              </p>
              <p className="display-2 fw-bold text-white  item-two ">
              Helping your get your sales
              </p>
              <p className="fs-1 w-75 m-auto d-sm-none d-md-block  text-white  item-three">
              We grow the business of all types of merchants by doing great marketing at low cost through this platform              
              </p>
              <button className="btn btn-primary mt-2">Get started</button>
             </div>
             </div>
          </div>
          <div className="slide slide-two">
          <div className="row h-100 align-items-center justify-content-center text-center">
             <div className="col-12">
             <p  className="display-3 fw-bold text-white item-one ">
                Digital <span className="text-warning">merketing</span> Agency
              </p>
              <p className="display-2 fw-bold text-white  item-two ">
              Helping your get your sales
              </p>
              <p className="fs-1 w-75 m-auto d-sm-none d-md-block  text-white  item-three">
              We grow the business of all types of merchants by doing great marketing at low cost through this platform              
              </p>
              <button className="btn btn-primary mt-2">Get started</button>
             </div>
             </div>
          </div>
          <div className="slide slide-three">
          <div className="row h-100 align-items-center justify-content-center text-center">
             <div className="col-12">
             <p  className="display-3 fw-bold text-white item-one ">
                Digital <span className="text-warning">merketing</span> Agency
              </p>
              <p className="display-2 fw-bold text-white  item-two ">
              Helping your get your sales
              </p>
              <p className="fs-1 w-75 m-auto d-sm-none d-md-block  text-white  item-three">
              We grow the business of all types of merchants by doing great marketing at low cost through this platform              
              </p>
              <button className="btn btn-primary mt-2">Get started</button>
             </div>
             </div>
          </div>
        </div>
        <button
          onClick={(e) => next(e.target.parentNode.childNodes)}
          className="btn z-1 me-sm-5 top-50 end-0  btn-outline-secondary position-absolute "
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Slider;
