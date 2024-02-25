import React from 'react'
import Slider from './Page-componante/slider/Slider';
import Card from "./Page-componante/Card"
import CardBussiness from './Page-componante/cards/CardBussiness';
import CardConsultancy from './Page-componante/cards/CardConsultancy'
import  CardText from "./Page-componante/cards/CardText"
const Home =()=>{
    return(
        <>
        {/* <h3>this is home page</h3> */}
        <Slider/>
        <Card/>
        <CardBussiness/>
        <CardConsultancy/>
        <CardText/>
        </>
    )
}

export default Home;