import React, { useState, useContext } from "react";
import AdminNav from "./AdminNav";
import { MDBRow, MDBCol, MDBBtn, MDBInput, } from "mdb-react-ui-kit";
import { mycontext } from "../Context/Context";
import { useNavigate } from "react-router-dom";

const AdminAddProduct = () => {
  const [productname, setProductname] = useState();
  const [productamount, setProductamount] = useState();
  const [productcata, setProductcata] = useState("women");
  const [img, setImg] = useState("");

  const { product, setProduct } = useContext(mycontext);

  const navigate = useNavigate();
  const handleSelection = (event) => {
    setProductcata(event.target.value);
  };
  const addNewItem = () => {
    setProduct([
      ...product,
      {
        name: productname,
        price: productamount,
        src: img,
        category: productcata,
        id: productamount.length + 1,
      },
    ]);
    alert("item added successfully");
    navigate("/adminproduct");
  };
  return (
    <>
      <div>
        <AdminNav />
      </div>

      <div>
        <MDBRow className="g-0 bg-light position-relative ">
          <MDBCol md="6" className="mb-md-0 p-md-4">
            <img
              src="https://charlotte-stone.com/cdn/shop/files/Charlotte-Stone-About-1.jpg?v=1664488189&width=1500"
              className="w-50"
              alt="..."
            />
          </MDBCol>
          <MDBCol
            md="5"
            className="p-6 ps-md-6 d-flex align-items-center justify-content-center"
            id="view-right"
          >
            <div className="viewright-down">
              <div>
                <label>PRODUCT NAME</label>
                <MDBInput
                  type="text"
                  label="PRODUCT NAME"
                  onChange={(e) => setProductname(e.target.value)}
                />
              </div>

              <div>
                <label>CATEGORY</label>
                <select onChange={handleSelection}>
                  <option value={"men"}>MEN</option>
                  <option value={"women"}>WOMEN</option>
                </select>
              </div>

              <div></div>
              <div>
                <label>AMOUNT</label>
                <MDBInput
                  type="number"
                  label="AMOUNT"
                  onChange={(e) => setProductamount(e.target.value)}
                />
              </div>

              <div>
                <label>Image</label>
                <MDBInput
                  type="text"
                  label="IMAGE"
                  onChange={(e) => setImg(e.target.value)}
                />
              </div>
              <div>
                <MDBBtn size="sm" rounded color="link" onClick={()=>{addNewItem()}}>
                  ADD PRODUCT
                </MDBBtn>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </div>
    </>
  );
};

export default AdminAddProduct;
