import React, { Component } from 'react'
import profilePicture from '../img/profilePicture.jpg'
import { NavLink } from 'react-router-dom'

export default class welcomePage extends Component {
    
    render() {
        return (
            <div>
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-5">
                    <div className="vertColumn container">
                        <div className="row">
        
                            <div className="col-lg-6 d-flex align-items-center justify-content-center">
                                <div className="pt-3 pb-3 text-center">
                                    <img src={profilePicture} alt="" width="400rem" className="img-fluid roundImg"/>
                                </div>
                            </div>
        
                            <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center text-center">
                                <div>
                                    <h1 className="">Hello World!</h1>
                                </div>
        
                                <div className="text-justify container">
                                    <p>Self-motivated developer, who is willing to learn and create outstanding web applications to solve problems. Self-motivated developer, who is willing to learn and create outstanding web applications to solve problems.</p>
                                </div>
        
                                <div className="d-flex flex-row flex-wrap align-items-center pb-3 theLinks">
        
                                    <a href="https://www.linkedin.com/in/bradley-mubenga/" rel="noreferrer" target="_blank" className="">
                                        <i className="picLinks fa fa-linkedin-square"></i>
                                    </a>
        
                                    <a href="https://bradleymubenga777.github.io/" rel="noreferrer" target="_blank" className="mr-2 ml-2">
                                        <i className="picLinks fa fa-github"></i>
                                    </a>
        
                                    <a href="mailto:bradleymubenga77@gmail.com" rel="noreferrer" target="_blank" className="">
                                        <i className="picLinks fa fa-envelope-square"></i>
                                    </a>
        
                                </div>
        
                                
                                <div className="d-flex flex-row flex-wrap justify-content-center  align-items-center pb-3 theLinks">
                                    <div href="" className="mr-1">
                                        <NavLink to="/portfolio">
                                            <button className="btn btn-outline-primary">Portfolio</button>
                                        </NavLink>
                                    </div>
        
                                    <div href="" className="ml-1">
                                        <NavLink to="/blog">
                                            <button className="btn btn-outline-primary">Blog</button>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
        
                    </div>
        
                </div>
            </div>
        )
    }
}
