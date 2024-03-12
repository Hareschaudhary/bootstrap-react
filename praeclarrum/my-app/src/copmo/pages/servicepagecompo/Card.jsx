import React, { useState } from "react";

const Card = ({pera,heading,img}) => {
    const[card,setcard]=useState(false)
  return (
    <>
      <div className="col-lg-3 col-md-4 m-2">
        <div onMouseEnter={()=>setcard(true)} onMouseLeave={()=>setcard(false)}  class="card m-auto" style={{width: "18rem"}}>
           <div className="position-relative">
           {
            card &&<div style={{backgroundColor:"rgba(255, 255, 255, 0.308)"}} className="w-100 h-100  position-absolute d-flex justify-content-center align-items-center">
            <i class="fa-solid fa-plus fs-1 text-white"></i>
            </div>
           }
          <img src={img} class="card-img-top" alt="..." />
           </div>
          <div class="card-body">
            <h5 class="card-title">
                {heading}
            </h5>
            <p class="card-text">
                {pera}
            </p>
            <a href="#" class="btn btn-primary">
            <i class="fa-solid fa-arrow-right"></i> Read More
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
