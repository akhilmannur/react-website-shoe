import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

export default function Alertlogin() {
    const navigate=useNavigate()
  return (
    <div className='alert'>
    <div className='alert-card'>
    <MDBCard >
      <MDBCardBody>
        <MDBCardTitle>ALERT</MDBCardTitle>
        <MDBCardText>
          PLEASE LOGIN TO CONTINUE
        </MDBCardText>
        <MDBBtn onClick={()=>{navigate('/login')}}>GO TO LOGIN PAGE</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    </div>
    <div>
    <MDBCard className='alert-card'>
      <MDBCardBody>
        <MDBCardTitle>PLEASE SIGNUP IF YOU DONT HAVE ACCOUNT </MDBCardTitle>
        <MDBCardText>
         EXPLORE OUR CART
        </MDBCardText>
        <MDBBtn onClick={()=>{navigate('/signup')}}>GO TO SIGNUP PAGE</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    </div>
    </div>
  );
}