import React from "react";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";

const About = () => {
  return (
    <div className="about-main">
      <h1 className="about">ABOUT US</h1>
      <div>
        <MDBRow className="g-0 bg-light position-relative">
          <MDBCol md="6" className="mb-md-0 p-md-4">
            <img
              src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-home-about-image.jpg"
              className="w-60"
              alt="..."
            />
          </MDBCol>
          <MDBCol md="6" className="p-4 ps-md-0">
            <h1 className="about-us">
              Selected materials designed for comfort and sustainability
            </h1>
            <p className="mt-2">
              Welcome to our shoe wonderland, where dreams are crafted into
              fashionable reality. Whether you seek chic elegance or comfortable
              practicality, we have the perfect pair to match your stride.
            </p>
            <h4 className="mt-1">where ever you go i will be there</h4>
          
          </MDBCol>
        </MDBRow>
      </div>
</div>
  );
};

export default About;
