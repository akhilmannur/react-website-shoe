import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRipple,
  MDBRow,
  MDBTypography,
  MDBRadio,
  MDBBtnGroup,
}
 from "mdb-react-ui-kit";
import { useContext } from "react";

import { mycontext } from "../Context/Context";
import Shoesy from "./Shoesy";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartt ,setCartt} = useContext(mycontext);
  const navigate=useNavigate();

  const handleIncrement = (id) => {
 const updatedcart = cartt.map((item)=>{
  if (item.id===id){
    return{...item,qty: item.qty+1}
  }
  return item
 })
setCartt(updatedcart);

  }



  const handleDecrement = (id) =>{
    const  updatedcart = cartt.map((item)=>{
if(item.id ===id && item.qty >1){
  return{...item,qty:item.qty-1}
}return item


    })
  setCartt(updatedcart)
  }

  const deleteItem=(id) => {
    setCartt((i)=> i.filter((item)=> item.id !== id))
  }


  return (
    <div>
      <Shoesy />
      <section className="h-100 gradient-custom">
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center my-4">
            <MDBCol md="8">
              <MDBCard className="mb-4">
                <MDBCardHeader className="py-3">
                  <MDBTypography tag="h5" className="mb-0">
                    CART
                  </MDBTypography>
                </MDBCardHeader>

                {cartt.map((item) => (
                  <MDBCardBody key={item.id}>
                    <MDBRow>
                      <MDBCol lg="3" md="12" className="mb-4 mb-lg-0">
                        <MDBRipple
                          rippleTag="div"
                          rippleColor="light"
                          className="bg-image rounded hover-zoom hover-overlay"
                        >
                          <img src={item.src} className="w-100" alt="product" />
                          <a href="#!">
                            <div
                              className="mask"
                              style={{
                                backgroundColor: "rgba(251, 251, 251, 0.2)",
                              }}
                            ></div>
                          </a>
                        </MDBRipple>
                      </MDBCol>

                      <MDBCol lg="5" md="6" className=" mb-4 mb-lg-0">
                        <p>
                          <strong>{item.name}</strong>
                        </p>
                        <p>{item.type}</p>
                        <p>
                          Size:
                          <MDBBtnGroup>
                            <MDBRadio
                              btn
                              btnColor="secondary"
                              id="btn-radio"
                              name="options"
                              wrapperTag="span"
                              label="6"
                            />
                            <MDBRadio
                              btn
                              btnColor="secondary"
                              id="btn-radio2"
                              name="options"
                              wrapperClass="mx-2"
                              wrapperTag="span"
                              label="7"
                              defaultChecked
                            />
                            <MDBRadio
                              btn
                              btnColor="secondary"
                              id="btn-radio3"
                              name="options"
                              wrapperClass="mx-2"
                              wrapperTag="span"
                              label="8"
                            />
                             <MDBRadio
                              btn
                              btnColor="secondary"
                              id="btn-radio4"
                              name="options"
                              wrapperClass="mx-2"
                              wrapperTag="span"
                              label="9"
                            />
                             <MDBRadio
                              btn
                              btnColor="secondary"
                              id="btn-radio5"
                              name="options"
                              wrapperClass="mx-2"
                              wrapperTag="span"
                              label="10"
                            />
                          </MDBBtnGroup>
                        </p>

                        <MDBBtn
                       
                          wrapperProps={{ size: "sm" }}
                          wrapperClass="me-1 mb-2"
                          title="Remove item"
                          onClick={()=> deleteItem(item.id)} 
                        >
                          <MDBIcon  onClick={()=> deleteItem(item.id)}  fas icon="trash" />
                        </MDBBtn>

                        <br/>

                      
                        <MDBBtn block size="lg" onClick={()=>{navigate("/checkout")}}>
                          Go to checkout
                        </MDBBtn>
                      </MDBCol>

                      <MDBCol lg="4" md="6" className="mb-4 mb-lg-0">
                        <div
                          className="d-flex mb-4"
                          style={{ maxWidth: "300px" }}
                        >
                          <MDBBtn className="px-3 me-2"  onClick={()=>handleDecrement(item.id)}>
                            <MDBIcon fas icon="minus" />
                          </MDBBtn>

                          {/* <MDBInput
                            defaultValue={0}
                            type="number"
                            label="Quantity"
                          /> */}
                          <span>{item.qty}</span>

                          <MDBBtn className="px-3 ms-2" onClick={()=>handleIncrement(item.id)}>
                            <MDBIcon fas icon="plus" />
                          </MDBBtn>
                        </div>

                        <p className="text-start text-md-center">
                          <strong> Rs{item.price*item.qty}</strong>
                        </p>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                ))}
              </MDBCard>

              <MDBCard className="mb-4 mb-lg-0">
                <MDBCardBody>
                  <p>
                    <strong>We accept</strong>
                  </p>
                  <MDBCardImage
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                    alt="Visa"
                  />
                  <MDBCardImage
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                    alt="American Express"
                  />
                  <MDBCardImage
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                    alt="Mastercard"
                  />
                  <MDBCardImage
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                    alt="PayPal acceptance mark"
                  />
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <Footer />
    </div>
  );
};

export default Cart;
