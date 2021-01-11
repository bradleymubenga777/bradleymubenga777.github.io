import React from 'react'
import meAndLogo from '../img/LogoAndMe.png'

export default function Hero() {
    return (
        <div className="purpleBg mb-5">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <div className="d-flex flex-column justify-content-center align-content-center">
                            <div className="mt-5 whiteText">
                                <h1>I help businesses to get more customers by effective web development.</h1>
                                <p className="lead">Whether your goal is to have a website with a high conversion rate or effective lead generation, I've got you covered!</p>
                            </div>

                            
                            <div className="">
                                <button className="btn btn-primary mr-2">Contact Me</button>
                                <button className="btn btn-outline-primary ml-2">Learn More</button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <div className="d-flex justify-content-center align-content-center">
                            <img src={meAndLogo} alt="" width="500rem" className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
