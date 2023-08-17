import React, { useState } from "react";

import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBRow,
  MDBCol,
  MDBBadge,
  MDBBtn,
} from "mdb-react-ui-kit";

import AdminHomeSliding from "./AdminHomeSliding";
import AdminUserview from "./AdminUserview";
import { useNavigate } from "react-router-dom";
import AdminProductHead from "./AdminProductHead";

const AdminSideNav = () => {
  const [verticalActive, setVerticalActive] = useState("tab1");

  const handleVerticalClick = (value) => {
    if (value === verticalActive) {
      return;
    }

    setVerticalActive(value);
  };
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <MDBRow>
          <MDBCol size="3">
            <MDBTabs pills className="flex-column text-center">
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleVerticalClick("tab1")}
                  active={verticalActive === "tab1"}
                >
                  HOME
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleVerticalClick("tab2")}
                  active={verticalActive === "tab2"}
                >
                  USERS
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleVerticalClick("tab3")}
                  active={verticalActive === "tab3"}
                >
                  Add/Edit/Delete
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleVerticalClick("tab4")}
                  active={verticalActive === "tab4"}
                >
                  PRODUCTS
                </MDBTabsLink>
              </MDBTabsItem>
            </MDBTabs>
          </MDBCol>
          <MDBCol size="9">
            <MDBTabsContent>
              <MDBTabsPane show={verticalActive === "tab1"}>
                <h1>Home content</h1>
                <AdminHomeSliding />
              </MDBTabsPane>
              <MDBTabsPane show={verticalActive === "tab2"}>
                <h1>USERS LIST</h1>
                <AdminUserview />
              </MDBTabsPane>
              <MDBTabsPane show={verticalActive === "tab3"}>
                <h1>Add/Edit/Delete</h1>
                <MDBBtn
                  className="me-2"
                  onClick={() => {
                    navigate("/adminadd");
                  }}
                >
                  ADD
                  <MDBBadge className="ms-2" color="danger">
                    add
                  </MDBBadge>
                </MDBBtn>

                <MDBBtn
                  className="me-2"
                  onClick={() => {
                    navigate("/adminproduct");
                  }}
                >
                  {" "}
                  EDIT
                  <MDBBadge className="ms-2" color="danger">
                    edit
                  </MDBBadge>
                </MDBBtn>

                <MDBBtn>
                  DELETE
                  <MDBBadge
                    className="ms-2"
                    color="danger"
                    onClick={() => {
                      navigate("/admindelete");
                    }}
                  >
                    Delete
                  </MDBBadge>
                  
                </MDBBtn>
                </MDBTabsPane>

                <MDBTabsPane show={verticalActive === "tab4"}>
                  <AdminProductHead />
            
                
              
              </MDBTabsPane>
            </MDBTabsContent>
          </MDBCol>
        </MDBRow>
      </div>
    </div>
  );
};

export default AdminSideNav;
