import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import 'react-toastify/dist/ReactToastify.css';
const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const  [sendPasswordResetEmail, sending, error] =  useSendPasswordResetEmail(auth);
  const navigate = useNavigate();




  

  const handleSubmit = async (event) => {
    event.preventDefault();

    const success = await sendPasswordResetEmail(email);
    if (success) {
      toast("Sent email");
    }


    else if (email === '') {

      toast("Please enter email");


    }
    else if(error){

      <div>
        {toast(<p className='text-danger'>Error: {error.message}</p>)}
      </div>
    }
    else {
      toast("Sent mail");
    }
  
    
  }

  return (

    //   <Form onSubmit={handleSubmit} className='container' >
    //   <Form.Group className="mb-3" controlId="formBasicEmail">
    //     <Form.Label>Email address</Form.Label>
    //     <Form.Control onChange={(event) => setEmail(event.target.value)} type="email" className='w-25' placeholder="Enter email" />
    //     <Form.Text className="text-muted">
    //       We'll send you password reset link.
    //     </Form.Text>
    //   </Form.Group>


    //   <Button variant="primary" type="submit" className='w-25'>
    //     Submit
    //   </Button>
    // </Form>

    <div>

      <form onSubmit={handleSubmit} className="form-inline d-flex justify-content-center align-items-center align-content-center my-5">
        <div className="form-group mx-sm-3 mb-2">
          <label htmlFor="inputPassword2" className="sr-only fw-bolder">Reset Password</label>
          <input type="email" onChange={(event) => setEmail(event.target.value)} className="form-control w-100" id="inputPassword2" placeholder="Email" />
        </div>
        <button type="submit" className="btn btn-primary mt-3 mx-3">Send</button>
      </form>
    </div>


  );
}

export default ResetPassword;