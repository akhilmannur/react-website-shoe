import React,{useContext, useState} from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
   MDBBtn,


    MDBCollapse,
  } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import { mycontext } from '../Context/Context';


const AdminNav = () => {
    const [showBasic, setShowBasic] = useState(false);
    const {adminloggedin,setAdminLoggedIN}=useContext(mycontext);
    const navigate= useNavigate()
  return (
    <div>
          <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand >SHOEZYADMIN</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page'onClick={()=>{navigate('/adminhome')}} >
              HOME
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink onClick={()=>{navigate('/adminproduct')}} >PRODUCTS</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink  onClick={()=>{navigate('/adminmen')}}>MEN</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink  onClick={()=>{navigate('/admiwonmen')}} >WOMEN</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
          <MDBNavbarNav>
          <MDBNavbarItem>
              <MDBNavbarLink onClick={()=>{navigate('/')}} >VIEWSITE</MDBNavbarLink>
          </MDBNavbarItem>  
          <MDBBtn color='primary' onClick={()=>{
            navigate('/login');
            window.location.reload(false);
            setAdminLoggedIN(!adminloggedin);
           
          }}>LOGOUT</MDBBtn>    
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    </div>
  )
}

export default AdminNav