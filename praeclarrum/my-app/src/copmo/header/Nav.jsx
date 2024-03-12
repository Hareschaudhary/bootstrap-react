import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./nav.css";
const Navs = () => {
  const [company, setcompany] = useState(false);
  const [contact, setcontact] = useState(false);
  return (
    <>
      <div className="bg-primary d-none d-lg-block">
        <div className="container p-3 ">
          <div className="row">
            <div className="col-12 d-flex justify-content-between align-items-center text-center">
              <p class="p-0 m-0">
                <i class="fa-solid fa-location-dot"></i>
                <span>1215, Mapple Trade Centre, Ahmedabad 380052</span>
              </p>
              <p class="p-0 m-0">
                <i class="fa-solid fa-location-dot"></i>
                <span> contact@praeclarumtech.com </span>
              </p>
              <p class="p-0 m-0">
                <i class="fa-solid fa-location-dot"></i>
                <span>91+9313967317</span>
              </p>
              <select class="p-0 m-0 pt-2 pb-2 btn btn-dark" name="" id="">
                <option value="">india</option>
                <option value="">pakistan</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <nav
        style={{ zIndex: "3" }}
        class="navbar navbar-expand-lg navbar-light bg-light shadow"
      >
        <div class="container">
        <img className="h me-3 d-none d-lg-block" style={{width:"50px",height:"50px"}} src="https://cdn.pixabay.com/photo/2012/04/25/00/03/dove-41260_960_720.png" alt="" />
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${
                isActive ? "text-primary" : " text-primary"
              } navbar-brand fw-bold fs-2`
            }
          >
            praeclarum <span className="text-info">tech</span>
          </NavLink>
          <img className="" style={{width:"50px",height:"50px"}} src="https://cdn.pixabay.com/photo/2012/04/25/00/03/dove-41260_960_720.png" alt="" />
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarNav">
            <ul class="navbar-nav w-100 d-flex  justify-content-end">
              <li class="nav-item fs-6 fw-bold p-2">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${isActive ? "text-primary" : " text-dark"} nav-link`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li
                onMouseEnter={() => setcompany(true)}
                onMouseLeave={() => setcompany(false)}
                class="nav-item fs-6 fw-bold p-2"
              >
                <NavLink
                  to="company"
                  className={({ isActive }) =>
                    `${isActive ? "text-primary" : " text-dark"} nav-link`
                  }
                >
                  Company
                </NavLink>
                {company && (
                  <div className="m-0 p-0 position-absolute  bg-white p-2">
                    <a href="" id="me" className=" nav-link ">
                      About us
                    </a>
                  </div>
                )}
              </li>
              <li
                onMouseEnter={() => setcontact(true)}
                onMouseLeave={() => setcontact(false)}
                class="nav-item fs-6 fw-bold p-2"
              >
                <NavLink
                  to="/service"
                  className={({ isActive }) =>
                    `${isActive ? "text-primary" : " text-dark"} nav-link`
                  }
                >
                  Service
                </NavLink>
                {contact && (
                  <div className="position-absolute p-0 bg-white m-0">
                    <Link id="me" className="  nav-link ms-2 me-2 " to="webdevlopment">
                    Web Devlopment
                    </Link>
                    <Link id="me" className="  nav-link ms-2 me-2 " to="mobileappdevlopment">
                    Mobile app devlopment
                    </Link>
                    <Link id="me" className="  nav-link ms-2 me-2 " to="uiuxdesign">
                    ui-ux design
                    </Link>
                    <Link id="me" className="  nav-link ms-2 me-2 " to="devopsservice">
                    devops service
                    </Link>
                  </div>
                )}
              </li>
              <li class="nav-item fs-6 fw-bold p-2">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `${isActive ? "text-primary" : " text-dark"} nav-link`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navs;
