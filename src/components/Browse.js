import React from 'react';
import Header  from './Header';

import useNowplayingmovies from "../customhooks/useNowplayingmovies";
import Mainconatiner from './Mainconatiner';
import Secondarycontainer from './Secondarycontainer';

const Browse = () => {

 //fetch data from movie api and update the store(using custom hook)
  useNowplayingmovies();


  return (
    <div>
      <Header/> 
      <Mainconatiner/>
      {/* <Secondarycontainer/> */}
    
     </div>
  )
}

export default Browse;