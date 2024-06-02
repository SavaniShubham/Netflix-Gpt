import React from 'react';
import Header  from './Header';

import useNowplayingmovies from "../customhooks/useNowplayingmovies";
import Mainconatiner from './Mainconatiner';
import Secondarycontainer from './Secondarycontainer';
import usePopularmovies from '../customhooks/usePopularmovies';
import useTopratedmovies from '../customhooks/useTopratedmovies';
import useUpcomingrmovies from '../customhooks/useUpcomingmovies';
import Gptsearch from './Gptsearch';
import { useSelector } from 'react-redux';

const Browse = () => {
  const showgptsearch  = useSelector(store =>store.gpt.showgptsearch );

 //fetch data from movie api and update the store(using custom hook)
  useNowplayingmovies();
  usePopularmovies();
  useTopratedmovies();
  useUpcomingrmovies();


  return (
    <div>
      <Header/> 
      {
        showgptsearch ? <Gptsearch/>: 
        <><Mainconatiner/>
        <Secondarycontainer/>
        </> 
      }
      
     
    
     </div>
  )
}

export default Browse;