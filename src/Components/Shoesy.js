import React ,{useContext}from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/ContextUser";
import { mycontext } from "../Context/Context";



const Shoesy = () => {
  // const {isLoggedIn}=useContext(UserContext);
  const{setSearch ,cartt,loginuser}=useContext(mycontext);
  const { isLoggedIn, userdata,   } = useContext(UserContext);
  
 
    const navigate=useNavigate();
    // const loggedInUser = userdata.find((user) => user.id === loggedInUserId);

    
  
  
  return (
    <div >
      
      <Navbar expand="lg" className="bg-body-tertiary  ">
        <Container fluid>
          <Navbar.Brand className="brand" href="#" onClick={()=>{navigate('/')}}>SHOEZY</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link  onClick={()=>{navigate("/men")}}>MEN</Nav.Link>
              <Nav.Link  onClick={()=>{navigate("/women")}}>WOMEN</Nav.Link>
              <Nav.Link  onClick={()=>{navigate("/products")}}>COLLECTION</Nav.Link>
              {/* <Nav.Link >LOOKBOOK</Nav.Link>
              <Nav.Link >SALE</Nav.Link> */}
            
            </Nav>
            <Form className="d-flex">
                <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
                >
              
                
              

             { isLoggedIn===true ?
                <div  className=" d-inline-flex">
                <Nav.Link  onClick={()=>{navigate('/profile')}}>{loginuser}  <i class="fa-solid fa-user">{userdata[userdata.length-1].firstname} </i></Nav.Link>
                <Nav.Link  onClick={()=>{navigate('/Cart')}}><i className="fa-solid fa-cart-shopping"><sup>{cartt.length}</sup></i></Nav.Link>
                </div> :
                <div className=" d-inline-flex">
                   <Nav.Link onClick={()=>{navigate('/login')}} >LOGIN</Nav.Link>
              
               </div> }
              
               
                </Nav>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e)=>{setSearch(e.target.value)}}
              />
              <Button className="btn-nav" variant="success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Shoesy;
