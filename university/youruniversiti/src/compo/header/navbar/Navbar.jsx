import React, { useContext, useEffect, useState } from 'react'
import Usecontaxt from '../../../store/Usecontaxt';
import Arr from './Arr';
const Navbars =()=>{
    const[value,setvalue]=useState("india")
    const{setmayvalue}=useContext(Usecontaxt);
    useEffect(()=>{
        setmayvalue(value)
        console.log(Arr)
    },[value])
    // const{myvalue}=useContext(Usecontaxt);
    return(
        
        <>
        <div className=" w-100 bg-transparent position-static z-2">
        <div className='container d-flex align-items-center justify-content-between p-3 flex-wrap'>
          <div className='btn btn-dark col-md-3 col-12'>{value.replaceAll("+"," ")} All University 💞💞</div>
            <ul className='btn btn-dark p-0 m-0 mt-3 mt-md-0   col-md-4 col-12 '>
                <li style={{listStyle:"none"}}>
                    <select  className="form-select" aria-label="Default select example" onChange={(e)=>setvalue(e.target.value)} value={value} name="" id="">
                    <option name="select" value={value}>Select Your Contry 👌</option>
                    {Arr.map((element)=>{
                        return(
                            <option style={{fontFamily:"Cinzel"}} className="p-1 " name="select" value={element.name.replaceAll(" ","+")}>{element.name}💕</option>
                        )
                    })};
                    </select>
                    </li>
            </ul>
        </div>
      </div>
        </>
    )
}
export default Navbars