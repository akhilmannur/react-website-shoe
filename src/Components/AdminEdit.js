import React, { useContext, useState } from "react";
import { mycontext } from "../Context/Context";
import { useParams } from "react-router-dom";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
  MDBInput,
} from "mdb-react-ui-kit";

const AdminEdit = () => {
  const { product, setProduct } = useContext(mycontext);
  const { id } = useParams();
  const edit = product.filter((item) => item.id === parseInt(id));

  const [shoename, setShoename] = useState(edit.length > 0 ? edit[0].name : "");
  const [shoecata, setShoecata] = useState(edit.length > 0 ? edit[0].type : "");
  const [shoeprice, setShoeprice] = useState(
    edit.length > 0 ? edit[0].price : ""
  );
  const [isedit, setisedit] = useState(false);

  const confirmChange = () => {
    const updatedItem = product.map((item) =>
      item.id === parseInt(id)
        ? {
            ...item,
            name: shoename,
            price: shoeprice,
            type: shoecata,
          }
        : item
    );
    setProduct(updatedItem);
    alert("Updated item");
    setisedit(true);
  };

  const handleSelection = (event) => {
    setShoecata(event.target.value);
  };

  return (
    <div>
      <MDBCard
        id="card-form"
        className="d-inline-flex shadow p-3 mb-5 bg-body-tertiary rounded bg-image hover-zoom m-3"
      >
        <MDBRipple
          rippleColor="light"
          rippleTag="div"
          className="bg-image hover-overlay "
        >
          <MDBCardImage
            src={edit.length > 0 ? edit[0].src : ""}
            fluid
            alt="..."
          />
        </MDBRipple>
        <form className={!isedit ? "form-active" : ""}>
        <MDBCardBody>
  <MDBCardTitle>
    <div>
      <i onClick={() => setisedit(!isedit)}>Edit</i>
    </div>
  </MDBCardTitle>
  <label>SHOENAME</label>
  <MDBInput
    label='Shoename'
    type='text'
    placeholder={shoename}
    disabled={isedit}
    onChange={(e) => setShoename(e.target.value)}
  />
  <br />
  <br />
  <label>AMOUNT</label>
  <MDBInput
    label='Shoeprice'
    type='number'
    placeholder={shoeprice}
    disabled={isedit}
    onChange={(e) => setShoeprice(e.target.value)}
  >
    <h5>Rs.</h5>
  </MDBInput>
  <br />
  <br />
  <label>CATEGORY</label>
  <select disabled={isedit} onChange={handleSelection} value={shoecata}>
    <option value={'men'}>MEN</option>
    <option value={'women'}>WOMEN</option>
  </select>
  <br />
  <br />
  {!isedit ? (
    <MDBBtn onClick={() => confirmChange()}>CONFIRM</MDBBtn>
  ) : null}
</MDBCardBody>

        </form>
      </MDBCard>
    </div>
  );
};

export default AdminEdit;
