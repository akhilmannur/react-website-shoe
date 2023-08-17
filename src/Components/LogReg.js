// import React from 'react'
// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Row from 'react-bootstrap/Row';

// const LogReg = () => {
//     const [validated, setValidated] = useState(false);

//     const handleSubmit = (event) => {
//       const form = event.currentTarget;
//       if (form.checkValidity() === false) {
//         event.preventDefault();
//         event.stopPropagation();
//       }
    
//       setValidated(true);
//     };
    
//   return (
//     <div className='main-logreg'>
//     <div className='singup'>
// <h1> SINGUP</h1>
//   <Form noValidate validated={validated} onSubmit={handleSubmit}>
//     <Row className="mb-3">
//       <Form.Group as={Col} md="4" controlId="validationCustom01">
//         <Form.Label>First name</Form.Label>
//         <Form.Control
//           required
//           type="text"
//           placeholder="First name"
//           defaultValue=""
//         />
//         <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//       </Form.Group>
//       <Form.Group as={Col} md="4" controlId="validationCustom02">
//         <Form.Label>Last name</Form.Label>
//         <Form.Control
//           required
//           type="text"
//           placeholder="Last name"
//           defaultValue=""
//         />
//         <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//       </Form.Group>
//       <Form.Group as={Col} md="4" controlId="validationCustomUsername">
//         <Form.Label>Username</Form.Label>
//         <InputGroup hasValidation>
//           <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
//           <Form.Control
//             type="text"
//             placeholder="Username"
//             aria-describedby="inputGroupPrepend"
//             required
//           />
//           <Form.Control.Feedback type="invalid">
//             Please choose a username.
//           </Form.Control.Feedback>
//         </InputGroup>
//       </Form.Group>
//     </Row>
//     <Row className="mb-3">
//       <Form.Group as={Col} md="6" controlId="validationCustom03">
//         <Form.Label>City</Form.Label>
//         <Form.Control type="text" placeholder="City" required />
//         <Form.Control.Feedback type="invalid">
//           Please provide a valid city.
//         </Form.Control.Feedback>
//       </Form.Group>
//       <Form.Group as={Col} md="3" controlId="validationCustom04">
//         <Form.Label>State</Form.Label>
//         <Form.Control type="text" placeholder="State" required />
//         <Form.Control.Feedback type="invalid">
//           Please provide a valid state.
//         </Form.Control.Feedback>
//       </Form.Group>
//       <Form.Group as={Col} md="3" controlId="validationCustom05">
//         <Form.Label>Zip</Form.Label>
//         <Form.Control type="text" placeholder="Zip" required />
//         <Form.Control.Feedback type="invalid">
//           Please provide a valid zip.
//         </Form.Control.Feedback>
//       </Form.Group>
//     </Row>
  
  
//     <Form.Group className="mb-3">
//       <Form.Check
//         required
//         label="Agree to terms and conditions"
//         feedback="You must agree before submitting."
//         feedbackType="invalid"
//       />
//     </Form.Group>
//     <Button type="submit">Submit form</Button>
//   </Form>
//   </div>

//       <div className='login'>
//         <h1>LOGIN</h1>
//       <Form>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control type="email" placeholder="Enter email" />
//         <Form.Text className="text-muted">
//           We'll never share your email with anyone else.
//         </Form.Text>
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control type="password" placeholder="Password" />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicCheckbox">
//         <Form.Check type="checkbox" label="Check me out" />
//       </Form.Group>
//       <Button variant="primary" type="submit">
//         Submit
//       </Button>
//     </Form>

//       </div>

//     </div>
//   )
// }

// export default LogReg