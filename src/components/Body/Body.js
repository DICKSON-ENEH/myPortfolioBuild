import React from 'react'
import Hero from "../Hero/Hero"
import Header from "../Hero/Header/Header"
import About from '../About/About'
import Services from '../Services/Services'
import Process from '../Process/Process'
import Portfolio from '../Portfolio/Portfolio'

const Body = () => {
  return (
    <div style={{background:"#0b1120",
width:"100%"
}}
    
    id ="home">
    <Header/>
        
        <Hero/>
        <About/>
        <Services/>
        <Process/>
        <Portfolio/>
    </div>
  )
}

export default Body