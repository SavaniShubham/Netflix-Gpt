import React from 'react'
import {  signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import  { useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { adduser, removeuser } from '../utils/userslice';
import { Logo } from '../utils/constant';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();
  const handlesignout= ()=>
    {
     
   signOut(auth).then(() => {
       // Sign-out successful.
      
       
   }).catch((error) => {
       // An error happened.
        });
    }  

    useEffect(()=>
      {
       const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            //this part is called when signin/signup done 
            const {uid , email ,displayName , photoURL} = user;
            dispatch(adduser({uid : uid , email :email , displayName : displayName ,photoURL :photoURL}));
            navigate("/browse"); //if user is already logged in it directly route to browse page and if user do signup/signup then also it route to browse page 
           
          } else {
            //this part is called when signed out done 
            // User is signed out
            dispatch(removeuser());
            navigate("/");//if user do logged out it directly route to Login page and if user try to goto directly browse page without doing signup/signin user also route to Login page
            
          }
        });

        return ()=> unsubscribe(); //this will call when component unmounts
      },[]);


  return (


    <div className='absolute w-screen px-28 top-2 z-10 flex justify-between  '>
      <img className='w-48' src={Logo} alt='Netflix logo'></img>

      {user && (<div className='flex pt-2' >
      <img className='w-12 h-12 mr-3 ' src={user?.photoURL} alt='Profile'></img>
            <button  onClick={handlesignout} className='font-semibold text-xl'>Sign Out</button>
       </div>)}
    </div>
  )
}


export default Header;

//if user is not null then signout will be displayed