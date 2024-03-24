import React, { useState, useEffect, useContext } from "react";
import datas from "../../../data/services.json";
import Usecontaxt from "../../../Store.jsx/Usecontaxt";

function Services() {

  const { service } = useContext(Usecontaxt);
  return (
    <div
      className="sec-box data section-padding bord-thin-bottom"
      id="services"
    >
      <div className="sec-head mb-80 wow fadeInUp">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <h6 className="sub-title opacity-7 mb-15">Our Services</h6>
            <h3>
              Turn Information{" "}
              <span className="main-color">Into Actionable</span> Insights
            </h3>
          </div>
        </div>
      </div>
      <div className="row">
        {service.map((item, index) => (
          <div key={index} className="col-md-6">
            <div className="item mb-40 wow fadeIn" data-wow-delay=".2s">
              <span className="icon-img-70 mb-30 opacity-7">
                <img src={item.image.url} alt="" />
              </span>
              <h6 className="text-u ls1 mb-15">{item.name}</h6>
              <p>{item.desc}</p>
              <div className="bord-color"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
