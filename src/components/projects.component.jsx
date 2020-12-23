import React from 'react'
import '../main.css'
import profilePicture from '../img/profilePicture.jpg'

export default function Projectst() {
    return (
        <div className="row">
            <div className="col-md-12 col-lg-12">
                <div className="vertColumn container mb-3 pt-3 pb-4">
                    <h4 className="">Projects</h4>

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

                        <div className="m-2">
                            <img src={profilePicture} alt="" width="45"/>
                        </div>
                    </div>
                </div>
            </div>

    </div>
    )
}
