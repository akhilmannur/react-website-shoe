import React,{useContext} from 'react'

import {MDBBtn, MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
// import { mycontext } from '../Context/Context';
import { UserContext } from '../Context/ContextUser';

const AdminUserview = () => {
  const navigate=useNavigate()
  const {userdata}=useContext(UserContext)
  return (
    <div>
      { userdata.map((item)=>(
        <MDBListGroup style={{ minWidth: '22rem' }} light>
      <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
        <div className='d-flex align-items-center'>
          <img
            src='https://mdbootstrap.com/img/new/avatars/8.jpg'
            alt=''
            style={{ width: '45px', height: '45px' }}
            className='rounded-circle'
          />
          <div className='ms-3'>
          <p className='fw-bold mb-1'>{item.firstname} {item.lastname}</p>

            
            <p className='text-muted mb-0'>{item.email}</p>
          </div>
        </div>
        <MDBBtn size='sm' rounded color='link' onClick={()=>{navigate(`/adminuserpro/${item.id}`)}}>
          View
        </MDBBtn>
      </MDBListGroupItem>
    </MDBListGroup>
))}
    </div>

  )
}

export default AdminUserview