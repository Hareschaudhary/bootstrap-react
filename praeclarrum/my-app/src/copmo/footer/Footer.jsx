import React from "react";

const Footer = () => {
  return (
    <>
     
     <div className="container-fluid pt-5 pb-5   bg-dark w-100 ">
     <div className="container ">
        <div className="row justify-content-center">
          <div className="col-lg-3 col-md-4  col-sm-6">
            <nav class="nav flex-column">
              <a
                class="nav-link text-white pt-2 pb-2 fs-2 fw-bold p-0 m-0"
                aria-current="page"
                href="#"
              >
                Praeclarum <span className=" text-primary">Tech</span>
              </a>
              <p className=" border-bottom  border-white border-2"></p>
              <p className="text-white pt-2 pb-2">
                Praeclarum Tech was founded by people with a lifetime’s
                experience in the technology sector. Our experienced management
                team are supported by highly skilled individuals with specialist
                knowledge.
              </p>
            </nav>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <nav class="nav flex-column">
              <a
                class=" nav-link active fs-2 pt-2 pb-2 text-white fw-bold m-0 p-0"
                aria-current="page"
                href="#"
              >
                India
              </a>
              <p className=" border-bottom  border-white border-2"></p>
              <a class="nav-link m-0 p-0 text-white pt-2 pb-2" href="#">
                <i class="fa-solid fa-location-dot fs-5 pe-2"></i>
                1215, Mapple Trade Centre, Ahmedabad 380052
              </a>
              <a class="nav-link m-0 p-0 text-white pt-2 pb-2" href="#">
                <i class="fa-solid fa-location-dot fs-5 pe-2"></i>
                +91 81600 87371
              </a>
              <a class="nav-link m-0 p-0 text-white pt-2 pb-2" href="#">
                <i class="fa-solid fa-location-dot fs-5 pe-2"></i>
                contact@praeclarumtech.com
              </a>
            </nav>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <nav class="nav flex-column">
              <a
                class=" nav-link active fs-2 pt-2 pb-2 text-white fw-bold m-0 p-0"
                aria-current="page"
                href="#"
              >
                USA
              </a>
              <p className=" border-bottom  border-white border-2"></p>
              <a class="nav-link m-0 p-0 text-white pt-2 pb-2" href="#">
                <i class="fa-solid fa-location-dot fs-5 pe-2"></i>
                10900 Hideaway Lake Dr 99507
              </a>
              <a class="nav-link m-0 p-0 text-white pt-2 pb-2" href="#">
                <i class="fa-solid fa-location-dot fs-5 pe-2"></i>
                +1 (907) 947-8944
              </a>
              <a class="nav-link m-0 p-0 text-white pt-2 pb-2" href="#">
                <i class="fa-solid fa-location-dot fs-5 pe-2"></i>
                contact@praeclarumtech.com
              </a>
            </nav>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <nav class="nav flex-column">
              <a
                class=" nav-link active fs-2 pt-2 pb-2 text-white fw-bold m-0 p-0"
                aria-current="page"
                href="#"
              >
                Other Links
              </a>
              <p className=" border-bottom  border-white border-2"></p>
            </nav>
            <div className="row justify-content-between">
              <div className="col-md-6">
                <nav class="nav flex-column">
                  <a class="nav-link m-0 p-0 link-primarypt-2 pb-2" href="#">
                  Privacy Policy
                  </a>
                </nav>
              </div>
              <div className="col-md-6">
                <nav class="nav flex-column">
                  <a class="nav-link m-0 p-0 link-primary pt-2 pb-2" href="#">
                  Cookie Policy
                  </a>
                </nav>
              </div>
            </div>
            <div className="row justify-content-between">
              <div className="col-md-6">
                <nav class="nav flex-column">
                  <a class="nav-link m-0 p-0 link-primary pt-2 pb-2" href="#">
                  About Us
                  </a>
                </nav>
              </div>
              <div className="col-md-6">
                <nav class="nav flex-column">
                  <a class="nav-link m-0 p-0  pt-2 pb-2 link-primary" href="#">
                  Contact Us
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>
    </>
  );
};

export default Footer;
