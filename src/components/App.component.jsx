import React, { Component } from 'react'
import Navbar from './Navbar.component'
import Hero from './Hero.component'
import Services from './Services.component'
import Video from './Video.component'
import Portfolio from './Portfolio.component'
import { BrowserRouter, Route } from 'react-router-dom'
import '../main.css'
import '../font-awesome/css/font-awesome.min.css'

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                    <div className="">
                        <Navbar />
                        <Hero />
                        <Services />
                        <Video />
                        <Portfolio />
                        <Route exact path="/"  />
                        <Route exact path='/portfolio' />
                    </div>
            </BrowserRouter>
        )
    }
}
