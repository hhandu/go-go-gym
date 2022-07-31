import React from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';


const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});

    const [updateProfile, updating, updatingError] = useUpdateProfile(auth);
    
   

     const navigate = useNavigate;

     const navigateLogin =()=>{
         navigate('/login');
     }
     if (user) {
        navigate('/home');
     }
     const handleRegister = async(event)=>{
         event.preventDefault();
         const name = event.target.name.value;
         const email = event.target.email.value;
         const password =event.target.password.value;
         await createUserWithEmailAndPassword(email,password);
         await updateProfile({ displayName:name});
         alert('Updated profile');
     }

    return (
        <div className="bg-[url('https://i.ibb.co/bbN4rsv/Weight-lifting.webp.jpg')]  min-h-screen w-full bg-cover bg-center flex flex-col my-1">
            <div className='container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2'>
                <div className='bg-white px-6 py-8  text-black w-full'>
                    <h1 className="mb-8 text-3xl text-center">Please Register</h1>
                    <form onSubmit={handleRegister}>
                        <input className='form-control block w-full px-4 py-2 mb-3 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' type="text" name="name" id="" placeholder='Your Name' />
                        
                        <input  className='form-control block w-full px-4 py-2 mb-3 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' type="email" name="email" id="" placeholder='Email Address' required />

                        <input className='form-control block w-full px-4 py-2 mb-3 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' type="password" name="password" id="" placeholder='Password' required />
                        <input className='w-50 mx-auto mt-2 form-control block bg-blue-800 text-white w-full px-4 py-2 text-xl font-normal  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                            
                            type="submit"
                            value="Register" />
                    </form>
                    
                    <br />
                    <SocialLogin></SocialLogin>
                    <br />
                    <p>Already have an account? <Link to="/login" className='text-red-600 font-serif font-bold pt-2 pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
                </div>
                
            </div>
        </div>
    );
};

export default Register;