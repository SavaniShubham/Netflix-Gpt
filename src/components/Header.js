import React from 'react'
import {  signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const handlesignout= ()=>
    {
     
   signOut(auth).then(() => {
       // Sign-out successful.
       navigate("/");
       
   }).catch((error) => {
       // An error happened.
        });
    }  
  return (


    <div className='absolute w-screen px-28 top-2 z-10 flex justify-between  '>
      <img className='w-48' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt='Netflix logo'></img>

      {user && (<div className='flex pt-2' >
      <img className='w-12 h-12 mr-3 ' src={user?.photoURL} alt='Profile'></img>
            <button  onClick={handlesignout} className='font-semibold text-xl'>Sign Out</button>
       </div>)}
    </div>
  )
}


export default Header;

//if user is not null then signout will be displayed