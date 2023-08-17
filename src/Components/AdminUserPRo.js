import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBreadcrumb,
  MDBBreadcrumbItem,



} from "mdb-react-ui-kit";
import { UserContext} from "../Context/ContextUser";
import { useContext } from "react";




const AdminUserPRo = () => {
  const {userdata}=useContext(UserContext);

  return (
    <div>
      <section style={{ backgroundColor: "#eee" }}>
        <MDBContainer className="py-5">
          <MDBRow>
            <MDBCol>
              <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
                <MDBBreadcrumbItem active>USER PROFILE</MDBBreadcrumbItem>
              </MDBBreadcrumb>
            </MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol lg="4">
              <MDBCard className="mb-4">
                <MDBCardBody className="text-center">
                  <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    className="rounded-circle"
                    style={{ width: "150px" }}
                    fluid
                  />
                  <p className="text-muted mb-1">OUR CUSTOMER</p>
                  <p className="text-muted mb-4">KERALA ,INDIA</p>
                  <div className="d-flex justify-content-center mb-2">
                   
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
 
            <div>
            <MDBCol lg="8">
              <MDBCard className="mb-4">
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>FullName</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                     {userdata[userdata.length-1].firstname}
                     {userdata[userdata.length-1].lastname}
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Email</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                      {userdata[userdata.length-1].email}
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Mobile</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                      {userdata[userdata.length-1].phonenumber}
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Mobile</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                      {userdata[userdata.length-1].password}
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol sm="3">
                    </MDBCol>
                    <MDBCol sm="9">
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            </div>
            

          </MDBRow>
        </MDBContainer>
      </section>
    </div>
  );
};

export default AdminUserPRo;