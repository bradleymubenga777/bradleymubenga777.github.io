import React from 'react'
import webDevPic from '../img/webDev.png';
import port from '../img/port2.jpeg';

export default function Portfolio() {
    return (
        <div className="whiteBg mb-5">
            <div className="text-center mt-3">
                <h4 className="purpleText">Portfolio</h4>
                <small class="lead">My Masterpiece Collection.</small>
            </div>

            <div className="row mt-3 d-flex justify-content-center">
                <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3">
                    <div className="whiteBox text-center pb-2 ">
                        <img alt="" src={port} className="img-fluid"/>

                        <div className="pt-3 px-2 ">
                            <h4>Effective Web Development</h4>
                            <p className="text-center">I create effective websites and turn underpeforming websites into websites that boost credibility and client aquisition.</p>
                            
                            <div>
                                <button className="btn btn-primary mr-2">Demo <i className="fa fa-globe"></i></button>
                                <button className="btn btn-outline-primary ml-2">Code <i className="fa fa-code"></i></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3">
                    <div className="whiteBox text-center pt-3 pb-2">
                        <img alt="" width="50rem" src={webDevPic} className="img-fluid"/>

                        <h4>Social Media Marketing</h4>
                        <p>Lorem sldalksjd aldjskjdaljdlka aldjlskjdlas akdjlkajskdjalsjsdasdasda sdadsadsda.</p>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3">
                    <div className="whiteBox text-center pt-3 pb-2">
                        <img alt="" width="50rem" src={webDevPic} className="img-fluid"/>

                        <h4>B2B <br/>Lead Generation</h4>
                        <p>I help B2B companies get more customers by improving the quality and quantity of leads generated.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
