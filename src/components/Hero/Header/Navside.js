import React, {useEffect} from 'react'
import styled from "styled-components"

import { animateScroll as Scroll, Link } from "react-scroll";


const Navside = ({setToggle, toggle}) => {

    
  return (
    <Container >
        <Wrapper>

        
        <Nav onClick={(()=>{
            setToggle(false)
        })}  to ="home" duration={1000} smooth ={true} offset={-120}>Home</Nav>
        <Nav  onClick={(()=>{
            setToggle(false)
        })}  to ="about" duration={1000} smooth={true} offset={-110}>About</Nav>
        <Nav
        onClick={(()=>{
            setToggle(false)
        })}
        to ="portfolio" duration={1000} smooth={true} offset={-110}
        >Portfolio</Nav>
        <Nav
        onClick={(()=>{
            setToggle(false)
        })}
        ><a href ="tel:+2349130308557">
        Contact</a></Nav>
        </Wrapper>
    </Container>
  )
}

export default Navside

const Container = styled.div`
display:none;
height:100vh;
color:#fff;
font-weight:500;
font-family:poppins;
border-radius:3px;
background:#0fa5e9;
transition:all 400ms;
z-index:100;
@media(max-width:768px){
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:200px;
    height:200px ;
    position:fixed;

z-index:  100;

    right:0;
    top:70px;
transition:all 400ms

    

}
@media(max-width:320px){
    right:40px
}
`
const Wrapper= styled.div`
 
 @media(max-width:768px){
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    width:100%;
    height:80vh
 }
 
`
const Nav = styled(Link)`
cursor:pointer;
font-weight:500;
:hover{
    transition: all 300ms ;
transform:scale(1.05)
}
a{
    text-decoration:none ;
    color:#fff
}
`