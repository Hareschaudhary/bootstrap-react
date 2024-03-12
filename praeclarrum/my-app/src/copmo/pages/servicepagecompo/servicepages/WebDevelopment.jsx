import React from "react";
import Mypage from "./servicecompo/Mypage";
import {Link} from "react-router-dom"

const WebDevlopment = () => {
  return (
    <>
      <Mypage img="https://praeclarumtech.com/wp-content/uploads/2016/01/burst-kUqqaRjJuw0-unsplash-1-1536x1024.jpg" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 ">
            <ul className="nav flex-column">
              <li className=" nav-item  pt-3 pb-3">
                <h5 className="fs-1 fw-bolder font-monospace">Web Development</h5>
              </li>
              <li className=" nav-item">
                <p>
                  Web applications offer many advantages, whether designed for
                  internal use or as a B2B or B2C solution. Benefits include:
                </p>
              </li>
            </ul>
            <ul
              style={{ listStyleType: "square", listStyle: "outside" }}
              className="nav flex-column ps-3"
            >
              <li className=" nav-item ">
                <p>Anytime, anywhere access for application users</p>
              </li>
              <li className=" nav-item ">
                <p>Improved scalability</p>
              </li>
              <li className=" nav-item ">
                <p>Improved business flexibility</p>
              </li>
              <li className=" nav-item ">
                <p>Improved operational productivity</p>
              </li>
              <li className=" nav-item ">
                <p>
                  Solutions are easier to deploy and maintain than their desktop
                  counterparts
                </p>
              </li>
              <li className=" nav-item ">
                <p>Reduced costs for providing services to clients.</p>
              </li>
              <li className=" nav-item ">
                <p>A rapid return on investment.</p>
              </li>
            </ul>
            <ul className="nav flex-column">
              <li className="nav-item">
                <p>
                  Our professional web development service provides continual
                  care for your web products to keep them up to date. We ensure
                  robust security, backups, and software updates as well as
                  embed the latest functionalities. Our professional developers
                  will implement your business vision into a tailored web
                  solution with a unique combo of technologies and features.
                </p>
              </li>
              <li className="nav-item mt-3 mb-2">
                <p>
                We are using the following technology stacks for development.
                </p>
              </li>
            </ul>
            <ul
              style={{ listStyleType: "square", listStyle: "outside" }}
              className="nav flex-column ps-3"
            >
              <li className=" nav-item ">
                <p>ASP.NET core</p>
              </li>
              <li className=" nav-item ">
                <p>Java</p>
              </li>
              <li className=" nav-item ">
                <p>PHP</p>
              </li>
              <li className=" nav-item ">
                <p>React.JS</p>
              </li>
              <li className=" nav-item ">
                <p>
                Angular
                </p>
              </li>
              <li className=" nav-item ">
                <p>Python</p>
              </li>
              <li className=" nav-item "> <p>Laravel</p></li>
              <li className=" nav-item "> <p>Drupal</p></li>
              <li className=" nav-item "> <p>WordPress</p></li>
              <li className=" nav-item "> <p>Magento</p></li>
              <li className=" nav-item "> <p>Javascript</p></li>
              <li className=" nav-item "> <p>Serverless Architecture</p></li>
            </ul>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <p className=" border-start border-4 border-primary p-3 bg-light shadow">
                    Our professional development service provides continual care for your web products to keep them up to date. We ensure robust security, backups, and software updates as well as embed the latest functionalities. Our professional developers will implement your business vision into a tailored solution with a unique combo of technologies and features.
                    </p>
                </li>
            </ul>
          </div>
        </div>
        <div className="row">
        <div className="col-lg-4 d-block d-md-none ">
            <div id="list-example" class="list-group  fs-4 shadow">
              <Link
               to="/webdevlopment"
               className="list-group-item list-group-item-action list-group-item-dark"
               >
                web devlopment
               </Link>
               <Link
               to="/mobileappdevlopment"
               className="list-group-item list-group-item-action list-group-item-dark"
               >
               mobile app devlopment
               </Link>
               <Link
               to="/uiuxdesign"
               className="list-group-item list-group-item-action list-group-item-dark"
               >
               ui ux design
               </Link>
               <Link
               to="/devopsservice"
               className="list-group-item list-group-item-action list-group-item-dark"
               >
               dev ops service
               </Link>
            </div>
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

export default WebDevlopment;
