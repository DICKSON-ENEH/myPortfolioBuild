import React from 'react'
import styled from "styled-components"
import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
<Head>
    Hello there <span><img src = "emoji.svg"/> i'm</span>
</Head>
<Mid>Dickson Eneh</Mid>
<Sec>FullStack Software Engineer</Sec>
<Base>Im a fullstack software engineer based in Lagos i build amazing things for the web and mobile devices
<H1 style={{   fontWeight: 'normal' }}>
        My Stacks {' '}
        <span style={{ color: '#0fa5e9', fontWeight: 'bold' }}>
          
          <Typewriter
            words={['Mongodb', 'React js', 'React Native', 'Node js', 'express js', 'many more!']}
            loop={0}
            cursor
            cursorStyle='-'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}

          />
        </span>
      </H1>
</Base>
     

<Button>Portfolio</Button>
            </Left>
            <Right>
                <img src = "/images/dev.svg"/>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Hero

const Container = styled.div`
color:#fff;
font-family:poppins ;
display:flex;
justify-content:center;
width:100%;
height:100%;
min-height:calc(100vh - 70px)
`
const Wrapper= styled.div`
width:1200px;
/* height:100vh; */
display:flex;
justify-content:space-between; 
align-items:center;
flex-wrap:wrap;
@media(max-width:768px){
    flex-direction:column-reverse;
    justify-content:center
}
`
const Left = styled.div`
@media(max-width:768px){
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:center ;
}
`
const Right = styled.div`
flex:0.7;
/* overflow:hidden; */


 @media (max-width:380px){
     width:300px;
     img{
         width:100%
     }
 }

`
const Head  = styled.div`
font-size:20px;
`
 const Sec = styled.div`
 color:#0fa5e9;
 font-size:20px
 `
 const Base = styled.div`
 width:550px;
 font-size:20px;
 margin-bottom:20px;
 @media (max-width:768px){
     text-align:center
 }
 @media (max-width:500px){
     width:300px;
     font-size:18px
 }
 @media (max-width:340px){
     width:260px;
     font-size:18px
 }
 `
 const Mid = styled.div`
 font-weight:500 ;
 font-size:3rem;
 margin-bottom:10px;
 @media (max-width:340px){
     font-weight: 2rem;
 }
 `
 
 const Button = styled.button`
 background:#0fa5e9;
 border:none;
 outline:none;
 color:white;
 padding:12px 30px;
 font-size:18px;
 font-family:poppins;
 border-radius:3px;
 cursor:pointer
 `
 const H1 = styled.div``