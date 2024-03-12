import React from 'react'
import "./cardtwo.css"

const CardTwo =()=>{
    return(
        <>
        <div className="container-fluid">
             <div className="row">
             <div className="row justify-content-center  text-center pt-5 pb-4 ">
                <div  className="col-12 fs-1 fw-bolder  lh-1 ">
                    <p style={{letterSpacing:"3px"}}>
                    Testimonials
                    </p>
                </div>
            </div>
             </div>
             <div className="row justify-content-evenly">
             <div  className="col-md-5 ms-3 me-3 mt-3 mb-3  p-3 rounded-3 shadow">
                    <div> 
                        <p style={{borderRadius:"10px"}} className='bg-light p-4 '>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo beatae est, iste dignissimos enim delectus sit maiores, accusantium nostrum et totam harum molestiae a fugiat officiis minus, illo quis possimus.
                    </p>
                    <div className="d-flex justify-content-start m-0 p-0 position-relative">
                        <span className='rotet position-absolute bg-light ms-5 shadow'></span>
                    </div></div>
                    <div>
                        <p className="ps-5 pt-2 fw-bold">Buddi Bailery</p>
                        <p className="ms-2 ps-5 text-bg-info  ">Ceo , Zo Financial Llic</p>
                    </div>
                </div>
                <div  className="col-md-5 ms-3 me-3 mt-3 mb-3 p-3 rounded-3 shadow">
                    <div> 
                        <p style={{borderRadius:"10px"}} className='bg-light p-4 '>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo beatae est, iste dignissimos enim delectus sit maiores, accusantium nostrum et totam harum molestiae a fugiat officiis minus, illo quis possimus.
                    </p>
                    <div className="d-flex justify-content-start m-0 p-0 position-relative">
                        <span className='rotet position-absolute bg-light ms-5 shadow'></span>
                    </div></div>
                    <div>
                        <p className="ps-5 pt-2 fw-bold">Buddi Bailery</p>
                        <p className="ms-2 ps-5 text-bg-info  ">Ceo , Zo Financial Llic</p>
                    </div>
                </div>
             </div>
        </div>
        </>
    )
}

export default CardTwo