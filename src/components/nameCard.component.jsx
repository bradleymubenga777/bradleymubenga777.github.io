import React from 'react'
import '../main.css'
import profilePicture from '../img/profilePicture.jpg'

export default function NameCard() {
    return (
        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
            <div className="vertColumn container mb-3">
                <div className="pt-3 pb-3">
                    <img src={profilePicture} alt="" width="150px" className="roundImg"/>
                </div>

                <div>
                    <h4 className="">Bradley Mubenga</h4>
                    <small>Full-stack developer</small>
                </div>

                <div className="pb-2">
                    <p>Self-motivated developer, who is willing to learn and create outstanding web applications.</p>
                </div>
            </div>

            <div className="vertColumn container mb-3 pb-2">
                <div className="pt-3">
                    <h5>Experience</h5>
                </div>

                <div className="d-flex flex-row">
                    <div className="mr-3">
                        <img src={profilePicture} alt="" width="45px"/>
                    </div>
                    
                    <div>
                        <small>Feb 2017 - Current</small>
                        <h6>Front-end developer</h6>
                        <p>Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.</p>
                    </div>
                </div>

                <div className="d-flex flex-row">
                    <div className="mr-3">
                        <img src={profilePicture} alt="" width="45px"/>
                    </div>
                    
                    <div>
                        <small>Feb 2017 - Current</small>
                        <h6>Front-end developer</h6>
                        <p>Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.</p>
                    </div>
                </div>

            </div>
    </div>
    )
}
