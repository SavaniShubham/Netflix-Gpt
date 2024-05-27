

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