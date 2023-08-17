import React, { useContext } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon,

} from "mdb-react-ui-kit";
import { UserContext } from "../Context/ContextUser";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Singup = () => {
  const { userdata, setUserdata } = useContext(UserContext);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserdata(
      (s) =>
        (s = [
          ...userdata,
          {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
            phonenumber:number,
          },
        ])
    );
    alert("user registration successfuly completed");
  };

  return (
    <div>
      
      <MDBContainer
        fluid
        className="p-4 background-radial-gradient overflow-hidden"
      ><form onSubmit={handleSubmit}>
        <MDBRow>
          <MDBCol md="6" className="position-relative">
            <div
              id="radius-shape-1"
              className="position-absolute rounded-circle shadow-5-strong"
            ></div>
            <div
              id="radius-shape-2"
              className="position-absolute shadow-5-strong"
            ></div>

            <MDBCard className="my-5 bg-glass">
              <MDBCardBody className="p-5">
                <h1>SIGNUP</h1>
                <br></br>
                <MDBRow>
                  <MDBCol col="6">
             
                  <MDBInput
                      wrapperClass="mb-4"
                      label="First name"
                      type="text"
                      value={userdata.firstname}
                      id="form1"
                      required
                      onChange={(e) => {
                        setFirstname(e.target.value);
                      }}
                      
                    />
             

                  </MDBCol>
                
                    
                  <MDBCol col="6">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Last name"
                      id="form2"
                      type="text"
                      onChange={(e) => {
                        setLastname(e.target.value);
                      }}
                      required
                    />
                  </MDBCol>
                </MDBRow>

                <MDBRow>
                  <MDBCol col="6">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="mobile number"
                      id="form1"
                      type="number"
                      onChange={(e) => {
                        setNumber(e.target.value);
                      }}
                      required
                    />
                  </MDBCol>
                  </MDBRow>

                <MDBInput
                  wrapperClass="mb-4"
                  label="Email"
                  id="form3"
                  type="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="form4"
                  type="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required
                />

                <div className="d-flex justify-content-center mb-4">
                  <MDBCheckbox
                    name="flexCheck"
                    value=""
                    id="flexCheckDefault"
                    label="Subscribe to our newsletter"
                    required
                  />
              
                </div>

                <MDBBtn className="w-100 mb-4" size="md" type='submit'  >
                  sign up
                </MDBBtn>

                <div className="text-center">
                  <p>or sign up with:</p>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="mx-3"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="facebook-f" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="mx-3"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="twitter" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="mx-3"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="google" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="mx-3"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="github" size="sm" />
                  </MDBBtn>
                </div>
                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBBtn  onClick={()=>{navigate('/login')}} className="me-2" >
                    GO TO LOGIN PAGE{" "}

                    <MDBIcon
                    onClick={()=>{navigate('/login')}}
                      icon="arrow-right"
                      size="big"
                      label="goto login -page"
                    />
                  </MDBBtn>
                  <MDBBtn  onClick={()=>{navigate('/')}} >
                    CONTINUE AS GUEST{" "}
                    <MDBIcon
                    onClick={()=>{navigate('/')}}
                      icon="arrow-right"
                      size="big"
                      label="goto login -page"
                    />
                  </MDBBtn>
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol
            md="6"
            className="text-center text-md-start d-flex flex-column justify-content-center"
          >
            <img
              className="sign-img"
              src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="shoes"
            ></img>
            <h3 className="px-3" style={{ color: "black" }}>
              WHERE EVER YOU GO I WILL BE THERE
            </h3>
          </MDBCol>
        </MDBRow>
        </form>
      </MDBContainer>
    </div>
  );
};

export default Singup;
