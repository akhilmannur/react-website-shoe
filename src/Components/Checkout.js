import React from "react";
import {
  MDBBtn,

  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRadio,
  MDBRow,

} from "mdb-react-ui-kit";

export default function Checkout() {
  return (
    <div>
        <h1>PAYMENT</h1>
    <section className="h-100 h-custom">
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">  
            <MDBCardBody className="p-4">
              <MDBRow>
                <MDBCol md="6" lg="4" xl="3" className="mb-4 mb-md-0">
                  <form>
                    <div className="d-flex flex-row pb-3">
                      <div className="d-flex align-items-center pe-2">
                        <MDBRadio
                          type="radio"
                          name="radio1"
                          checked
                          value=""
                          aria-label="..."
                        />
                      </div>
                      <div className="rounded border w-100 p-3">
                        <p className="d-flex align-items-center mb-0">
                          <MDBIcon
                            fab
                            icon="cc-mastercard fa-2x text-dark pe-2"
                          />
                          Credit Card
                        </p>
                      </div>
                    </div>
                    <div className="d-flex flex-row pb-3">
                      <div className="d-flex align-items-center pe-2">
                        <MDBRadio
                          type="radio"
                          name="radio1"
                          checked
                          value=""
                          aria-label="..."
                        />
                      </div>
                      <div className="rounded border w-100 p-3">
                        <p className="d-flex align-items-center mb-0">
                          <MDBIcon fab icon="cc-visa fa-2x text-dark pe-2" />
                          Debit Card
                        </p>
                      </div>
                    </div>
                    <div className="d-flex flex-row pb-3">
                      <div className="d-flex align-items-center pe-2">
                        <MDBRadio
                          type="radio"
                          name="radio1"
                          checked
                          value=""
                          aria-label="..."
                        />
                      </div>
                      <div className="rounded border w-100 p-3">
                        <p className="d-flex align-items-center mb-0">
                          <MDBIcon fab icon="cc-paypal fa-2x text-dark pe-2" />
                          PayPal
                        </p>
                      </div>
                    </div>
                  </form>
                </MDBCol>
                <MDBCol md="6" lg="4" xl="6">
                  <MDBRow>
                    <MDBCol size="12" xl="6">
                      <MDBInput
                        className="mb-4 mb-xl-5"
                        label="Name on card"
                        placeholder="John Smiths"
                        size="lg"
                      />
                      <MDBInput
                        className="mb-4 mb-xl-5"
                        label="Expiration"
                        placeholder="MM/YY"
                        size="lg"
                        maxLength={7}
                        minLength={7}
                      />
                    </MDBCol>

                    <MDBCol size="12" xl="6">
                      <MDBInput
                        className="mb-4 mb-xl-5"
                        label="Card Number"
                        placeholder="1111 2222 3333 4444"
                        size="lg"
                        minlength="19"
                        maxlength="19"
                      />
                      <MDBInput
                        className="mb-4 mb-xl-5"
                        label="Cvv"
                        placeholder="&#9679;&#9679;&#9679;"
                        size="lg"
                        minlength="3"
                        maxlength="3"
                        type="password"
                      />
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
                <MDBCol lg="4" xl="3">
                  <div
                    className="d-flex justify-content-between"
                    style={{ fontWeight: "500" }}
                  >
                    <p className="mb-2">Subtotal</p>
                    <p className="mb-2">$23.49</p>
                  </div>

                  <div
                    className="d-flex justify-content-between"
                    style={{ fontWeight: "500" }}
                  >
                    <p className="mb-0">Shipping</p>
                    <p className="mb-0">$2.99</p>
                  </div>

                  <hr className="my-4" />

                  <div
                    className="d-flex justify-content-between mb-4"
                    style={{ fontWeight: "500" }}
                  >
                    <p className="mb-2">Total (tax included)</p>
                    <p className="mb-2">$26.48</p>
                  </div>

                  <MDBBtn block size="lg">
                    <div className="d-flex justify-content-between">
                      <span>BUYNOW</span>
                      <span>$26.48</span>
                    </div>
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
       
        </MDBRow>
      </MDBContainer>
    </section>
    </div>
  );
}