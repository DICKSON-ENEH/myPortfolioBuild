import React from 'react'
import styled from "styled-components"

const Card = ({image, topics , descript}) => {
  return (
    <Card2>
    <Cardwrap>
        <Image>
<img src ={image}/>
        </Image>
        <Head>{topics}</Head>
        <Text>
       {descript}


        </Text>
    </Cardwrap>
</Card2>
  )
}

export default Card

const Card2= styled.div`
width:200px;
height:150px;
background: #1e293b;
border-radius:5px;
font-family:poppins;
font-size:12px;
display:flex;
margin-bottom:20px;
color:#fff;
align-items:center;
justify-content:center ;
:hover{
 
    cursor:pointer;
    transition:all 300ms ;
    transform:scale(1.05)
}
`
const Cardwrap = styled.div`
width:180px;
display:flex;
justify-content:center;
/* align-items:center; */
flex-direction:column;
/* background:red; */
@media (max-width:500px){
    width:150px;
}
:hover{
    transition: all 300ms ;
    transform:scale(1.05);
    cursor:pointer
}
`
const Image = styled.div`
margin-bottom:10px;



`
const Text = styled.div`
opacity:0.9
`
const Head = styled.div`
font-weight:bold;
font-size:20px;
margin-bottom:10px
`