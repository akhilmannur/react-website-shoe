import React, { useContext } from 'react'
import { mycontext } from '../Context/Context';
import { useNavigate } from 'react-router-dom';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';
import Shoesy from './Shoesy';


const Men = () => { 
const values=useContext(mycontext)
const {product}=values
const data =product.filter((item) => item.type==="men")
const navigate=useNavigate();
return (
  <div>
     <Shoesy />
  <div id='product-main'>
  <h1>MEN'S COLLECTIONS </h1>
    
    { data.map((item) => (


    <MDBCard id='card-form' className="d-inline-flex shadow p-3 mb-5 bg-body-tertiary rounded bg-image hover-zoom" >

     <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay '>
    <MDBCardImage src={item.src} fluid alt='...' />
    </MDBRipple>
    <MDBCardBody>
    <MDBCardTitle> {item.name}</MDBCardTitle>
    <h5>Rs.{item.price}</h5>
    <MDBBtn  onClick={()=>{navigate(`/Viewmore/ ${item.id}`)}}>View</MDBBtn>
    </MDBCardBody>
  </MDBCard>
  
  ))}
    </div>
    </div>
  )
}

export default Men