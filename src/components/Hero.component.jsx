import React from 'react'
import pictureOfMe from '../img/profilePicture.jpg'
import { Link } from 'react-router-dom'

export default function Hero() {
    return (
        <div className="purpleBg mb-5 pt-5">
            <div className="container pt-5">
                <div className="row d-flex flex-column justify-content-center align-content-center">
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 mb-5 ">
                        <div className="text-center mt-3">
                            
                            <div className="">
                                <img src={pictureOfMe} className="img-fluid roundImg" alt="" width="200rem" />
                            </div>

                            <div className="whiteText">
                                <h4 className="mt-2 mb-0">Bradley Mubenga</h4>
                                <small className="devName">Full-stack Web Developer</small>
                                <p className="lead">Self-motivated developer, who is willing to learn and create outstanding web applications.</p>
                            </div>

                            
                            <div className="">
                                <Link to="/contact" className="btn btn-primary mr-2">Contact Me</Link>
                                <a href="/" className="btn btn-outline-primary ml-2">Download CV</a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
