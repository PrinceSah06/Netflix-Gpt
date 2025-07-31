import React, { use } from "react";
import { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { toggleGptSearchView } from "../utils/gptSlice.js";
// import {unsubscribe}
import { useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice.js";
import { supportedLanguage } from "../utils/constent.js";
import { changeLanguage } from "../utils/configSlice.js";

const Header = () => {
  const navigate = useNavigate();
  const language = useSelector(state => state.config.language);

 const showGptSearch =useSelector(state=> state.gpt.showGptSearch)

   const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browser");
      } else {
        // User is signed out

        dispatch(removeUser());
        navigate("/");
      }
    });

    //unsubscribe when componets unmounts

    // return ()=>{  return unsubscribe()}
  }, []);

  const handelsignOut = () => {
  
    signOut(auth)
      .then(() => {
        navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
   const handelGpt = ()=>{
    dispatch(toggleGptSearchView())
console.log('here is handel gpt')

   }
   const handelLanguageChange=(e)=>{
    dispatch(changeLanguage(e.target.value) )
    

   }
  return (
    <div className="  flex justify-between z-10  w-screen absolute  px-8 py-2  bg-gradient-to-b from-black">
      <img
        className="w-44"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-01/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix Logo"
      />

      <div><div>

           {     showGptSearch &&   <select  onChange={handelLanguageChange}className="text-white p-2 bg-gray-900  m-2 ">
        {supportedLanguage.map((e)=>
          <option className="bg-black" key ={e.indentifier} value={e.indentifier}>{e.name}</option>)}


        </select>}
        <button  onClick={()=>handelGpt()}className="px-4 py-2 bg-purple-800 mx-2 rounded-xl my-2"> {showGptSearch ? 'home': 'Search GPT'} </button>
        <button
          onClick={() => handelsignOut()}
          className="border  m-4
    bg-amber-50  font-bold rounded-2xl p-2"
          alt="logo forn login"
        >
          {" "}
          Sign out
        </button></div>
      </div>
    </div>
  );
};

export default Header;
 