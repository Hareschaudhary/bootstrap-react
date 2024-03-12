import React, { useState } from 'react'
import Usecontaxt from './Usecontaxt'

const UsecontaxtProvider =({children})=>{
const[myvalue,setmayvalue]=useState()
    return(
        <>
        <Usecontaxt.Provider value={{myvalue,setmayvalue}}>
            {children}
        </Usecontaxt.Provider>
        </>
    )
}
export default UsecontaxtProvider