import React from 'react'
import Hero from './Hero.component'
import Portfolio from './Portfolio.component'
import AboutMe from './AboutMe.component'
import ContactMe from './Contact.component'


export default function Home() {
    return (
        <div>
            <Hero />
            <Portfolio />
            <AboutMe />
            <ContactMe />
        </div>
    )
}
