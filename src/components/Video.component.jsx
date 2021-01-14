import React from 'react'
import meAndLogo from '../img/LogoAndMe.png'
import videoOne from '../video/videoOne.mp4'

export default function video() {
    return (
        <div className="purpleBg mb-5">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-12 col-lg-7 col-xl-7">
                        <div className="p-5">
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe className="embed-responsive-item" title="empty" src={videoOne} allowFullScreen></iframe>
                            </div>
                            <h4 className="text-center whiteText pt-3">You Need An Effective Website.</h4>
                            <p className="text-justify whiteText">I've worked with many businesses who do not understand why their website is not effective and also why it has cost them many clients in the past. After working with these businesses they have recieved more customers as a result. Contact me today to solve your problem, I'd love to assist you.</p>
                            <div className="text-center">
                                <button className="btn btn-primary">Contact Me</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
