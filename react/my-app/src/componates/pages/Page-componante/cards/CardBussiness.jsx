import React from "react";
import { NavLink } from "react-router-dom";
import "./cardbussiness.css"
const CardBussiness = () => {
  return (
    <>
      <div >
        <div className="container ">
          <div className="row mt-4 mb-4">
            <div className="col-12 mt-4 mb-4">
              <h3 className="text-center fs-1 text-primary ">Our Product</h3>
              <h3 className="text-center fs-2">Best Business Product</h3>
            </div>
            <div className="col-md-6 mt-4 mb-4  ">
              <div className="row flex-column ">
                <div className="col-md-10 col-sm-12 me-auto  p-0 m-0">
                  <img
                    className="w-100 h-auto"
                    src="https://faydabazar.co.in/web/img/FaydaBazar_Designe_05.jpg"
                    alt=""
                  />
                </div>
                <div  className=" col-md-10 col-sm-12 me-auto p-0 m-0 shadow-lg card-one-link">
                  <NavLink
                    to="/product"
                    className={({ isActive }) =>
                      `${
                        isActive ? "text-primary" : "text-dark"
                      }  nav-link text-center fs-4 link-primary fw-bold`
                    }
                  >
                    Product
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-4 mb-4 ">
              <div className="row flex-column">
                <div className="col-md-10 col-sm-12 ms-auto  p-0 m-0 ">
                  <img
                  src="https://faydabazar.co.in/web/img/FaydaBazar_Designe_04.jpg"
                    className="w-100 h-auto link-dark fw-bold"
                    alt=""
                  />
                </div>
                <div className="col-md-10 col-sm-12 ms-auto  p-0 m-0 card-link shadow-lg">
                  <NavLink
                    to="/product"
                    className={({ isActive }) =>
                      `${
                        isActive ? "text-primary" : "text-dark"
                      }  nav-link text-center fs-4 link-dark fw-bold `
                    }
                  >
                    Services
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CardBussiness;
