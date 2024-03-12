import React, { useContext, useEffect, useState } from 'react'
import Accordions from './Accordian'
import Navbars from '../header/navbar/Navbar'
import Usecontaxt from '../../store/Usecontaxt'
import "./api.css"
const Api =()=>{
   const{myvalue}=useContext(Usecontaxt)
     const api =`http://universities.hipolabs.com/search?country=${myvalue}`
     const [mydata,setmydata]=useState([ ])
     const [loader,setloader]=useState(true)
     const rest =async (url)=>{
        try{
         setloader(true)
          const data =await fetch(url);
          const res =await data.json();
          setmydata(res)
          setloader(false)
        }catch(err){
            console.log(err)
        }
     }
     useEffect(()=>{
        rest(api);
        console.log(loader)
      //   console.log(mydata)
     },[api])
    return(
        <>
        <Navbars/>
        {
         loader && <div style={{height:"3px",overflow:"hidden"}} className='p-0 m-0 bg-info w-100 position-relative' >
            <div style={{height:"3px",width:"50px",backgroundColor:"red",position:"absolute",animationName:"left",animationDuration:"1.5s",animationIterationCount:"infinite"}}></div>
         </div>
        }
        <Accordions data={mydata}/>
     </>
    )
}
export default Api