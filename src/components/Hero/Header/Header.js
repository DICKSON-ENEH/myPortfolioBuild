import React, {useState} from 'react'
import styled from "styled-components"
import Navside from "./Navside"
import {BiMenuAltRight} from "react-icons/bi"
import {MdOutlineCancel} from "react-icons/md"

const Header = () => {
    const [toggle , setToggle] = useState(false)

    const change = ()=>{
        setToggle(!toggle)
    }
  return (
      <>
    <Container>
        <Wrapper>
            <Logo>

                <img src ="/web.svg"/>
            </Logo>
            <Navigation>
                <Navs>Home</Navs>
                <Navs>About</Navs>
                <Navs>Portfolio</Navs>
                <Navs>contact</Navs>
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
align-items:center ;
height:70px;
font-family:poppins;
background:transparent
`
const Wrapper = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
flex-wrap:wrap;
width:90%
`
const Logo = styled.div`
width:70px;
img{
    width:100%
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
const Navs = styled.div`
font-weight:400;
font-size:18px;
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
@media(max-width:768px){
    display:block
}
` 