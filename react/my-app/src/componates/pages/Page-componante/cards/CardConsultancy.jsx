import React  from "react";
import "./cardconsultancy.css"
const CardConsultancy = () => {
  
  return (
    <>
      <div className="container">
        <div className="row mt-5 mb-5 h-100 pt-md-5 pb-md-5">
          <div className="col-md-5 me-auto mt-3 mb-3">
            <img
              className="w-100 h-100"
              src="https://faydabazar.co.in/web/img/shaped-image-2.png"
              alt=""
            />
          </div>
          <div className="col-md-5 mt-3 mb-3">
            <div className="row align-items-center h-100">
              <div className="col-12">
                <h5 className="fs-4 fw-bold text-primary">Why Choose Us</h5>
                <h3 className="fs-1 fw-bold">Best Consultancy</h3>
              </div>
              <div className="col-12">
                <div className="row">
                  <div className="col-2">
                    <img
                      className="w-100 h-auto"
                      src="https://faydabazar.co.in/web/img/mision.png"
                      alt=""
                    />
                  </div>
                  <div className="col-10">
                    <h3>Our Mission</h3>
                    <p>
                      We are committed to providing our users with fast,
                      beneficial as well as reliable and comprehensive
                      information and enabling searches and transactions for all
                      products and services
                    </p>
                  </div>
                </div>
                <hr />
              </div>
              <div className="col-12">
                <div className="row">
                  <div className="col-2">
                    <img
                      className="w-100 h-auto"
                      src="https://faydabazar.co.in/web/img/vision.png"
                      alt=""
                    />
                  </div>
                  <div className="col-10">
                    <h3>Our vision</h3>
                    <p>
                      In India's digital era, this platform will give every
                      business a unique identity
                    </p>
                  </div>
                  <hr />
                </div>
              </div>
              <div className="col-12">
                <div className="row">
                  <div className="col-2">
                    <img
                      className="w-100 h-auto"
                      src="https://faydabazar.co.in/web/img/benefits.png"
                      alt=""
                    />
                  </div>
                  <div className="col-10">
                    <h3>Our Benefits</h3>
                    <p>
                      Do you want benefits? Then join us and we will give you
                      benefits on all the useful things in life
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CardConsultancy;
