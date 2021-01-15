import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
    return (
        <section id="contactSection">
            <div className="row d-flex align-items-center justify-content-center mt-5 mb-5">

                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 mt-5">
                    <div className="expBox d-flex align-items-center justify-content-center p-5">
                        <div className="text-center">
                            <h4 className="mb-1">Ways To Contact Me</h4>
                            <div className="refA">
                                <p className="mb-0"><a href="mailto:bradleymubenga77@gmail.com"><i className="fa fa-envelope-o"></i> bradleymubenga77@gmail.com</a></p>
                                <p><a href="tel:0678151282"><i className="fa fa-phone"></i> 067 815 1282</a></p>
                            </div>
                            <div className="d-flex align-items-center justify-content-center">

                                <a href="https://www.github.com/bradleymubenga777/" target="blank" className="mr-4 iconSize">
                                    <i className="fa fa-github"></i>
                                </a>

                                <a href="https://www.linkedin.com/in/bradley-mubenga/" target="blank" className="mr-4 iconSize">
                                    <i className="fa fa-linkedin-square"></i>
                                </a>

                                <a href="https://www.facebook.com/bradleymubenga1/" target="blank" className="iconSize">
                                    <i className="fa fa-facebook-square"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
