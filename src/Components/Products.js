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



const Products = () => {
  const navigate=useNavigate();
 
const {product,search}=useContext(mycontext)

  return (
    <div id='product-main'>
      <h1>OUR PRODUCTS</h1>
      
      { product.filter((item)=>{
        return search.toLowerCase() === " " ?item:item.name.toLowerCase().includes(search)
      }).map((item) => (


      <MDBCard id='card-form' className="d-inline-flex shadow p-3 mb-5 bg-body-tertiary rounded bg-image hover-zoom m-3" >

       <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay '>
      <MDBCardImage src={item.src} fluid alt='...' />
      </MDBRipple>
      <MDBCardBody>
      <MDBCardTitle> {item.name}</MDBCardTitle>
      <h5>Rs.{item.price}</h5>
      <MDBBtn onClick={()=>{navigate(`/Viewmore/ ${item.id}`)}}>View</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    
    ))}
        
        </div>
  )
}

export default Products