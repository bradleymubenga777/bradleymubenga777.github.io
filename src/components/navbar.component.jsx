import React from 'react'
import logoImg from '../img/logoImg.png'


export default function Navbar() {
    return (
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <a class="navbar-brand" href="/">
        <img alt="" src={logoImg} width="45rem" />
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarsExample07">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
        </li>

        <li class="nav-item active">
            <a href="/" className="nav-link">Portfolio</a>
        </li>

        <li class="nav-item active">
            <a href="/" className="nav-link">Blog</a>
        </li>

        <li class="nav-item active">
            <a href="/" className="nav-link">Contact</a>
        </li>
        
        <div className="borderRight ml-3"></div>

        <div className="ml-3 d-flex align-items-center justify-content-center">
            <a href="/" className="mr-3">
                <i className="fa fa-facebook"></i>
            </a>

            <a href="/" className="mr-3">
                <i className="fa fa-facebook"></i>
            </a>

            <a href="/" className="">
                <i className="fa fa-facebook"></i>
            </a>
        </div>
      </ul>
    </div>
  </div>
</nav>
    )
}
