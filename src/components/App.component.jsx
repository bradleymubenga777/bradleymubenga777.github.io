import React, { Component } from 'react'
import WelcomePage from './welcomePage.component'
import PortfolioComponent from './portfolio.component'
import { BrowserRouter, Route } from 'react-router-dom'
import '../main.css'



export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <section className="container">
                    <div className="row mt-4">
                        <WelcomePage />
                        <Route exact path='/portfolio' component={PortfolioComponent} />
                    </div>
                </section>
            </BrowserRouter>
        )
    }
}
