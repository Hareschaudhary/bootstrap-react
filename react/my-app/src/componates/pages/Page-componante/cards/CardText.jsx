import React from 'react'

const CardText =()=>{

    return(
        <>
        <div className=' bg-primary'>
            <div className="container">
                <div className="row p-md-5 p-sm-3 ">
                    <div className="col-md-3 col-sm-5 text-center me-auto p-md-5">
                        <h3 className="fs-md-3 text-warning">1854</h3>
                        <h3 className="fs-5 text-white">Projects Finished</h3>
                    </div>
                    <div className="col-md-3 col-sm-5  text-center p-md-5">
                        <h3  className="fs-3 text-warning">3254</h3>
                        <h3   className="fs-5 text-white">Line Of Coding</h3>
                    </div>
                    <div className="col-md-3 col-sm-5  text-center me-auto mt-sm-4 mt-md-0 p-md-5 ">
                        <h3  className="fs-3 text-warning">584</h3>
                        <h3  className="fs-5 text-white">Award Won</h3>
                    </div>
                    <div className="col-md-3 col-sm-5  text-center mt-sm-4 mt-md-0 p-md-5 ">
                        <h3  className="fs-3 text-warning">1731</h3>
                        <h3  className="fs-5 text-white">Satisfied Clients</h3>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default CardText