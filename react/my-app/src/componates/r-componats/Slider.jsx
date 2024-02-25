import React from "react";

const Slider = ({itemOne,itemTwo,itemThree}) => {
  return (
    <>
      <div
        id="carouselExampleInterval"
        className="carousel slide "
        data-bs-ride="carousel"
        style={{height:"100vh",overflow:"hidden"}}
      >
        <div className="carousel-inner h-100">
          <div    className="carousel-item active h-100 " data-bs-interval={3000}>
            <img
              src={itemOne}
              className="d-block w-100 h-100"
              alt="..."
            />
          </div>
          <div className="carousel-item" data-bs-interval={3000}>
            <img
              src={itemTwo}
              className="d-block w-100 h-100"
              alt="..."
            />
          </div>
          <div className="carousel-item" data-bs-interval={3000}>
            <img
              src={itemThree}
              className="d-block w-100 h-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Slider;
