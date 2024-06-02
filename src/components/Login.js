import React, { useRef, useState } from 'react';
import Header from '../components/Header';
import { checkvaliddata } from '../utils/validate';
import { createUserWithEmailAndPassword } from "firebase/auth";
import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
// import { useDispatch } from 'react-redux';
// import { adduser } from '../utils/userslice';

import {  updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { adduser} from '../utils/userslice';
import { BG_IMG, USER_AVATAR } from '../utils/constant';


const Login = () => {

  const [issign,setsign]=useState(true);
  const name = useRef(null);
  const email =useRef(null);
  const password =useRef(null);
  const [errormsg,seterrormsg]=useState(null);
  // const dispatch = useDispatch();

  const dispatch = useDispatch();

  const toggleform = ()=>
    {
        setsign(!issign);
    }
    const handlebtnclick=()=>
      {
        //validate the form data 
       console.log(email.current.value);
       console.log(password.current.value);

       const msg =checkvaliddata(email.current.value , password.current.value);
       seterrormsg(msg);

       if (msg) return;

       
       if(!issign)
        {

          //sign Up Logic
          createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
         .then((userCredential) => {
           // Signed up 
           const user = userCredential.user;
             //now update the user
             updateProfile(user , {
              displayName: name.current.value , photoURL: USER_AVATAR,
            }).then(() => {
              //also update the redux store data of user
              const {uid , email ,displayName , photoURL} = auth.currentUser;
              dispatch(adduser({uid : uid , email :email , displayName : displayName ,photoURL :photoURL}));

              // Profile updated!
             
            }).catch((error) => {
              // An error occurred
              seterrormsg(error.message);
            });

           console.log(user);
          //  dispatch(adduser(user));
        
           
         })
         .catch((error) => {
           const errorCode = error.code;
           const errorMessage = error.message;
           seterrormsg(errorCode + errorMessage);
           
          
         });
        }
        else
        {
           //sign in Logic
           signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
            // Signed in 
              const user = userCredential.user;
              console.log(user);
              //  dispatch(adduser(user));
             
              
                          })
           .catch((error) => {
              const errorCode = error.code;
                const errorMessage = error.message;
                seterrormsg(errorCode + errorMessage);
                });

        }
   
       
      
      }
  return (
    <div>
        <Header/>
       
            <div className=' absolute'>
            <div className=' absolute inset-0 bg-black bg-opacity-45'></div>
            <img  src={BG_IMG} alt='Background '></img>
            </div>
        
       
           
             <form onSubmit={(e)=>e.preventDefault()} className=' absolute w-1/4 p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-70'>
              <h1 className='mx-2 font-bold text-3xl pb-4'>{issign ? "Sign In":"Sign Up"}</h1>
              {!issign && <input ref={name} type='text' placeholder='Full Name'
                     className='p-4 mx-2 my-2 w-11/12 rounded-md bg-gray-900 border'/>}
               <input ref={email} type='text' placeholder='Email Address'
                     className='p-4 mx-2 my-2 w-11/12 rounded-md bg-gray-900 border'/>

              <input ref={password} type='password' placeholder='Password'
                      className='p-4 mx-2 my-2 w-11/12 rounded-md  bg-gray-900 border'/>
              <p className='p-2 text-red-800 font-bold text-lg'>{errormsg}</p>
              <button className='p-2 mx-2 my-2 bg-red-600 w-11/12 rounded-md'
              onClick={ ()=>{  handlebtnclick(); }}>{issign ? "Sign In":"Sign Up"}</button>
              <p className=' p-2 cursor-pointer' onClick={toggleform}>
              {issign ? "New to Netflix? Sign up now.":"Already Registered ? Sign In now."}</p>

             </form>
           

    </div>

   
  )
}

export default Login;
