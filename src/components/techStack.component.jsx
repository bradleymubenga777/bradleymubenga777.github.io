import React from 'react'
import '../main.css'
import Projects from '../components/projects.component'
import profilePicture from '../img/profilePicture.jpg'
import pic1 from '../img/pic (1).png'
import pic2 from '../img/pic (2).png'
import pic3 from '../img/pic (3).png'
import pic4 from '../img/pic (4).png'
import pic5 from '../img/pic (5).png'
import pic6 from '../img/pic (6).png'
import pic7 from '../img/pic (7).png'


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
                                        <img src={pic1} alt="" width="45"/>
                                    </div>
                                    
                                    <div className="m-2">
                                        <img src={pic5} alt="" width="45"/>
                                    </div>
                
                                    <div className="m-2">
                                        <img src={pic6} alt="" width="45"/>
                                    </div>

                                </div>
                            </div>
                        </div>

                    <div className="col-md-12 col-lg-6">
                        <div className="vertColumn container mb-3 pt-3 pb-4">
                            <h4>Back-end</h4>

                            <div className="d-flex flex-row flex-wrap">

                                <div className="m-2">
                                    <img src={pic3} alt="" width="45"/>
                                </div>
            
                                <div className="m-2">
                                    <img src={pic2} alt="" width="45"/>
                                </div>

                                <div className="m-2">
                                    <img src={pic7} alt="" width="45"/>
                                </div>

                                <div className="m-2">
                                    <img src={pic4} alt="" width="45"/>
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
