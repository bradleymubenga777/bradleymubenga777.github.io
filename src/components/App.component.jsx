import React, { Component } from 'react'
import Navbar from './Navbar.component'
import { BrowserRouter, Route } from 'react-router-dom'
import '../main.css'
import '../font-awesome/css/font-awesome.min.css'

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                    <div className="">
                        <Navbar />
                        <Route exact path="/"  />
                        <Route exact path='/portfolio' />
                    </div>
            </BrowserRouter>
        )
    }
}
