import React, { Component } from 'react'
import NameCard from './nameCard.component'
import TechStack from './techStack.component'
import '../main.css'

export default class Portfolio extends Component {
    render() {
        return (
            <div>
                <section className="container">
                    <div className="row">
                        <NameCard />

                        <TechStack />
                        
                    </div>
                </section>
            </div>
        )
    }
}
