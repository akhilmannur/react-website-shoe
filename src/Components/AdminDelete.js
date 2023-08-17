import React, { useContext } from 'react'

import {MDBBtn, MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import { mycontext } from '../Context/Context';
import AdminNav from './AdminNav';

    const AdminDelete = () => {
        const{product,setProduct}=useContext(mycontext)

        const deleteItem=(id) => {
            setProduct((d)=>d.filter((item)=>item.id !== id))
        }
    

  return (
    <div>
        <AdminNav /> 
    <div>
        { product.map((item) => (
        <MDBListGroup style={{ minWidth: '22rem' }} light>
      <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
        <div className='d-flex align-items-center'>
          <img
            src={item.src}
            alt=''
            style={{ width: '45px', height: '45px' }}
            className='rounded-circle'
          />
          <div className='ms-3'>
            <p className='fw-bold mb-1'>{item.name}</p>
            <p className='text-muted mb-0'>{item.price}</p>
          </div>
        </div>
        <MDBBtn size='sm' rounded color='link'  onClick={()=>{deleteItem(item.id)}}>
         DELETE
        </MDBBtn>
      </MDBListGroupItem>
    </MDBListGroup>
   )) }
    </div>
    </div>
  )
}

export default AdminDelete