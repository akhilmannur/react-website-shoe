import React from 'react'
import Shoesy from './Shoesy'
import Slide from './Slide'
import Products from './Products'
import { Container } from 'react-bootstrap'
import Footer from './Footer'
import About from './About'
import Shop from './Shop'
import Manufacture from './Manufacture'







const Home = () => {
  return (
    <div>
      
       <div className='sticky-top'> <Shoesy /></div>
        <Slide />
       <Container>
        <Products />
       </Container> 
       < About /> 
       <Container>
       < Manufacture />
       </Container>
       <Shop /> 
       <Footer />
    

      
      
    </div>
  )
}

export default Home