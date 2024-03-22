import React, { useState,useEffect} from 'react';


function Landing() {
  const api =
  "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae";
const [data, setdata] = useState([]);
const res = async (url) => {
  try {
    const responce = await fetch(url);
    const data = await responce.json();
    setdata([data]);
    console.log(data)
  } catch (error) {
    console.log(error);
  }
};
useEffect(() => {
  res(api);
}, []);
  return (
    <>
     {data.map((elment,ind)=>{
         return(
          <section key={ind} className="preview section-padding">
          <div className="container">
            <div className="sec-head mb-80">
              <div className="row justify-content-center">
                <div className="col-lg-9">
                  <div className="text-center">
                    <h1 className="fz-70 mb-15">{elment.user.about.name}</h1>
                    <h4>
                    {elment.user.about.title}
                      <span className="main-color ml-5"></span>
                      {elment.user.about.subTitle}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="row md-marg">
              <div className="col-lg-6">
                <div className="item mt-40">
                  <div className="img">
                    <div className="screen">
                      <a href="/dark" target="_blank">
                        <img src={elment.user.about.avatar.url}  alt="" />
                      </a>
                    </div>
                    <div className="botm"></div>
                  </div>
                  <div className="text-center">
                    <h3>Home Dark</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="item mt-40">
                  <div className="img">
                    <div className="screen">
                      <a href="/light-m" target="_blank">
                        <img src={elment.user.about.avatar.url} alt="" />
                      </a>
                    </div>
                    <div className="botm"></div>
                  </div>
                  <div className="text-center">
                    <h3>Home Light</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
         )
     })}
      </>
  );
}

export default Landing;
