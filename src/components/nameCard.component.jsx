import React from 'react'
import '../font-awesome/css/font-awesome.min.css'
import '../main.css'
import profilePicture from '../img/profilePicture.jpg'
import indlelaPic from '../img/indelaMedia.png'
import muaCele from '../img/muaCele.png'

export default function NameCard() {
    return (
        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
            <div className="vertColumn container mb-3">
                <div className="pt-3 pb-3">
                    <img src={profilePicture} alt="" width="150px" className="roundImg"/>
                </div>

                <div>
                    <h4 className="">Bradley Mubenga</h4>
                    <small className="jobTitle">Full-Stack Web Developer</small>
                </div>

                <div className="">
                    <p>Self-motivated developer, who is willing to learn and create outstanding web applications.</p>
                </div>

                <div className="d-flex flex-row flex-wrap pb-3 theLinks">

                    <a href="/" className="mr-2">
                        <i className="picLinks fa fa-linkedin-square"></i>
                    </a>

                    <a href="/" className="mr-2">
                        <i className="picLinks fa fa-github"></i>
                    </a>

                    <a href="/" className="mr-2">
                        <i className="picLinks fa fa-envelope-square"></i>
                    </a>

                </div>
            </div>

            <div className="vertColumn container mb-3 pb-2">
                <div className="pt-3 pb-2">
                    <h5>Experience</h5>
                </div>

                <div className="d-flex flex-row border-bottom">
                    <div className="mr-3">
                        <img src={indlelaPic} alt="" width="45px"/>
                    </div>
                    
                    <div>
                        <small className="companyName">Indlela Media</small> <br></br>
                        <small>Feb 2020 - Current</small>
                        <h6 className="jobTitle">Front-end developer</h6>
                        <p>Responsible for the front-end development of the Indlela Media’s Web App, primarily using React and Bootstrap in a startup enviroment. </p>
                    </div>
                </div>

                <div className="d-flex flex-row pt-3">
                    <div className="mr-3">
                        <img src={muaCele} alt="" width="45px"/>
                    </div>
                    
                    <div>
                        <small className="companyName">MUA Celeste</small> <br></br>
                        <small>Dec 2019 - Jan 2020</small>
                        <h6 className="jobTitle">Web designer</h6>
                        <p>Responsible for the building a responsive single page web application using React and Bootstrap.</p>
                    </div>
                </div>

            </div>
    </div>
    )
}