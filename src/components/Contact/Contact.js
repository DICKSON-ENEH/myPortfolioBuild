import React from 'react'
import styled from "styled-components"
import { animateScroll as Scroll, Link} from "react-scroll"

const Contact = () => {
  return (
    <Div id="contact">
        <Top>
Get in Touch
<Two>I am available to work on your projects </Two>
        </Top>
        <Container>
            <Wrapper>
               <Location>
                   <img src ="/locate.svg"/>


               </Location>
               <Phone></Phone>
               <Whatsapp></Whatsapp>
               <Mail></Mail>
            </Wrapper>
        </Container>
    </Div>
  )
}

export default Contact

const Div = styled(Link)`
width:100%;
display:flex;
height:100% ;justify-content:center;
align-items:center;
color:#fff;
font-family:poppins ;
text-align:center ;
margin-top:30px
`
const Top = styled.div`
font-weight:700 ;
font-size:2rem ;
`
const Two = styled.div`
font-weight:200;

`
const Container = styled.div``
const Wrapper = styled.div``
const Location = styled.div`
width:100px;
height:100px;
display:flex;
justify-items:center ;
align-items:center;
border-radius:50%;
background: #462745;
color:#c5325c;

`
const Phone= styled.div``
const Whatsapp = styled.div``
const Mail = styled.div``