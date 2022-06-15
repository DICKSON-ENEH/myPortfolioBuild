import React, {useState} from 'react'
import styled from "styled-components"
import Navside from "./Navside"
import {BiMenuAltRight} from "react-icons/bi"
import {MdOutlineCancel} from "react-icons/md"
import { animateScroll as Scroll, Link } from "react-scroll";
// import {Link} from "react-router-dom"
const Header = () => {
    const [toggle , setToggle] = useState(false)

    const change = ()=>{
        setToggle(!toggle)
    }
  return (
      <>
    <Container>
        <Wrapper>
            <Logo to ="home"  duration={1000} smooth ={true} offset={-110}>

                <img src ="/web.svg"/>
            </Logo>
            <Navigation>
                <Navs to="home" duration={1000} smooth={true} offset={-120}>Home</Navs>
                <Navs to ="about" duration={1000} smooth={true} offset={-110}>About</Navs>
                <Navs to ="portfolio" duration={1000} smooth={true} offset={-110}>Portfolio</Navs>
                <Navs to ="contact" duration={1000} smooth={true} offset={-110}  >
                    Contact</Navs>
            </Navigation>
            <Side>
            { 
  
  toggle? 
<MdOutlineCancel onClick={change}/>:
<BiMenuAltRight onClick={change}/>





  }
  </Side>
        </Wrapper>
        
    
    </Container>
    { toggle? <Navside setToggle={setToggle} toggle={toggle}/>:null}
    
    </>
  )
}

export default Header

const Container = styled.div`
/* position:fixed ; */
color:#fff;
display:flex;
justify-content:center;
/* align-items:center ; */
height:70px;
font-family:poppins;
background:transparent;
position:fixed ;
z-index:100 ;

    
width:100%;
background:#0b1120
`
const Wrapper = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
flex-wrap:wrap;
width:90%
`
const Logo = styled(Link)`
width:70px;
cursor:pointer ;
img{
    width:100%
}
:hover{
    transition: all 300ms ;
    transform:scale(1.05)
}
`
const Navigation = styled.div`
display:flex;
justify-content:space-between;
width:500px;
@media(max-width:768px){
    display:none
}
`
const Navs = styled(Link)`
font-weight:400;
font-size:18px;
text-decoration:none;
color:#fff;
a{
    text-decoration:none ;
    color:#fff
}

cursor:pointer ;
:hover{
    transition:all 300ms;
    transform:scale(1.05)
}
`
const Side = styled.div`
color:#fff;
display:none;
cursor:pointer ;
font-size:35px;
@media(max-width:768px){
    display:block
}
` 