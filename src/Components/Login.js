// import React from "react";
// import {
//   MDBBtn,
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBCard,
//   MDBCardBody,
//   MDBInput,
//   MDBIcon,
//   MDBCheckbox
// }
// from 'mdb-react-ui-kit';
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { useContext } from "react";
// import { UserContext } from "../Context/ContextUser";


// const Login = () => {
//   const { userdata} = useContext(UserContext);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   const{isLoggedIn,setIsLoggedIn}=useContext(UserContext);

//  const handleClick = (e) => {
//   e.preventDefault();
//   userdata.forEach(element => {
//     if(element.email === email && element.password === password){
//       setIsLoggedIn(!isLoggedIn);
//       (navigate('/'))
//     }
//   });
//  }
//   return (
//     <div className="login" >
//       <form  onSubmit={handleClick}>
//           <MDBContainer fluid>

// <MDBRow className='d-flex justify-content-center align-items-center h-100'>
//   <MDBCol col='12'>

//     <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
//       <MDBCardBody className='p-5 w-100 d-flex flex-column'>

//         <h2 className="fw-bold mb-2 text-center">Sign in</h2>

//         <p className="text-50 mb-3 text-center"> Please enter your email and password!</p>

//         <MDBInput wrapperClass='mb-4 w-100' label='Email address' id='formControlLg' type='email' size="lg"   onChange={(e) => {
//                         setEmail(e.target.value);
//                       }} required/>
//         <MDBInput wrapperClass='mb-4 w-100' label='Password' id='formControlLg' type='password' size="lg"   onChange={(e) => {
//                         setPassword(e.target.value);
//                       }} required />

//         <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />

//         <MDBBtn size='lg'type="sumbit" >
//           Login
//         </MDBBtn>
//         <p className="text-50 mb-3 text-center"  onClick={()=>{navigate('/adminlogin')}} > Admin </p>

//         <hr className="my-4" />

//         <MDBBtn className="mb-2 w-100" size="lg" style={{backgroundColor: '#dd4b39'}}>
//           <MDBIcon fab icon="google" className="mx-2"/>
//           Sign in with google
//         </MDBBtn>

//         <MDBBtn className="mb-4 w-100" size="lg" style={{backgroundColor: '#3b5998'}}>
//           <MDBIcon fab icon="facebook-f" className="mx-2"/>
//           Sign in with facebook
//         </MDBBtn>

//       </MDBCardBody>
//     </MDBCard>

//   </MDBCol>
// </MDBRow>

// </MDBContainer>
// </form>

// </div>
  
   
//    );

//    }
  

// export default Login;

import React, { useState, useContext } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox
} from 'mdb-react-ui-kit';
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/ContextUser";

const Login = () => {
  const { userdata, setIsLoggedIn, setUserContext } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    const loggedInUser = userdata.find(
      (element) => element.email === email && element.password === password
    );

    if (loggedInUser) {
      setIsLoggedIn(true);
      setUserContext(loggedInUser.id); 
      navigate("/");
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleClick}>
      <MDBContainer fluid>

 <MDBRow className='d-flex justify-content-center align-items-center h-100'>
   <MDBCol col='12'>

     <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
       <MDBCardBody className='p-5 w-100 d-flex flex-column'>

         <h2 className="fw-bold mb-2 text-center">Sign in</h2>
         <p className="text-50 mb-3 text-center"> Please enter your email and password!</p>

       <MDBInput wrapperClass='mb-4 w-100' label='Email address' id='formControlLg' type='email' size="lg"   onChange={(e) => {
                        setEmail(e.target.value);
                      }} required/>
        <MDBInput wrapperClass='mb-4 w-100' label='Password' id='formControlLg' type='password' size="lg"   onChange={(e) => {
                        setPassword(e.target.value);
                      }} required />

        <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />



        <MDBBtn size='lg'type="sumbit" >
          Login
        </MDBBtn>
        <br />
        <p>please Singup if you don't have account </p>
        <MDBBtn size='lg'type="sumbit" onClick={()=>{navigate('/signup')}} >
        Singup
        </MDBBtn>
        <p className="text-50 mb-3 text-center"  onClick={()=>{navigate('/adminlogin')}} > Admin </p>

        <hr className="my-4" />

        <MDBBtn className="mb-2 w-100" size="lg" style={{backgroundColor: '#dd4b39'}}>
          <MDBIcon fab icon="google" className="mx-2"/>
          Sign in with google
        </MDBBtn>

        <MDBBtn className="mb-4 w-100" size="lg" style={{backgroundColor: '#3b5998'}}>
          <MDBIcon fab icon="facebook-f" className="mx-2"/>
          Sign in with facebook
        </MDBBtn>

      </MDBCardBody>
    </MDBCard>

  </MDBCol>
</MDBRow>

</MDBContainer>
      </form>
    </div>
  );
};

export default Login;
