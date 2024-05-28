import React from 'react'
import {  signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
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

      <div className='flex pt-2' >
      <img className='w-12 h-12 mr-3 ' src="https://i.pinimg.com/564x/51/97/3b/51973b117680fd21b50841ab6644d311.jpg" alt='Profile'></img>
            <button  onClick={handlesignout} className='font-semibold text-xl'>Sign Out</button>
       </div>
    </div>
  )
}

// export const withsignoutbtn = (Header)=>
//   {
//     return(()=>
//     {
//     const navigate = useNavigate();
//         const handlesignout= ()=>
//           {
           
//          signOut(auth).then(() => {
//              // Sign-out successful.
//              navigate("/");
             
//          }).catch((error) => {
//              // An error happened.
//               });
//           }  

//       return(
//         <div className='flex justify-between '>
//             <div>
//             <Header/>
//             </div>
//             <div className='pr-24 pt-7 font-semibold text-xl' onClick={handlesignout}>
//             <button >Sign Out</button>
//             </div>
            
//         </div>
//       );
//     });

//   }

  //we create higher order function that add signout btn into Header component and use this into in browse component
  //in that also we do signout api call and navigate to signin page 

  // export const withsignoutbtn = (Header)=>
  //   {
  //   const Newcomponent = () =>
  //     {  
  //       const navigate = useNavigate();
  //       const handlesignout= ()=>
  //         { 
  //        signOut(auth).then(() => {
  //            // Sign-out successful.
  //            navigate("/");
             
  //        }).catch((error) => {
  //            // An error happened.
  //             });
  //         }  
  //       return(
  //             <div className=' flex justify-between' >
  //               <div>
  //             <Header/>
  //               </div>
  //             <div className=' pr-28 pt-7'>
  //             <button className='  font-semibold text-xl' onClick={handlesignout}>Sign Out</button> 
  //             </div>
  //             </div>  
  //       );
  //     }
  //     return Newcomponent;  
  //   }



export default Header;