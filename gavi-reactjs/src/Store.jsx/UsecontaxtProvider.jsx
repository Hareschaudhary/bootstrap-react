import React, { useState } from "react";
import Usecontaxt from "./Usecontaxt";

const UsecontaxtProvider = ({ children }) => {
  const [service, setservice] = useState([]);
  const [profile, setprofile] = useState([]);
  const [price, setprice] = useState([]);
  const [blog, setblog] = useState([]);
  const [portfolio, setportfolio] = useState([]);
  const [skills, setskills] = useState([]);
  const [testimonials, setestimonials] = useState([]);
  return (
    <>
      <Usecontaxt.Provider
        value={{
          service,
          setservice,
          profile,
          setprofile,
          price,
          setprice,
          blog,
          setblog,
          portfolio,
          setportfolio,
          skills,
          setskills,
          testimonials, 
          setestimonials,
        }}
      >
        {children}
      </Usecontaxt.Provider>
    </>
  );
};

export default UsecontaxtProvider;
