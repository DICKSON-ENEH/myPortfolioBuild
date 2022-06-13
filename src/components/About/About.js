import React from 'react'
import styled from "styled-components"

const About = () => {
  return (
    <Container>
        <Wrapper>
            <Left>

                <img src ="/ppp.png"/>
            </Left>
            <Right>
                <Top>ABOUT ME</Top>
                <Mid>
                I'm Dickson Eneh,ui/ux designer and a fullstack software engineer. I am passionate about giving solutions to challenging problems and create delightful experiences.

I honed my skills at web development,mobile development(frontend and backend respectively). I develop web Applications with HTML, CSS and JavaScript, with proficiency in React js node js, express js, mongodb, React Native etc.
some of my technologies include  <span>Mongo db, React js, React Native, Node js, Express js, Microsoft Azure devops, Firebase, socket io, Next js, Redux, React Query etc</span>
Being a diligent, hardworking and result oriented Individual, I always work towards achieving best result on each project I lay my hands on.
                </Mid>
            </Right>
        </Wrapper>
    </Container>
  )
}


export default About

const Container= styled.div`
color:#fff;
display:flex ;
font-family:poppins;
height:100%;
width:100%;
justify-content:center;

`
const Wrapper= styled.div`

display:flex;
flex-wrap:wrap;

justify-content:space-between;
width:1200px;
@media (max-width:1200px){
    width:90%
}
@media (max-width:768px){
    flex-direction:column ;
    align-items:center
}
`
const Left= styled.div`
width:300px;
img{
    width:100%
}
@media (max-width:340px){
    width: 280px;
overflow:hidden ;

    img{
        width:100%;
    }
}

`
const Right= styled.div`
flex:0.7;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
text-align:center;

span{
    font-weight:500;
    font-size:20px;
    color:#0fa5e9
}
`
const Top= styled.div`
font-size:3rem
`
const Mid= styled.div``
