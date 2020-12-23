import React from 'react'
import '../main.css'
import Projects from '../components/projects.component'
import profilePicture from '../img/profilePicture.jpg'


export default function techStack() {
    return (
        <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-6">
                            <div className="vertColumn container mb-3 pt-3 pb-4">
                                <h4>Front-end</h4>

                                <div className="d-flex flex-row flex-wrap">
                                    <div className="m-2">
                                        <img src={profilePicture} alt="" width="45"/>
                                    </div>
                
                                    <div className="m-2">
                                        <img src={profilePicture} alt="" width="45"/>
                                    </div>

                                    <div className="m-2">
                                        <img src={profilePicture} alt="" width="45"/>
                                    </div>

                                    <div className="m-2">
                                        <img src={profilePicture} alt="" width="45"/>
                                    </div>
                
                                    <div className="m-2">
                                        <img src={profilePicture} alt="" width="45"/>
                                    </div>

                                </div>
                            </div>
                        </div>

                    <div className="col-md-12 col-lg-6">
                        <div className="vertColumn container mb-3 pt-3 pb-4">
                            <h4>Front-end</h4>

                            <div className="d-flex flex-row flex-wrap">
                                <div className="m-2">
                                    <img src={profilePicture} alt="" width="45"/>
                                </div>
            
                                <div className="m-2">
                                    <img src={profilePicture} alt="" width="45"/>
                                </div>

                                <div className="m-2">
                                    <img src={profilePicture} alt="" width="45"/>
                                </div>

                                <div className="m-2">
                                    <img src={profilePicture} alt="" width="45"/>
                                </div>
            
                                <div className="m-2">
                                    <img src={profilePicture} alt="" width="45"/>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <Projects />
            </div>
    </div>
    )
}
