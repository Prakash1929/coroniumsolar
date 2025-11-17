import React from 'react'
import Navbar from './Components/Navsection/Navbar'

import AboutUs from './Components/Aboutsection/About'
import Spectram from './Components/Aboutsection/Spectram'
import Product from './Components/Productsection/Product'
import Projects from './Components/Projectsection/Projects'
import Testominal from './Components/Testominalsection/Testominal'
import Rating from './Components/Ratingsection/Rating'
import Footer from './Components/Footersection/Footer'
import Hero from './Components/HeroSection/Hero'


const App = () => {
  return (
  <>
 
    <Navbar/>
 <Hero/>
    <AboutUs/>
    <Spectram/>
    <Product/>
    <Projects/>
    <Testominal/>
    <Rating/>
    <Footer/>
  </>
  )
}

export default App