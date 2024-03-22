import React, { useState, useEffect, useContext } from "react";
import Usecontaxt from "../Store.jsx/Usecontaxt";

const Apidata = () => {
  const api =
    "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae";
  const { setservice, setprofile, setprice, setblog, setportfolio,setskills,setestimonials } =
    useContext(Usecontaxt);
  let [data, setdata] = useState();

  const res = async (url) => {
    try {
      const responce = await fetch(url);
      const data = await responce.json();
      setdata([data]);
      setservice(data.user.services);
      setprofile([data]);
      setprice(data.user.timeline);
      setblog(data.user.social_handles);
      setportfolio(data.user.projects);
      setskills(data.user.skills)
      setestimonials(data.user.testimonials)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    res(api);
  }, []);

  return <></>;
};
export default Apidata;
