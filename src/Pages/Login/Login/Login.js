import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
     let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      
      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
     
     
      if (user) {
        navigate('/home');
      }

      if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
      }

     

    const handleSubmit = event=>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password= passwordRef.current.value;
        
        signInWithEmailAndPassword(email, password);
    }

    const navigateRegister= event =>{
        navigate('/register');
    }

    const resetPassword = async() =>{
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        alert('Sent email');

    }
    return (
        <section>
            <div className='px-6 min-h-screen text-gray-800'>
                <div className='flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6'>
                    <div className='grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0'>
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" 
                        className='w-full' alt="" />
                    </div>
                    <div className='xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0'>
                        <h1 className='text-center text-5xl mb-7 '> Log In</h1>
                        <form onSubmit={handleSubmit}>
                        
                            <input ref={emailRef} className='form-control block w-full px-4 py-2 mb-3 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' type="email" name="email" id="" placeholder='Email Address' required />

                            <input ref={passwordRef} className='form-control block w-full px-4 py-2 mb-3 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' type="password" name="password" id="" placeholder='Password' required />
                            <input className='w-50 mx-auto btn btn-primary mt-2 form-control block bg-blue-800 text-white w-full px-4 py-2 text-xl font-normal  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                                type="submit"
                                value="Login" />
                        </form>
                        {errorElement}

                        <SocialLogin></SocialLogin>
                        
                        <br></br>
                        
                        <p className='my-3'>New to <span className='text-blue-700 font-bold '>GO GO GYM ?</span> <Link to ='/register' className='text-blue-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out' onClick={navigateRegister} >Please Register </Link></p>
                        <br />
                        <p className='my-3'>Forget Password ? <Link to ='/register' className='text-gray-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out' onClick={resetPassword} > <span className='text-blue-600'> Reset Password</span>  </Link></p>

                                                
            
                    </div>


                </div>

            </div>
            
        </section>
    );
};

export default Login;