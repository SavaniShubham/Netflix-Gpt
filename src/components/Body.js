import React, { useEffect } from 'react'
import Login from './Login';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import Browse from './Browse';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { adduser, removeuser } from '../utils/userslice';

const Body = () => {
  const dispatch = useDispatch();

  useEffect(()=>
  {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //this part is called when signin/signup done 
       
        const {uid , email ,displayName} = user;
        dispatch(adduser({uid : uid , email :email , displayName : displayName }));
       
      } else {
        //this part is called when signed out done 
        // User is signed out
        dispatch(removeuser());
        
      }
    });
  })

    const approuter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>,
        },
        {
            path:"/browse",
            element:<Browse/>,
        },
    ]) 
      
  return (
    <div>
       <RouterProvider router={approuter} />
    </div>
  )
}

export default Body;
