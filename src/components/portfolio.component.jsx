import React, { Component } from 'react'
import '../main.css'
import profilePicture from '../img/profilePicture.jpg'

export default class Portfolio extends Component {
    render() {
        return (
            <div>
                <section className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                            <div className="vertColumn">
                                <div>
                                    <img src={profilePicture} alt=""/>
                                </div>

                                <div>
                                    <h4 className="">Bradley Mubenga</h4>
                                    <small>Full-stack developer</small>
                                </div>

                                <div>
                                    <p>Self-motivated developer, who is willing to learn and create outstanding web applications.</p>
                                </div>
                            </div>

                            <div className="vertColumn">
                                <div>
                                    <h5>Experience</h5>
                                </div>

                                <div className="">
                                    <div>
                                        <img src={profilePicture} alt="" width="45px"/>
                                    </div>
                                    
                                    <div>
                                        <small>Feb 2017 - Current</small>
                                        <h6>Front-end developer</h6>
                                        <p>Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.</p>
                                    </div>
                                </div>

                                
                                <div className="">
                                    <div>
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

                        <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 col-lg-6">
                                        <div>
                                            <h4>Front-end</h4>

                                            <div className="d-flex flex-row">
                                                <div className="mr-2">
                                                    <img src={profilePicture} alt="" width="45"/>
                                                </div>
                            
                                                <div className="mr-2">
                                                    <img src={profilePicture} alt="" width="45"/>
                                                </div>

                                                <div className="mr-2">
                                                    <img src={profilePicture} alt="" width="45"/>
                                                </div>

                                                <div className="mr-2">
                                                    <img src={profilePicture} alt="" width="45"/>
                                                </div>
                            
                                                <div className="mr-2">
                                                    <img src={profilePicture} alt="" width="45"/>
                                                </div>

                                                <div className="mr-2">
                                                    <img src={profilePicture} alt="" width="45"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-12 col-lg-6">
                                        <div>
                                            <h4>Back-end</h4>

                                            <div className="d-flex flex-row">
                                                <div className="mr-2">
                                                    <img src={profilePicture} alt="" width="45"/>
                                                </div>
                            
                                                <div className="mr-2">
                                                    <img src={profilePicture} alt="" width="45"/>
                                                </div>

                                                <div className="mr-2">
                                                    <img src={profilePicture} alt="" width="45"/>
                                                </div>

                                                <div className="mr-2">
                                                    <img src={profilePicture} alt="" width="45"/>
                                                </div>
                            
                                                <div className="mr-2">
                                                    <img src={profilePicture} alt="" width="45"/>
                                                </div>

                                                <div className="mr-2">
                                                    <img src={profilePicture} alt="" width="45"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8">
                            
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
