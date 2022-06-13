import React from 'react'
import styled from "styled-components"
import  Card from "./Card"

const Process = (image, topics , descript) => {
  return (
    <Container>
        <Wrapper>

            {/* <Top>How I Work</Top> */}
        <Card image="/images/work.svg" topics = "Discover" descript="i consuct research to identify the problem i want to solve."/>
        <Card image ="/plan.svg" topics="Define"  descript="I brainstorm possible design solutions to the identified problem."/>
        <Card image ="/work-sketch.svg" topics = "Ideate" descript= "I create wireframes and sketches of the product I'm about to build"/>
        <Card  image ="/implement.svg"
        topics ="Implement" descript="After ideate, I move ahead to implementation"
        />
        </Wrapper>
    </Container>
  )
}

export default Process

const Container = styled.div`
display:flex;
justify-content:center;
align-items:center;
padding:30px
`
const Wrapper = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
flex-wrap:wrap ;
width:1000px

`
const Top = styled.div``