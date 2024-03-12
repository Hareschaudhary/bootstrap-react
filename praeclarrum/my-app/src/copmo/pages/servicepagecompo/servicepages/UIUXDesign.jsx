import React from "react";
import Mypage from "./servicecompo/Mypage";

const UIUXDesign = () => {
  return (
    <>
      <Mypage img="https://praeclarumtech.com/wp-content/uploads/2023/05/ui-ux-1536x1024.png" />
      <div className="container mt-3 mb-3">
        <div className="row">
          <div className="col-lg-8">
            <ul className="nav flex-column list-unstyled">
              <li className="  nav-item">
                <p className="fs-2 pt-3 pb-3">UI/UX Design</p>
              </li>
              <li className="  nav-item">
                <p>
                  UI design focuses on the visual elements of a digital product,
                  such as layout, color scheme, typography, and iconography. It
                  aims to create a visually appealing interface that is easy to
                  use and intuitive for the user. We are specialized in creating
                  beautiful and smooth UI/UX designs that provide better user
                  experience by incorporating effective collaboration,
                  streamlined projects which strive for better results.
                </p>
              </li>
              <li className="  nav-item">
                <p>UX Consulting</p>
              </li>
              <li className="  nav-item">
                <p>
                  Using a Strategy, we define your product’s best user
                  experience.
                </p>
              </li>
            </ul>
            <ul
              className="nav flex-column ps-3"
              style={{ listStyleType: "square", listStyle: "outside" }}
            >
              <li className="nav-item">
                <p>UX Research</p>
              </li>
              <li className="nav-item">
                <p>UX Audit Insight</p>
              </li>
              <li className="nav-item">
                <p>Insight Workshop</p>
              </li>
              <li className="nav-item">
                <p>Idea Validation</p>
              </li>
              <li className="nav-item">
                <p>Service Design</p>
              </li>
            </ul>
            <ul className="nav flex-column">
              <li className="nev-item fs3">
                <p>UI Development</p>
              </li>
              <li className="nev-item fs3">
                <p>
                  We help our clients launch across numerous platforms and
                  devices in the fastest and most reliable way possible.
                </p>
              </li>
            </ul>
            <ul
              style={{ listStyleType: "square", listStyle: "outside" }}
              className="nav flex-column ps-3"
            >
              <li className="nav-item">
                <p>Web app development</p>
              </li>
              <li className="nav-item">
                <p>Mobile app development</p>
              </li>
              <li className="nav-item">
                <p>Website development</p>
              </li>
              <li className="nav-item">
                <p>E-commerce development</p>
              </li>
              <li className="nav-item">
                <p>Cross platform application development.</p>
              </li>
            </ul>
            <ul className="nav flex-column">
              <li className="nav-item mt-3">
                <p className="p-3 border-start border-4 border-primary bg-light shadow">
                  Our professional development service provides continual care
                  for your web products to keep them up to date. We ensure
                  robust security, backups, and software updates as well as
                  embed the latest functionalities. Our professional developers
                  will implement your business vision into a tailored solution
                  with a unique combo of technologies and features.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-info mt-3">
      <div className="container">
        <div className="row pt-3 pb-3  text-white align-items-center ">
               <div className="col-md-8 fs-4">
                <p>
                Looking for a First-Class Business Plan Consultant?
                </p>
               </div>
               <div className="col-md-4 text-center text-md-end">
                <div className="btn btn-warning">Contact Us</div>
               </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default UIUXDesign;
