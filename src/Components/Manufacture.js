import React from "react";
import { MDBBadge } from "mdb-react-ui-kit";

export default function Manufacture() {
  return (    
    <div className="row gx-lg-5" id="manufacture-main">
    <div>
    <h1 id="manufac">SEE HOW OUR SHOES ARE MADE</h1>
  </div>
  
      <div className="col-lg-6 mb-5"  >
        <div className="d-flex align-items-start">
          <div className="flex-shrink-0">
            <MDBBadge light="true" className="p-3 badge-primary rounded-4">
              <h6>01.</h6>
            </MDBBadge>
          </div>
          <div className="flex-grow-1 ms-4">
            <h5 className="fw-bold mb-1">Pet canvas</h5>
            <p className="text-muted mb-1">
              {" "}
              High-definition imagery printed onto a poly-cotton canvas and then
              hand-stretched onto a wooden frame to produce professional-looking
              results that are ready to hang..
            </p>
          </div>
        </div>
      </div>

      <div className="col-lg-6 mb-5">
        <div className="d-flex align-items-start">
          <div className="flex-shrink-0">
            <MDBBadge light="true" className="p-3 badge-primary rounded-4">
              <h6>02.</h6>
            </MDBBadge>
          </div>

          <div className="flex-grow-1 ms-4">
            <h5 className="fw-bold mb-1">Organic cotton</h5>
            <p className="text-muted mb-1">
              Introducing our exquisite collection of organic cotton fabric – a
              sustainable and eco-friendly choice for the conscious consumer.
              Crafted with care and respect for both the environment and your
              comfort, our organic cotton fabric offers a luxurious blend of
              style, softness, and sustainability.
            </p>
          </div>
        </div>
      </div>
      <div>
        <img
          src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-how-shoes-are-made-image.png"
          alt="shoe"
        />
      </div>
      <div className="col-lg-6 mb-5">
        <div className="d-flex align-items-start">
          <div className="flex-shrink-0">
            <MDBBadge light="true" className="p-3 badge-primary rounded-4">
              <h6>03.</h6>
            </MDBBadge>
          </div>

          <div className="flex-grow-1 ms-4">
            <h5 className="fw-bold mb-1">Algae foam + vegan glue</h5>
            <p className="text-muted mb-1">
              Introducing our revolutionary Algae Foam Collection, a
              cutting-edge innovation in sustainable materials paired with our
              vegan glue technology. Crafted with a commitment to environmental
              responsibility and cruelty-free practices, this combination offers
              a versatile and eco-friendly solution for various applications.
            </p>
          </div>
        </div>
      </div>

      <div className="col-lg-6 mb-5">
        <div className="d-flex align-items-start">
          <div className="flex-shrink-0">
            <MDBBadge light="true" className="p-3 badge-primary rounded-4">
              <h6>04.</h6>
            </MDBBadge>
          </div>
          <div className="flex-grow-1 ms-4">
            <h5 className="fw-bold mb-1">Upcycled plastic bottlesy</h5>
            <p className="text-muted mb-1">
              Introducing our Upcycled Plastic Bottle Collection – a testament
              to our dedication to sustainability and creativity. By
              transforming discarded plastic bottles into high-quality and
              functional products, we're reshaping the way you think about
              eco-friendly choices.
            </p>
          </div>
        </div>
      </div>
    </div>
    
  );
}
