import React, { useContext } from 'react'
import AdminNav from './AdminNav'
import AdminSideNav from './AdminSideNav'

import Footer from './Footer'
import { mycontext } from '../Context/Context'
// import { useContext } from 'react'
import {
 MDBBtn,MDBIcon
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom'



const AdminHome = () => {
  const {adminloggedin}=useContext(mycontext);
  const navigate=useNavigate()
  return (
    
    <div>
      { adminloggedin===true?(<div>
        <h1>  PLEASE LOGIN TO CONTINUE </h1>
        <MDBBtn color='primary' onClick={()=>{navigate('/login')}}>GOTO LOGIN PAGE</MDBBtn>
        <MDBBtn  onClick={()=>{navigate('/')}} >
                    CONTINUE AS GUEST{" "}
                    <MDBIcon
                    onClick={()=>{navigate('/')}}
                      icon="arrow-right"
                      size="big"
                      label="goto login -page"
                    /></MDBBtn>
      </div>):(
      <div>
    <div className='sticky-top'>
    <AdminNav/>
    </div>
   <AdminSideNav/>

   
    <Footer/>
    </div> 
      )}
    </div>

  )
}

export default AdminHome