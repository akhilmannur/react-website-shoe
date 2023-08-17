import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
const Footer = () => {
  return (
    <div>
      <MDBFooter
        bgColor="light"
        className="text-center text-lg-start text-muted"
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <MDBIcon className="me-4 text-reset" fab icon="facebook-f" />

            <MDBIcon className="me-4 text-reset" fab icon="twitter" />

            <MDBIcon className="me-4 text-reset" fab icon="google" />

            <MDBIcon className="me-4 text-reset" fab icon="instagram" />

            <MDBIcon className="me-4 text-reset" fab icon="linkedin" />

            <MDBIcon className="me-4 text-reset" fab icon="github" />
          </div>
        </section>

        <section className="">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <MDBIcon icon="gem" className="me-3" />
                  SHOEZY
                </h6>
                <p>WHERE EVER YOU GO I WILL BE THERE</p>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">SHOPS</h6>
                <p className="text-reset">SHOP MEN</p>
                <p className="text-reset">SHOP WOMEN</p>
                <p className="text-reset">LOOKBOOK</p>
                <p className="text-reset">SALE</p>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">ABOUT </h6>
                <p className="text-reset">OUR STORY</p>
                <p className="text-reset">OUR MATERIALS</p>
                <p className="text-reset">OUR VALUE</p>
                <p className="text-reset">SUSTAINABILITY</p>
                <p className="text-reset">MANUFACTURE</p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <MDBIcon icon="home" className="me-2" />
                  CALICUT,KERALA,INDIA
                </p>
                <p>
                  <MDBIcon icon="envelope" className="me-3" />
                 shoesyshoes@gmail.com
                </p>
                <p>
                  <MDBIcon icon="phone" className="me-3" /> 9605177652
                </p>
                <p>
                  <MDBIcon icon="print" className="me-3" /> 0495 - 2472600
                </p>
              </MDBCol>
              
            </MDBRow>
          </MDBContainer>


          
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2021 Copyright:
          <a className="text-reset fw-bold" href="https://www.instagram.com/shoesy2021/?hl=en">
           Shoesy.com
          </a>
        </div>
      </MDBFooter>
    </div>
  );
};

export default Footer;
