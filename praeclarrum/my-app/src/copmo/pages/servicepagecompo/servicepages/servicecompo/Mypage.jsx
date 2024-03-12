import React from "react";
import {Link} from "react-router-dom"
const Mypage = ({img}) => {
  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-lg-8 ">
            <img
              src={img}
              alt=""
              className="w-100 rounded-1 shadow"
            />
          </div>
          <div className="col-lg-4 d-none d-lg-block">
            <div id="list-example" class="list-group w-100 fs-4">
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
    </>
  );
};

export default Mypage;
