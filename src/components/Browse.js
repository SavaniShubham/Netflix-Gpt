
import Header  from './Header';

import useNowplayingmovies from "../customhooks/useNowplayingmovies";

const Browse = () => {

 //fetch data from movie api and update the store(using custom hook)
  useNowplayingmovies();


  return (
    <div>
      <Header/>
    
     </div>
  )
}

export default Browse;