import React, { useState } from "react";
import "./card.css";
const Card = ({pera,heading}) => {
  let [left, setleft] = useState();
  return (
    <>
      <div
        className="  p-3 card col-sm-4 col-lg-3 m-md-5 m-sm-3 m-2  "
        onMouseEnter={() => setleft(50)}
        onMouseLeave={() => setleft(0)}
        style={{minWidth:"320px"}}
      >
        <div className="row">
          <div className="col-3  position-relative">
            <img
              style={{
                height: "60px",
                width: "60px",
                borderRadius: "50%",
                position: "absolute",
                top: `${left}px`,
              }}
              src="https://tse1.mm.bing.net/th?id=OIP.stWAWw2BWM1jDIOmXQhPqAHaE2&pid=Api&P=0&h=220"
              alt=""
            />
          </div>
          <div className="col-9 ">
            <p className="fs-5 fw-bold">{heading}</p>
            <p>
              {
                pera
              }
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
