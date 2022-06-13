import React from 'react'
import Hero from "../Hero/Hero"
import Header from "../Hero/Header/Header"
import About from '../About/About'

const Body = () => {
  return (
    <div style={{background:"#0b1120",
width:"100%"
}}
    
    >
    <Header/>
        
        <Hero/>
        <About/>
    </div>
  )
}

export default Body