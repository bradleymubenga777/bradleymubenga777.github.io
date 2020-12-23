import React from 'react'
import '../main.css'
import profilePicture from '../img/profilePicture.jpg'

export default function Projectst() {
    return (
        <div className="row">
            <div className="col-md-12 col-lg-8">
                <div>
                    <h4>Projects</h4>

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
    )
}
