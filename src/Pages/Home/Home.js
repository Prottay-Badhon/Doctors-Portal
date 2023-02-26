import React from 'react'
import Footer from '../Shared/Footer'
import Banner from './Banner'
import ContactUs from './ContactUs'
import Info from './Info'
import MakeApoinment from './MakeApoinment'
import Services from './Services'
import Testimonials from './Testimonials'

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <Info></Info>
        <Services></Services>
        <MakeApoinment></MakeApoinment>
        <Testimonials></Testimonials>
        <ContactUs></ContactUs>
    </div>
  )
}

export default Home
