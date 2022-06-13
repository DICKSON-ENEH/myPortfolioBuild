import React, {useEffect} from 'react'
import styled from "styled-components"
import Aos from "aos"
import "aos/dist/aos.css"

const Navside = ({setToggle, toggle}) => {

    useEffect(()=>{
        Aos.init({duration:1500})
    })
  return (
    <Container  aos-data="fade-left">
        <Wrapper>

        
        <Nav onClick={(()=>{
            setToggle(true)
        })}>Home</Nav>
        <Nav  onClick={(()=>{
            setToggle(true)
        })}>About</Nav>
        <Nav
        onClick={(()=>{
            setToggle(true)
        })}
        >Portfolio</Nav>
        <Nav
        onClick={(()=>{
            setToggle(true)
        })}
        >Contact</Nav>
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
@media(max-width:768px){
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:200px;
    height:200px ;
    position:absolute ;
    right:0;
transition:all 400ms

    

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
const Nav = styled.div`
cursor:pointer;
font-weight:500;
:hover{
    transition: all 300ms ;
transform:scale(1.05)
}

`