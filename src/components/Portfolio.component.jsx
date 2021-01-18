import React from 'react'
import port from '../img/port2.jpeg';

export default function Portfolio() {
    return (
        <div className="whiteBg mb-5">
            <div className="text-center mt-3">
                <h4 className="purpleText">Projects</h4>
                <small class="lead">My Masterpiece Collection.</small>
            </div>

            <div className="row mt-3 d-flex justify-content-center">
                <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 mt-3">
                    <div className="whiteBox text-center pb-2 ">
                        <img alt="" src={port} className="img-fluid"/>

                        <div className="pt-3 px-2 ">
                            <h4>Valley Kalombo Blog</h4>
                            <p className="text-center"> A web application for Corporate Social Investors to manage their projects.</p>
                            
                            <div>
                                <button className="btn btn-primary mr-2">Demo <i className="fa fa-external-link"></i></button>
                                <button className="btn btn-outline-primary ml-2">Code <i className="fa fa-code"></i></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 mt-3">
                    <div className="whiteBox text-center pb-2 ">
                        <img alt="" src={port} className="img-fluid"/>

                        <div className="pt-3 px-2 ">
                            <h4>Indlela Media</h4>
                            <p className="text-center"> A web application for Corporate Social Investors to manage their projects.</p>
                            
                            <div>
                                <button className="btn btn-primary mr-2">Demo <i className="fa fa-external-link"></i></button>
                                <button className="btn btn-outline-primary ml-2">Code <i className="fa fa-code"></i></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 mt-3">
                    <div className="whiteBox text-center pb-2 ">
                        <img alt="" src={port} className="img-fluid"/>

                        <div className="pt-3 px-2 ">
                            <h4>MUA Celeste</h4>
                            <p className="text-center">A website portfolio for a Professional Make-up artist displaying their art.</p>
                            
                            <div>
                                <button className="btn btn-primary mr-2">Demo <i className="fa fa-external-link"></i></button>
                                <button className="btn btn-outline-primary ml-2">Code <i className="fa fa-code"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
