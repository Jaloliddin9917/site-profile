import React from 'react'
import About from '../../components/about/about'
import Contact from '../../components/contacts/contact'
import Experience from '../../components/experience/experience'
import Nav from '../../components/nav/Nav'
import Portfolio from '../../components/portfolio/portfolio'
import Profile from '../../components/profile/profile'
import Services from '../../components/services/services'
import Testimonials from '../../components/testimonials/testimonials'

const Home = () => {
  return (
    <div>
        <Profile/>
        <Nav/>
        <About/>
        <Experience/>
        <Services/>
        <Portfolio/>
        <Testimonials/>
        <Contact/>
    </div>
  )
}

export default Home