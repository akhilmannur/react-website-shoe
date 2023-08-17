import React, { useState } from 'react'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon
  }
  from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import { UserContext} from '../Context/ContextUser';
import { useContext } from 'react';
import { mycontext } from '../Context/Context';


const AdminLogin = () => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
    const navigate=useNavigate()
    const {admindata}=useContext(UserContext)
    const {adminloggedin,setAdminLoggedIN}=useContext(mycontext);

    const handleSubmit=(e)=>{
         e.preventDefault()
      admindata.forEach(element => {
        if(element.email===email && element.password===password){
            navigate('/adminhome');
            setAdminLoggedIN(!adminloggedin)
        }
        else {
            alert('Please provide valid data')
        }
        
      });


    }
  return (
    <div className='adminlog'>
    <form onSubmit={handleSubmit}>

<MDBContainer fluid>

<MDBRow className='d-flex justify-content-center align-items-center h-100'>
  <MDBCol col='12'>

    <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
      <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

        <h2 className="fw-bold mb-2 text-uppercase">ADMIN LOGIN</h2>
        <p className="text-white-50 mb-5">Please enter your login and password!</p>

        <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' id='formControlLg' type='email' size="lg" onChange={(e)=>{setEmail(e.target.value)}} required />
        <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg" onChange={(e)=>{setPassword(e.target.value)}} required />

        <p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
        <MDBBtn outline className='mx-2 px-5' color='white' size='lg' >
          Login
        </MDBBtn>

        <div className='d-flex flex-row mt-3 mb-5'>
          <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
            <MDBIcon fab icon='google' size="lg"/>
          </MDBBtn>
        </div>

    
      </MDBCardBody>
    </MDBCard>

  </MDBCol>
</MDBRow>

</MDBContainer>

</form>
    </div>
  )
}

export default AdminLogin