import React, { useState } from "react";
import Header from "./header";

const login = () => {
  const [isSignInForm,setIsSignInForm] = useState(true)

  const toggelSignInForm=()=>{
    setIsSignInForm(!isSignInForm)
    
  }
  return (
    <div >
        <Header />

      <div className="absolute" >
        <img
          alt="bg imag"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7d2359a4-434f-4efa-9ff3-e9d38a8bde7f/web/IN-en-20250707-TRIFECTA-perspective_4faa9280-a2c5-4e07-aafc-a45ce43fea09_large.jpg"
          srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/7d2359a4-434f-4efa-9ff3-e9d38a8bde7f/web/IN-en-20250707-TRIFECTA-perspective_4faa9280-a2c5-4e07-aafc-a45ce43fea09_large.jpg 2000w, https://assets.nflxext.com/ffe/siteui/vlv3/7d2359a4-434f-4efa-9ff3-e9d38a8bde7f/web/IN-en-20250707-TRIFECTA-perspective_4faa9280-a2c5-4e07-aafc-a45ce43fea09_medium.jpg 1279w, https://assets.nflxext.com/ffe/siteui/vlv3/7d2359a4-434f-4efa-9ff3-e9d38a8bde7f/web/IN-en-20250707-TRIFECTA-perspective_4faa9280-a2c5-4e07-aafc-a45ce43fea09_small.jpg 959w"
          aria-hidden="true"
          className="default-ltr-cache-19j6xtr"
        ></img>
      </div>
      <form  className='   my-36 mx-auto right-0 left-0    w-3/12 absolute  text-white bg-black/80  bg-opacity-80'action="">
      <h1 className="py-4 font-bold text-5xl text-center ">{isSignInForm ?'Sign In' : 'Sign Up'}</h1>
        

          { !isSignInForm&& <input
          className="p-4 my-6  w-full bg-gray-800 "
          type="text"
          placeholder="Full Name"
        ></input>}
        
        <input className="    bg-gray-800 w-full p-4 my-4 " type="text" placeholder=" Enter your Email"></input>
       
     <input
          className="p-4 my-6  w-full bg-gray-800 "
          type="password"
          placeholder="Password"
        ></input>
        <button className="  cursor-pointer rounded-lg bg-red-700 p-4 my-6 w-full ">{isSignInForm ?'Sign In' : 'Sign Up'}</button>
        <p className="py-4 " onClick={()=>toggelSignInForm()}>  {isSignInForm ?'Are you New to Netflix  ?Sign up Now' : 'Already Registerd? sign in  now...'}</p>
      </form>
    </div>
  );
}; //1:13 :41

export default login;
