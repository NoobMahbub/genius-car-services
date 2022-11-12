import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const SocialLogin = () => {
  const [signInWithGoogle, user,loading, error2] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1,loading1, error1] = useSignInWithGithub(auth);
  const navigate = useNavigate();



  if (user || user1) {
    navigate('/');
    toast(<div>
      <p className='text-success'>Logged in successfully</p>
    </div>);
  }
  if (error2 || error1) {

    toast(<p className='text-danger'>Error: {error2?.message} {error1?.message}</p>);

  }

  return (


    <div>
      <div className='d-flex align-items-center justify-content-center'>
        <div style={{ height: '1px' }} className='bg-primary w-50'></div>
        <p className='m-0 p-2 fw-bolder'>OR</p>
        <div style={{ height: '1px' }} className='bg-primary w-50'></div>

      </div>

      <button
        onClick={() => signInWithGoogle()}
        className='btn btn-white shadow-sm d-block mx-auto mb-2 w-75'>
        <div className='d-flex  justify-content-center align-content-center'>
          <FcGoogle size={25} /> <span className="mx-2">Login with Google</span>
        </div>
      </button>
      <button
        onClick={() => signInWithGithub()}
        className='btn btn-white shadow-sm d-block mx-auto mb-2 w-75'>
        <div className='d-flex justify-content-center align-content-center'>
          <BsGithub size={25} className="mx-2" />   Login with Github
        </div>
      </button>

    </div>

  );
};

export default SocialLogin;