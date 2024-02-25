import React from 'react'
import Slider from "../r-componats/Slider"
import CardBussiness from './Page-componante/cards/CardBussiness';
const Product =()=>{
    return(
        <>
        <Slider
        itemOne="https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        itemTwo="https://media.istockphoto.com/id/1435491075/photo/business-logistics-technology-concept.webp?s=2048x2048&w=is&k=20&c=v5zVKSJ42S12ctUZHEIxxJhwK8Qda06A1y1XxGu7CG0="
        itemThree="https://media.istockphoto.com/id/1435491075/photo/business-logistics-technology-concept.webp?s=2048x2048&w=is&k=20&c=v5zVKSJ42S12ctUZHEIxxJhwK8Qda06A1y1XxGu7CG0="
        />
        <CardBussiness/>
        </>
    )
}

export default Product;