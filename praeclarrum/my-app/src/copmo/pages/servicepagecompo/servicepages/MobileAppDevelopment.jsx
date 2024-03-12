import React from "react";
import Mypage from "./servicecompo/Mypage";

const MobileAppDevelopment = () => {
  return (
    <>
      <Mypage img="https://praeclarumtech.com/wp-content/uploads/2023/05/app-development-1536x1024.png" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <ul className="nev flex-column list-unstyled">
              <li className=" nav-item pt-2 pb-2">
                <p className="fs-2 fw-bold">Mobile App Development</p>
              </li>
              <li className=" nav-item">
                <p>
                  At Praeclarum we offers end-to-end mobile app development
                  services to help businesses stay ahead of the curve. Our team
                  of experienced professionals have the expertise to create and
                  deploy custom-made, feature-rich mobile applications for
                  virtually any platform.
                </p>
              </li>
              <li className=" nav-item">
                <p>
                  We understand that for any business, a mobile app is a
                  powerful tool that can help to reach potential customers and
                  provide them with an enhanced mobile experience. Our experts
                  will help you create a well-designed and intuitive mobile app
                  that is tailored to the needs of your business.
                </p>
              </li>
              <li className=" nav-item">
                <p className=" border-start border-5 border-primary p-3 bg-light mt-4 shadow">
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

export default MobileAppDevelopment;
