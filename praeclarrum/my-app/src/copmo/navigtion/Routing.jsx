import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "../pages/Home"
import Company from "../pages/Company"
import Contact from "../pages/Contact"
import Service from "../pages/Service"
import Header from './Header';
import WebDevlopment from "../pages/servicepagecompo/servicepages/WebDevelopment"
import MobileAppDevelopment from "../pages/servicepagecompo/servicepages/MobileAppDevelopment"
import UIUXDesign from "../pages/servicepagecompo/servicepages/UIUXDesign"
import DevOpsServices from "../pages/servicepagecompo/servicepages/DevOpsServices"
const Routing =()=>{
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Header/>}>
            <Route index element={<Home/>}/>
            <Route path='/company' element={<Company/>}/>
            <Route path='/contact'  index element={<Contact/>}/>
            <Route path='/service'  element={<Service/>}/>
             <Route path='webdevlopment' element={<WebDevlopment/>}/>
             <Route path='mobileappdevlopment' element={<MobileAppDevelopment/>}/>
             <Route path='uiuxdesign' element={<UIUXDesign/>}/>
             <Route path='devopsservice' element={<DevOpsServices/>}/>
            </Route>
        </Routes>
        </BrowserRouter>
        </>
    )
};

export default Routing