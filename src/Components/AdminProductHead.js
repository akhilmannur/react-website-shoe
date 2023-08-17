
import React, { useState } from 'react';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';
import AdminProducts from './AdminProducts';
import AdminMen from './AdminMen';
import AdminWomen from './AdminWomen';

const AdminProductHead = () => {
   
    const [basicActive, setBasicActive] = useState('tab1');

    const handleBasicClick = (value) => {
      if (value === basicActive) {
        return;
      }
  
      setBasicActive(value);
    };
  return (
    <div>
       <>
      <MDBTabs className='mb-3'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
          ALL PRODUCTS
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
            MEN
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'}>
            WOMEN
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={basicActive === 'tab1'}>
            <AdminProducts />
        </MDBTabsPane>
        <MDBTabsPane show={basicActive === 'tab2'}>
            <AdminMen />
             </MDBTabsPane>
        <MDBTabsPane show={basicActive === 'tab3'}>
            <AdminWomen />
        </MDBTabsPane>
      </MDBTabsContent>
    </>
    </div>
  )
}

export default AdminProductHead