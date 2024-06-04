

 export const checkvaliddata = ( email , password)=>{
   
   //  const isnamevalid =/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
    const isemailvalid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const ispasswordvalid =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

   //  if(!isnamevalid) return "Name is not valid";
    if(!isemailvalid) return "Email is not valid";
    if(!ispasswordvalid) return"Password is not valid";

     return null;
}

//we use regex email validation expression .test(email) for check the email is valid or not
//we use regex passwoord validation expression .test(password) for check the password is valid or not
//same we can do for name also
//we use useRef() hook for getting the data(referencing the data) from inputbox (we can also do it with local variable but when you don't need to use of the storage data the use useRef() hook inlike button value , input value etc.. ) 
//form alwalys submit and page reloaded we you click on the submit btn of form for not reloaded the page every time when submit the btn write e.prventDefault() at form



//set up firebase (it use for backend of the app) after all the set up (carefully do that) deploy the app into firebase
//now create sigin / signup logic (therefore copy-paste the code of it from firebase authenetication documentation (password authe..)) do some changes in it (use can show that details in firebase -> authe..->users and in console also)
//now we push that user object (user all the data ) into redux 

//set up the redux the n add the user ojbect into redux thertefor two ways first - dispatch the action at signin/signup etc.. where you use /get the user . second - firebase give one more api onAuthStateChanged() it is called automatically whhne the some change /upadatation done withe authorization (in like signin/signup/sginout etc..) so  we call dispatch inside it ,we call it in inside userEccect in Body.js 

//one hook useNevigate() is given by the reat-router-dom it is use to navigate to that page/ component(we us it inside Login.js)

//crate signout as above in Header.js

//then we upadate the profile (with name and photo ) after the doing sign up (in the Login.js)
//in that we fix one issue - upadate the redux store data (before that our profilepic is not displayed)

//we do bug fix that if user is logged in it redirect to browse page from login page and vice versa (for that move useEffect()onauth to HEader  becuase we can't do nevigate from parent (aslo remove all the nevigate and just write it in onauth only) )

//now bulding the browse page therefre the data set up tmdb(in that do login , create app , and get access token )
//in tmdb -> documentation -> api refernece->movielist->nowplaying->fetch request (inn that whenever we do api call we always pass options copy paste it in constant )
//and then the fetch data in browse and upadte the store (crate movieslice and add data in it of nowplayingmovie)
//for simpilecity in  code create customhook (useNowolayingmovies) and use it in browse 

//create browse page   
//  mainconatiner
//   -videoBackground
//   -videotitle
//   -secondary conatiner
//    -movielist * n
//    -cards * n
//in mainconatiner -- (get from store movies ) pass title , overview in videotitle and id in videobackground
//in the videotitle display
//in the videobackground (do video api call and then add that into store and display this (embbed the youtube video ) )
//do css in it play the video in backgroud 
//for play the video automatically (add autoplay=1&&mute=1)

//buid seconary conatiner in the for fetching the data and store the data in redux store create custom hook call them and pass this data to create movielist and movicard
//do this for all category(now playing , popular , top rated , upcoming (fetch data from tmdb))

//now build the gpt featuree in app (build gptsearch -> gptsearchbar , gptmoviessuggestions)
//and make showgpttoggle in browse

//make the gpt page multi-langauage support 
//first make all the  variable constant and dynamic (constant-> support_lang , utils->languageconstant )
//then for select the language in header create selecte option formmaking this dynamic crate configslice and link this all thing and use this to gptsearch bar 

//first get api key from openai platform copy paste it in constant.js
//then as par documentation install npm openai and confiure it(openai.js)
//now get the response for the search write proprt prompt (gptquery) then pass it in the await (this code will copy-paste from documentation) //
//but this will not run give error (first error solve it by  dangerouslyAllowBrowser: true in openai.js)
//but in openai thhe apikey is not free and it is not working give error of (429 : no more cradit )


//so we use gemini api key 
//for that same as above get api key (from google develop studio ) and copy paste in constant
//then read documnetation first install npm @google/generative-ai and then do congigration in gemeniapi.js
//then as above pass gptquery in that funcation which is copy - patse from documentation
//now it will give response
//now fetch  and show the data  for that each movie in gptmoviesuggestion.js(therfore first put the data in gptslice to get the data in it)

//then we create moviedetail page (moviedetails.js->moviepage)(we don't create seperate page we do in this browse page only )
//for add the data in movecard we add handlefunction we store this data in redux store(movieslice->  moviepagedata ,showmoviedetails, moviecredit) and do change according it in header , browse component and usie this data in moviepage

//we do memolization (it means no make api call if we have already thata data in redux store ) therefore do some changes in all the component where you do api call

//make website responsive 
//in that md: is for desktop and default css is for mobile phone(small screen)
      