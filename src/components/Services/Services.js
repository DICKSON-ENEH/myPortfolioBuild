import React, {useEffect} from 'react'
import styled from "styled-components"
import Aos from "aos"

import "aos/dist/aos.css"
const Services = () => {
    
        useEffect(()=>{
            Aos.init({duration:1500})
        }, [])
  return (
    <Container data-aos="fade-up">
        <Wrapper>
            
            <Card>
                <Cardwrap>
                    <Image>
<img src ="/brackets.svg"/>
                    </Image>
                    <Head>Web Development</Head>
                    <Text>
                    I use various web technologies to develop attractive websites which converts visitors to customers. I develop creative and responsive website layouts.


                    </Text>
                </Cardwrap>
            </Card>
            <Card2>
                <Cardwrap>
                    <Image style ={{background:"#224555"}}>
<img src ="/react-logo.svg" style={{background:"#3d2d46"}}/>
                    </Image>
                    <Head>Mobile Development</Head>
                    <Text>
                    I use various mobile technologies to develop attractive websites which converts visitors to customers. I develop creative and responsive mobile devices.


                    </Text>
                </Cardwrap>
            </Card2>
            <Card3>
                <Cardwrap>
                    <Image>
<img src ="/graphics.svg"/>
                    </Image>
                    <Head>Ui/Ux design</Head>
                    <Text>
                    I work with certain design tools to create high-fidelity designs and prototypes. I design accessible and usable products which aid business growth.


                    </Text>
                </Cardwrap>
            </Card3>
           
        </Wrapper>
    </Container>
  )
}

export default Services

const Container = styled.div`
background:#10172a;
height:100%;
/* width:100%; */
display:flex;
justify-content :center;
color:#fff;
font-family:poppins ;
margin-top:20px;
padding:20px;
overflow:hidden;
`

const Wrapper = styled.div`
width:1200px;
display:flex;
justify-content:space-between;
align-items:center;
flex-wrap:wrap;
@media (max-width:768px){
    justify-content:center;
}

`
const Card = styled.div`
width:370px;
height:250px;
margin-bottom:20px;
background: #1e293b;
border-radius:5px;
border-bottom:solid 5px #e31f71;
display:flex;
align-items:center;
justify-content:center ;
:hover{
    cursor:pointer;
    transition:all 300ms ;
    transform:scale(1.05)
}
@media (max-width:500px){
    width:300px;
}
`
const Cardwrap = styled.div`
width:350px;
@media (max-width:500px){
    width:270px;
}
`
const Image = styled.div`
width:70px;
background:#462745;
display:flex;
justify-content:center;
align-items:center;
height:70px;
border-radius:50%;
margin-bottom:10px;
`
const Text = styled.div``
const Head = styled.div`
font-weight:bold;
font-size:20px;
`
const Card2= styled.div`
width:370px;
height:250px;
background: #1e293b;
border-radius:5px;
border-bottom:solid 5px #00aeff;
display:flex;
margin-bottom:20px;

align-items:center;
justify-content:center ;
:hover{
 
    cursor:pointer;
    transition:all 300ms ;
    transform:scale(1.05)
}
@media (max-width:500px){
    width:300px;
}
`
const Card3= styled.div`
width:370px;
height:250px;
background: #1e293b;
border-radius:5px;
border-bottom:solid 5px #8838b4;
display:flex;
align-items:center;
margin-bottom:20px;

justify-content:center ;
:hover{
    cursor:pointer;
    transition:all 300ms ;
    transform:scale(1.05)
}
@media (max-width:500px){
    width:300px;
}
`