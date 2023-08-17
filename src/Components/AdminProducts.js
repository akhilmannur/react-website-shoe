import React, { useContext } from 'react'
import { mycontext } from '../Context/Context'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardImage,
    MDBBtn,
    MDBRipple
  } from 'mdb-react-ui-kit';

import { useNavigate } from 'react-router-dom';

const AdminProducts = () => {
  
    const navigate=useNavigate()

    const{product,setProduct}=useContext(mycontext)

    const deleteItem=(id) => {
        setProduct((d)=>d.filter((item)=>item.id !== id))
    }

 
   

  return (
    <div >
      
         <div id='product-main'>
      <h1>ALL PRODUCTS</h1>
      
      { product.map((item) => (


      <MDBCard id='card-form' className="d-inline-flex shadow p-3 mb-5 bg-body-tertiary rounded bg-image hover-zoom m-3" >

       <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay '>
      <MDBCardImage src={item.src} fluid alt='...' />
      </MDBRipple>
      <MDBCardBody>
      <MDBCardTitle> {item.name}</MDBCardTitle>
      <h5>Rs.{item.price}</h5>
      <MDBBtn className='me-2' onClick={()=>{deleteItem(item.id)}}>Delete</MDBBtn>
      <MDBBtn  className='me-2' onClick={()=>{navigate(`/adminedit/${item.id}`)} }>Edit</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    
    ))}
        
        </div>
    </div>
  )
}

export default AdminProducts