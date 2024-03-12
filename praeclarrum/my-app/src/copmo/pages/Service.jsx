import React from "react";
import Carddata from "./servicepagecompo/Carddata";
import Card from "./servicepagecompo/Card";

const Service = () => {
  return (
    <>
      <div className="container mt-5 mb-5">
      <div className="row">
            <div className="col-12">
                <p className="fs-1 fw-bold text-primary">Service</p>
            </div>
        </div>
        <div className="row justify-content-between">
            {
          Carddata.map((element)=>{
            return <Card pera={element.pera} heading={element.heading} img={element.img}  />
          })
        }
        </div>
      </div>
    </>
  );
};

export default Service;
