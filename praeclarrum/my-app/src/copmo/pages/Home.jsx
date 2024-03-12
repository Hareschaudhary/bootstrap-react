import React from 'react'
import Sliders from "./homapage-compo/Slider"
import Card from "./homapage-compo/Card"
import Carddata from './homapage-compo/Carddata';
import CardTwo from './homapage-compo/CardTwo';
import Slider from "../slider/Slider"
import Form from './homapage-compo/Form';
import "./home.css"

const Home =()=>{
    return(
        <>
        <Slider/>
        <div className="container-fluid">
            <div className="row justify-content-center  text-center pt-5 pb-4 ">
                <div  className="col-12 fs-1 fw-bolder  lh-1 ">
                    <p className='animate-charcter' style={{letterSpacing:"3px"}}>
                    Industries
                    </p>
                </div>
            </div>
        <div className="row   justify-content-evenly">
            {
                Carddata.map((elment)=>{
                    return( <Card pera={elment.pera} heading={elment.heading}/>)
                })
            }
        </div>
        </div>
          <CardTwo/>
          <Sliders/>
          <Form/>
        </>
    )
};

export default Home