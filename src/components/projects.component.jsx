import React from 'react'
import '../main.css'
import Blog from './blog.component'
import port1 from '../img/port1.jpeg'
import port2 from '../img/port2.jpeg'

export default function Projectst() {
    return (
        <div className="row">
            <div className="col-md-12 col-lg-12">
                <div className="vertColumn container mb-3 pt-3 pb-5">
                    <h4 className="border-bottom pb-3">Projects</h4>

                    <div className="row">
                        <div className="col-md-12 col-xl-6">
                            <div className="card mb-3">
                                <img src={port1} class="card-img-top img-fluid" alt="..." />

                                <div className="card-body">
                                    <h5 className="card-title">Indlela Media Web App</h5>
                                    
                                    <div className="d-flex flex-row flex-wrap">
                                        <button className="btn btn-primary mr-2">Demo</button>
                                        
                                        <a href="https://github.com/bradleymubenga777/indlela-media">
                                            <button className="btn btn-outline-primary">Code</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 col-xl-6">
                            <div class="card mb-3">
                                <img src={port2} class="card-img-top img-fluid" alt="..." />

                                <div class="card-body">
                                    <h5 class="card-title">MUA Celeste Portfolio</h5>
                                    
                                    <div className="d-flex flex-row flex-wrap">
                                        <a href="http://muaceleste.netlify.app/" rel="noreferrer" target="_blank" >
                                            <button className="btn btn-primary mr-2">Demo</button>
                                        </a>

                                        <a href="https://github.com/bradleymubenga777/muaceleste" rel="noreferrer" target="_blank" >
                                            <button className="btn btn-outline-primary">Code</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 col-xl-12 text-center">
                            
                        </div>
                    </div>
                </div>

                <Blog />
            </div>

    </div>
    )
}
