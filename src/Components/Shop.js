import React from "react";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";


const Shop = () => {
  const navigate=useNavigate()
  return (
    <>
      <div>
        <h1>SHOP NOW</h1>
        <MDBRow className="g-0 bg-light position-relative">
          <MDBCol md="6" className="mb-md-0 p-md-4 shop-item">
            <img
              src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-shop-men-image-thumbnail.jpg"
              className="w-100"
              alt="..."
            />
            <button className="custom-btn" onClick={()=>{navigate('/men')}}>SHOP MEN</button>
          </MDBCol>
          <MDBCol md="6" className="mb-md-0 p-md-4 shop-item">
            <img
              src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-shop-women-image-tumbnail.jpg"
              className="w-100"
              alt="..."
            />
            <button className="custom-btn"  onClick={()=>{navigate('/men')}} >SHOP WOMEN</button>
          </MDBCol>
        </MDBRow>
      </div>
    </>
  );
};

export default Shop;




