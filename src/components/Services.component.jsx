import React from 'react';
import webDevPic from '../img/webDev.png';

export default function Services() {
    return (
        <div className="whiteBg container mb-5">
            <div className="text-center mt-3">
                <h4 className="purpleText">Services</h4>
                <small class="lead">This is what I'm great at!</small>
            </div>

            <div className="row mt-3 d-flex justify-content-center">
                <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 m-2">
                    <div className="whiteBox text-center pt-3 pb-2">
                        <img alt="" width="50rem" src={webDevPic} class="img-fluid"/>

                        <h4>Service One</h4>
                        <p>Lorem sldalksjd aldjskjdaljdlka aldjlskjdlas akdjlkajskdjalsjsdasdasda sdadsadsda.</p>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 m-2">
                    <div className="whiteBox text-center pt-3 pb-2">
                        <img alt="" width="50rem" src={webDevPic} class="img-fluid"class="img-fluid"/>

                        <h4>Service One</h4>
                        <p>Lorem sldalksjd aldjskjdaljdlka aldjlskjdlas akdjlkajskdjalsjsdasdasda sdadsadsda.</p>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 m-2">
                    <div className="whiteBox text-center pt-3 pb-2">
                        <img alt="" width="50rem" src={webDevPic} class="img-fluid"/>

                        <h4>Service One</h4>
                        <p>Lorem sldalksjd aldjskjdaljdlka aldjlskjdlas akdjlkajskdjalsjsdasdasda sdadsadsda.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
