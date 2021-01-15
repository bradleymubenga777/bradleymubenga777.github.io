import React from 'react'
import jwtLogo from '../img/JWT.png'
import sassLogo from '../img/sass.png'
import bootsrapLogo from '../img/bootstrap.png'
import mongoLogo from '../img/mongo.png'
import expressLogo from '../img/express.png'
import reactLogo from '../img/react.png'
import nodejsLogo from '../img/nodejs.png'

export default function AboutMe() {
    return (
        <div id="aboutSection" className="purpleBg mb-5 pt-3">

            <div className="container pt-2">
                <div className="row d-flex justify-content-center align-content-center">
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 mb-5">
                        <div className="text-center mt-3 mb-0 whiteText">
                            <h4 className="whiteText">Skills</h4>
                        </div>

                        <div className="expBox d-flex align-items-center p-3">
                            <div className="">
                                <h5 className="mb-0">Tech Stack</h5>
                                <p>I specialize in the <span className="boldF">MERN Stack</span>, in addition I use <span className="boldF">Bootstrap</span> and <span className="boldF">Sass</span> to enchance my designs. I am not limited to these technologies and I am eager and willing to learn more. </p>
                                
                                <div className="d-flex justify-content-center">
                                    <div>
                                        <img src={mongoLogo} alt="" className="img-fluid" width="47rem"/>
                                    </div>

                                    <div>
                                        <img src={expressLogo} alt="" className="img-fluid ml-2" width="47rem"/>
                                    </div>

                                    <div>
                                        <img src={reactLogo} alt="" className="img-fluid ml-2" width="47rem"/>
                                    </div>

                                    <div>
                                        <img src={nodejsLogo} alt="" className="img-fluid ml-2" width="47rem"/>
                                    </div>

                                    <div>
                                        <img src={bootsrapLogo} alt="" className="img-fluid ml-2" width="47rem"/>
                                    </div>

                                    <div>
                                        <img src={sassLogo} alt="" className="img-fluid ml-2" width="47rem"/>
                                    </div>

                                    <div>
                                        <img src={jwtLogo} alt="" className="img-fluid ml-2" width="47rem"/>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 mb-5">
                        <div className="text-center mt-3 mb-0 whiteText">
                            <h4 className="whiteText">Experience</h4>
                        </div>
                        
                        <div className="expBox d-flex align-items-center p-3">
                            <div className="">
                                <h4 className="mb-0">Indlela Media</h4>
                                <em className="devType">Front-end Developer</em>
                                <br/>
                                <small>March 2020 - Present</small>
                                <p>Responsible for the front-end development of the Indlela Media's Web App, primarily using React and Bootstrap in a startup enviroment.</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>


            <div className="container">
                <div className="row d-flex justify-content-center align-content-center">

                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 mb-5">
                        <div className="text-center mb-0 whiteText">
                            <h4 className="whiteText">Education</h4>
                        </div>
                        
                        <div className="expBox d-flex align-items-center p-3">
                            <div className="ml-2">
                                <h5 className="mb-0">Code Your Future</h5>
                                <em className="devType">Full-stack Web Development Bootcamp</em>
                                <br/>
                                <small>Januaryz 2020 - August 2021</small>
                            </div>
                        </div>

                        <div className="expBox d-flex align-items-center p-3 mt-3">
                            <div className="ml-2">
                                <h5 className="mb-0">Oaklands High School</h5>
                                <em className="devType">Matric 2019 - Deputy Head Prefect</em>
                                <br/>
                                <small>January 2015 - December 2019</small>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}
