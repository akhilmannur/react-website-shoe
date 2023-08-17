import React, { useContext, useState } from "react";
import { mycontext } from "../Context/Context";
import { MDBRow, MDBCol,MDBIcon,MDBBtn,MDBInput} from "mdb-react-ui-kit";
import { useNavigate, useParams } from "react-router-dom";
import Shoesy from "./Shoesy";
import { UserContext } from "../Context/ContextUser";
import Footer from "./Footer";
 




const Viewmore = () => {
  const { product,cartt,setCartt } = useContext(mycontext);
  const { id } = useParams();
  const [count,setCount]=useState(1)
  const {isLoggedIn}=useContext(UserContext);
  const navigate=useNavigate();
  const dataa = product.filter((item) => item.id === parseInt(id));

 const  productid =()=>{
 if(cartt.includes(dataa[0])){
   alert("product is already added to cart")

 }
 else{
  setCartt(()=>[...cartt,...dataa]);
  console.log(cartt);
  alert("product succesffully added to your cart");
  
 }
}




  return (
    
    <div>
      <Shoesy/>
      {dataa.map((item) => (
        <div key={item.id}>
          <MDBRow className="g-0 bg-light position-relative" >
            <MDBCol md="6" className="mb-md-0 p-md-4">
              <img src={item.src} className="w-50" alt="..."   />
            </MDBCol>
            <MDBCol md="5" className="p-6 ps-md-6 d-flex align-items-center justify-content-center" id="view-right">
              <div className="viewright-down">
                <h1 className="mt-0">{item.name} link</h1>
                <h2>Rs{item.price}</h2>
                <h4>{item.discription}</h4>
             
             
                <div> 
                {isLoggedIn===true ?
                <div>
               <MDBBtn className='me-1' onClick={productid}>Add to cart</MDBBtn>
                <MDBBtn className="me-4" onClick={()=>{navigate("/checkout")}}>Buynow</MDBBtn>
                </div>:<div>
                <MDBBtn className='me-1' onClick={()=>{navigate('/alertlogins')}}>Add to cart</MDBBtn>
                <MDBBtn className="me-4" onClick={()=>{navigate('/alertlogins')}}>Buynow</MDBBtn>
                </div>
                 }
              <MDBCol lg="4" md="6" className="md-6 d-inline-flex">
                <div className="d-flex mb-6" style={{ maxWidth: "300px" }}>
                  <MDBBtn className="px-3 me-2" onClick={()=>{count>1? setCount((prev)=> prev-1):setCount(1); } }>
                    <MDBIcon fas icon="minus" />
                  </MDBBtn>

                  <MDBInput  type="number" label={count}  />

                  <MDBBtn className="px-3 ms-2" onClick={()=>{setCount((prev)=>prev+1)}}>
                    <MDBIcon fas icon="plus" />
                  </MDBBtn>
                </div>
                  </MDBCol>
                   </div>
              </div>  
           
            </MDBCol>
          </MDBRow>
          
        </div>
      ))}
       <Footer />
    </div>
   
  );
};

export default Viewmore;
