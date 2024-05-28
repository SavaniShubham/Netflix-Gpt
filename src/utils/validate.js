

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