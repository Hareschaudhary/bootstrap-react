import React from "react";

const Company = () => {
  return (
    <>
      <div className="container mt-4 mb-4">
        <div className="row justify-content-between">
        <div className="col-12 mt-4 mb-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3521.780053148676!2d72.52652830066566!3d23.05681019302753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84a9c5925971%3A0x38a35fac88bddb45!2sMaple%20Trade%20Centre%2C%20Memnagar%2C%20Ahmedabad%2C%20Gujarat%20380052!5e1!3m2!1sgu!2sin!4v1710043105204!5m2!1sgu!2sin"
              width="96%"
              height="450"
              style={{border:"0px"}}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className=" rounded-2 shadow-lg"
            ></iframe>
          </div>
          <div className="col-md-6 position-relative ">
            <div
              style={{ zIndex: "-1" }}
              className=" position-absolute w-100 h-100 d-flex justify-content-center align-items-center"
            >
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
            <iframe
              width="96%"
              height="315"
              src="https://www.youtube.com/embed/hT1rmh8VO2E?si=xOVZ8SMHjY4n9iNS"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              className=" rounded-2 mt-2"
            ></iframe>
          </div>
          <div className="col-md-6 position-relative">
            <div
              style={{ zIndex: "-1" }}
              className=" position-absolute w-100 h-100 d-flex justify-content-center align-items-center"
            >
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
            <iframe
              width="96%"
              height="315"
              src="https://www.youtube.com/embed/cqof4tlkEp0?si=QvW0Zsd7pNRgMB4K"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              className=" rounded-2 mt-2"
            ></iframe>
          </div>
          <div className="col-md-6 position-relative">
            <div
              style={{ zIndex: "-1" }}
              className=" position-absolute w-100 h-100 d-flex justify-content-center align-items-center"
            >
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
            <iframe
              width="96%"
              height="315"
              src="https://www.youtube.com/embed/g6UiqaJO7a0?si=AKaKvhFz1ZmjTGWI"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              className=" rounded-2 mt-2"
            ></iframe>
          </div>
          <div className="col-md-6 position-relative">
            <div
              style={{ zIndex: "-1" }}
              className=" position-absolute w-100 h-100 d-flex justify-content-center align-items-center"
            >
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
            <iframe
              width="96%"
              height="315"
              src="https://www.youtube.com/embed/L5xehAJZis4?si=Y8uqquvvdcELkJ6y"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              className=" rounded-2 mt-2"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Company;
