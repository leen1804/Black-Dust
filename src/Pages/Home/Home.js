import React from 'react'
import About from './About'
import Portfolio from './Portfolio'
import Subscribe from './Subscribe'
import Contact from './Contact'
import Footer from './Footer'
import Shop from './Shop'
import Blog from './Blog'
import Hero from './Hero'
function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Portfolio/>
      <Blog/>
      <Shop/>
      <Subscribe/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home
