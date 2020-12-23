import React from 'react'
import '../main.css'
import profilePicture from '../img/profilePicture.jpg'
import portfolioPicture from '../img/portfolioPicture.jpeg'

export default function Projectst() {
    return (
        <div className="row">
            <div className="col-md-12 col-lg-12">
                <div className="vertColumn container mb-3 pt-3 pb-4">
                    <h4 className="border-bottom pb-3">Projects</h4>

                    <div className="row">
                        <div className="col-md-12 col-xl-6">
                            <div class="card mb-3">
                                <img src={portfolioPicture} class="card-img-top img-fluid" alt="..." />

                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 col-xl-6">
                            <div class="card mb-3">
                                <img src={portfolioPicture} class="card-img-top img-fluid" alt="..." />

                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

    </div>
    )
}
