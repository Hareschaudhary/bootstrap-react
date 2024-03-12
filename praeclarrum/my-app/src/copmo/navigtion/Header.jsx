import React from "react";
import Nav from "../header/Nav"
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
const Header = () => {
  return <>

  <Nav/>
  <Outlet/>
  <Footer/>
  
  </>;
};

export default Header;
