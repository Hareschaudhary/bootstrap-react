import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

const Testimonialsswioer=()=>{
    return(
        <>
            <SwiperSlide style={{ height: '400px' }}>
                    <div className="item d-flex">
                      <div>
                        <div className="icon-img-60 mr-60">
                          <img src="/assets/imgs/svg-assets/quote.png" alt="" />
                        </div>
                      </div>
                      <div>
                        <div className="cont mb-30">
                          <div className="d-flex align-items-center">
                            <div className="rate-stars fz-12">
                              <span className="rate main-color">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                              </span>
                              <span className="fz-12 opacity-7 ml-10">
                                (71 Reviews)
                              </span>
                            </div>
                          </div>
                          <p className="fz-20 mt-15">
                            We have purchased well into the thousands of items,
                            but this is without doubt one of the best we’ve have
                            been lucky enough to work on, the attention to detail
                            apparent throughout, and the delivery is impressively
                            intuitive.
                          </p>
                        </div>
                        <div className="d-flex align-items-center">
                          <div>
                            <div className="img">
                              <img src="/assets/imgs/testim/1.jpg" alt="" />
                            </div>
                          </div>
                          <div className="ml-30">
                            <div className="info">
                              <h6 className="main-color">Leonard Heiser</h6>
                              <span className="fz-13 mt-10 opacity-8">
                                Envato customer
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
        </>
    )
}
export default Testimonialsswioer