import React from 'react'
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Business from "../pages/Business"
import Product from "../pages/Product"
import Legal from "../pages/Legal"
import Login from "../pages/Login"
import Register from "../pages/Register"
import NavBar from './NavBar'
import Header from './Header'

const Routese =()=>{
    return(
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Header/>}>
        <Route index element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path='/business' element={<Business/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/legal' element={<Legal/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>

        </Route>
    </Routes>
    </BrowserRouter>
    )
}

export default Routese