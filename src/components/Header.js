import React from 'react'
import {  signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import  { useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { adduser, removeuser } from '../utils/userslice';
import { Logo, SUPPORTED_LANG } from '../utils/constant';
import { toggleGptsearchview } from '../utils/gptslice';
import { changeLanguage } from '../utils/configslice';
import { togglemoviedetailsview } from '../utils/movieslice';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();
  const showgptsearch  = useSelector(store =>store.gpt.showgptsearch );
  const showmoviedetails = useSelector(store => store.movies.showmoviedetails);

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
      const handlegptsearch = ()=>
        {
          dispatch(toggleGptsearchview());
          showmoviedetails  && dispatch(togglemoviedetailsview());
        }
        const handlelangchange = (e)=>
          {
              dispatch(changeLanguage(e.target.value));
          }
          const handlebrowse = ()=>
            {
              showmoviedetails  && dispatch(togglemoviedetailsview());
            }


  return (


    <div className='absolute w-screen px-28 top-2 z-20 flex justify-between  '>
      <img className='w-48' src={Logo} alt='Netflix logo'></img>

      {user && (<div className='flex pt-2' >
          {showgptsearch &&
           (<select className=' p-2 m-2 h-12 bg-gray-800 text-white rounded-md' onChange={handlelangchange} >
                 {
                 SUPPORTED_LANG.map((lang)=>
                 <option 
                 key={lang.identifier} 
                 value={lang.identifier}>{lang.name}
                 </option> )
                 }
         </select>)}
        {showmoviedetails && <button className=' px-4 h-12 bg-green-700 my-2  mx-4 rounded-lg text-white'
        onClick={handlebrowse}>browse</button>}
        
        <button className=' px-4 h-12 bg-green-700 my-2  mx-4 rounded-lg text-white'
        onClick={handlegptsearch}>
          {showgptsearch ? "HomePage" : "GPT Search"}
          </button>
      <img className='w-12 h-12 mr-3 ' src={user?.photoURL} alt='Profile'></img>
            <button  onClick={handlesignout} className='font-semibold text-xl text-white'>Sign Out</button>
       </div>)}
    </div>
  )
}


export default Header;

//if user is not null then signout will be displayed