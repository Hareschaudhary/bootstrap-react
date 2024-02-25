import React from 'react'
import Slider from '../r-componats/Slider';
import Card from './Page-componante/Card';

const About =()=>{
    return(
        <>

        <Slider
         itemOne="https://img.freepik.com/free-psd/action-video-game-3d-text-style-effect_1389-1572.jpg?w=1060&t=st=1708844870~exp=1708845470~hmac=bd7ebe6f2598c41737554126ab5a85cf44aa460c703034d702f697d8e7f2a17d"
         itemTwo="https://img.freepik.com/free-psd/boys-text-style-effect_136295-693.jpg?w=1060&t=st=1708845929~exp=1708846529~hmac=7b4227fa0137fec03c27a8d1be682e9d6a457589c92027ab71d531624306ba01"
         itemThree="https://img.freepik.com/free-psd/action-video-game-3d-text-style-effect_1389-1572.jpg?w=1060&t=st=1708844870~exp=1708845470~hmac=bd7ebe6f2598c41737554126ab5a85cf44aa460c703034d702f697d8e7f2a17d"
         />
        <Card/>
        </>
    )
}

export default About;