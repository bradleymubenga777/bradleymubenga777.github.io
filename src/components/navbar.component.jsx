import React from 'react'
import logoImg from '../img/logoImg.png'
import { NavLink, Link } from 'react-router-dom'

export default function Navbar() {
    return (
<nav class="navbar navbar-expand-lg fixed-navbar navbar-dark purpleBg">
  <div class="container">
    <Link class="navbar-brand" to="/">
        <img alt="" src={logoImg} width="50rem" />
    </Link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarsExample07">
      <ul class="navbar-nav ml-auto">

        <li class="nav-item mr-5">
            <NavLink to="/ss" className="nav-link">Home</NavLink>
        </li>

        <li class="nav-item mr-5">
            <NavLink to="/sss" className="nav-link">Portfolio</NavLink>
        </li>

        <li class="nav-item mr-5">
            <NavLink to="/ssss" className="nav-link">Blog</NavLink>
        </li>

        <li class="nav-item mr-5">
            <NavLink to="/ssssss" className="nav-link">Contact</NavLink>
        </li>
        
        <div className="borderRight ml-3 "></div>

        <div className="ml-5 d-flex align-items-center justify-content-center">
            <Link to="/" className="mr-4">
                <i className="fa fa-phone"></i>
            </Link>

            <Link to="/" className="mr-4">
                <i className="fa fa-linkedin"></i>
            </Link>

            <Link to="/" className="">
                <i className="fa fa-facebook"></i>
            </Link>
        </div>
      </ul>
    </div>
  </div>
</nav>
    )
}
