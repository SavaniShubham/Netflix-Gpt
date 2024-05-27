import React, { useRef, useState } from 'react';
import Header from '../components/Header';
import { checkvaliddata } from '../utils/validate';

const Login = () => {

  const [issign,setsign]=useState(true);
  const name = useRef(null);
  const email =useRef(null);
  const password =useRef(null);
  const [errormsg,seterrormsg]=useState(null);
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
       
    

       //sign in //signup
      }
  return (
    <div>
        <Header/>
       
            <div className=' absolute'>
            <div className=' absolute inset-0 bg-black bg-opacity-45'></div>
            <img  src='https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/ca15fd28-b624-4852-8bfe-9cdd5c88475d/IN-en-20240520-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='Background '></img>
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
