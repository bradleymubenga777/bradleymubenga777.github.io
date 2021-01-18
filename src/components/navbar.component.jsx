import React from 'react'
import logoImg from '../img/logoImg.png'
import { NavLink, Link } from 'react-router-dom'

export default function Navbar() {
    return (
<nav class="navbar navbar-expand-lg fixed-top navbar-dark purpleBg">
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
            <NavLink exact to="/"  className="nav-link">Portfolio</NavLink>
        </li>

        <li class="nav-item mr-5">
            <NavLink to="/blog" className="nav-link">Blog</NavLink>
        </li>

        <li class="nav-item mr-5">
            <NavLink to="/contact" className="nav-link">Contact</NavLink>
        </li>
        
        <div className="borderRight ml-3 "></div>

        <div className="ml-5 d-flex align-items-center justify-content-center">
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
      </ul>
    </div>
  </div>
</nav>
    )
}
