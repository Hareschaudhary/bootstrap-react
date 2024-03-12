import React from "react";
import "./slider.css";
const Slider = () => {
  return (
    <>
      <div
        id="carouselExampleInterval"
        class="carousel slide mt-1 "
        data-bs-ride="carousel"
        style={{ zIndex: "1" }}
      >
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="5000">
            <div
              style={{ height: "100vh" }}
              className="slide-one d-block w-100 flex-column  justify-content-center text-center d-flex align-items-center "
            >
              <h3 className="animate-charcter fs-1 fw-bolder order-1">
                Haresh Chaudhary
              </h3>
              <img className=" order-0 " style={{width:"150px",height:'150px' }} src="https://cdn.pixabay.com/photo/2016/10/29/23/53/sugar-skull-1782019_1280.png" alt="" />
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="5000">
            <div
              style={{ height: "100vh" }}
              className="slide-one d-block w-100  justify-content-center text-center d-flex align-items-center "
            >
              <div class="content ">
                <h2>Haresh</h2>
                <h2>Haresh</h2>
              </div>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="5000">
            <div
              style={{ height: "100vh" }}
              className="slide-one d-block w-100  justify-content-center text-center d-flex align-items-center "
            >
              <div class="logo-container">
                <h1 id="page-logo">LOGO</h1>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
          // style={{zIndex:"5"}}
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Slider;
