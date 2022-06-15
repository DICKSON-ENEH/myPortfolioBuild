import React from 'react'
import styled from "styled-components"
import { animateScroll as Scroll, Link } from "react-scroll";



const Portfolio = () => {
  return (
    <Div id="portfolio">
  <Top>Talk is cheap show me the code!</Top>
  <Container>
      <Wrapper>
          <Card>
                  <Image src="/sht.png"/>
              <Cardwrap>

                  <Topic>
 Food App
                  </Topic>
                  <Description>
Built an real life food App that help boosting the clients interaction and services/sales by 60%
i used the following technologies to achieve a good result :
mongoDB as a database, node/express js for backend services, reactjs as a frontend tools
payment intergratio(paystack),
Redux for state management

                  </Description>
              </Cardwrap>
          </Card>
          <Card>
                  <Image src="/sht.png"/>
              <Cardwrap>

                  <Topic>
 Food App
                  </Topic>
                  <Description>
Built an real life food App that help boosting the clients interaction and services/sales by 60%
i used the following technologies to achieve a good result :
mongoDB as a database, node/express js for backend services, reactjs as a frontend tools
payment intergratio(paystack),
Redux for state management

                  </Description>
              </Cardwrap>
          </Card>
      </Wrapper>
  </Container>
    </Div>
  )
}

export default Portfolio
const Div = styled(Link)`

display:flex;
justify-content:center;
flex-direction:column ;
align-items:center;
font-family:poppins;
color:#fff;
margin-top:20px;
height:100%;
width:100% ;

`
const Top = styled.div`
font-family:poppins;
font-size:2rem;
font-weight:bold ;
@media(max-width:768px){
    display:flex;
    justify-content:center;
    align-items:center;
    
    text-align:center;
}
`
const Container = styled.div`
display:flex;
justify-content:center;
align-items:center;
/* padding:30px; */

width:100% ;

`
const Wrapper = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
flex-wrap:wrap ;

/* width:1000px; */

overflow:hidden;

@media(max-width:768px){
    justify-content:center;
    overflow:hidden;
}
`
const Card = styled.div`
border-radius:5px;
background: #1e293b;
width:450px;
height:100%;
margin:20px;
@media (min-width:500px)and (max-width:768px){
    width:320px;
    overflow:hidden;

}

@media(max-width:470px){
    width:300px;
    overflow:hidden;    
}

`
const Cardwrap = styled.div`
padding:10px
`
const Image = styled.img`
width:450px;
border-top:5px ;
@media (min-width:500px)and (max-width:768px){
    width:300px;
    overflow:hidden;

    
    
};
@media(max-width:470px){
    width:280px;
}
`
const Topic = styled.div`
opacity:0.8;
font-weight:500;
font-size:1.5rem;

`
const Description = styled.div``