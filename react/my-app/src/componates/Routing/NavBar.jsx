import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-0 ">
        <div className="container">
          <a
            className="navbar-brand text-white fs-1 font-weight-bold text-capitalize"
            href="/"
          >
            fayda <span className="text-info">bazar</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse m-auto" id="navbarNav">
            <ul className="navbar-nav m-auto d-flex  w-100 justify-content-around">
              <li className="nav-item ">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${isActive ? "text-primary" : "text-white"} nav-link `
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `${isActive ? "text-primary" : "text-white"} nav-link`
                  }
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/product"
                  className={({ isActive }) =>
                    `${isActive ? "text-primary" : "text-white"} nav-link`
                  }
                >
                  Product
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/business"
                  className={({ isActive }) =>
                    `${isActive ? "text-primary" : "text-white"} nav-link`
                  }
                >
                  Business plane
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/legal"
                  className={({ isActive }) =>
                    `${isActive ? "text-primary" : "text-white"} nav-link`
                  }
                >
                  Legal
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `${isActive ? "text-primary" : "text-white"} nav-link`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    `${isActive ? "text-primary" : "text-white"} nav-link`
                  }
                >
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    `${isActive ? "text-primary" : "text-white"} nav-link`
                  }
                >
                  Register
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
