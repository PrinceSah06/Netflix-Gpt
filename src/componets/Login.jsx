import React, { useRef, useState } from "react";
import Header from "./header";
import { checkValidation } from "../utils/validate.js";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
const login = () => {
  const [errorMassage, setErrorMassage] = useState(null);
  const [isSignInForm, setIsSignInForm] = useState(true);
  const dispatch = useDispatch();

  const navigete = useNavigate();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const toggelSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const HandelButtnClick = (e) => {
    const massage = checkValidation(
      email.current.value,
      password.current.value,
      name?.current?.value || ""
    );
    console.log("validation massage : ", massage);
    setErrorMassage(massage);

    if (massage) return;

    if (!isSignInForm) {
      console.log("inside !isSingINfOme block");
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          if (updateProfile)
            updateProfile(user, {
              displayName: name.current.value,
              photoURL: "https://example.com/jane-q-user/profile.jpg",
            })
              .then(() => {
                const { uid, email, displayName } = auth.currentUser;

                dispatch(
                  addUser({ uid: uid, email: email, displayName: displayName })
                );

                // Profile updated!
              
                // ...
              })
              .catch((error) => {
                // An error occurre pri2@gmail.com
                setErrorMassage(error);
                // ...
              });

          //if sucess
          // console.log(user);
     

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMassage(errorCode + " " + errorMessage);
          console.log(error);
          // ..
        });

      //sign up logic
    } else {
      // import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

      const auth = getAuth();
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ..
          console.log(user);
          navigete("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMassage(errorCode, "  " + errorMessage);
        });
      console.log("this is else part of  sing up");
    }
  };

  return (
    <div>
      <Header />

      <div className="absolute">
        <img
          alt="bg imag"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7d2359a4-434f-4efa-9ff3-e9d38a8bde7f/web/IN-en-20250707-TRIFECTA-perspective_4faa9280-a2c5-4e07-aafc-a45ce43fea09_large.jpg"
          srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/7d2359a4-434f-4efa-9ff3-e9d38a8bde7f/web/IN-en-20250707-TRIFECTA-perspective_4faa9280-a2c5-4e07-aafc-a45ce43fea09_large.jpg 2000w, https://assets.nflxext.com/ffe/siteui/vlv3/7d2359a4-434f-4efa-9ff3-e9d38a8bde7f/web/IN-en-20250707-TRIFECTA-perspective_4faa9280-a2c5-4e07-aafc-a45ce43fea09_medium.jpg 1279w, https://assets.nflxext.com/ffe/siteui/vlv3/7d2359a4-434f-4efa-9ff3-e9d38a8bde7f/web/IN-en-20250707-TRIFECTA-perspective_4faa9280-a2c5-4e07-aafc-a45ce43fea09_small.jpg 959w"
          aria-hidden="true"
          className="default-ltr-cache-19j6xtr"
        ></img>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="   my-36 mx-auto right-0 left-0    w-3/12 absolute  text-white bg-black/80  bg-opacity-80"
        action=""
      >
        <h1 className="py-4 font-bold text-5xl text-center ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            className="p-4 my-6  w-full bg-gray-800 "
            type="text"
            placeholder="Full Name"
          ></input>
        )}

        <input
          ref={email}
          className="    bg-gray-800 w-full p-4 my-4 "
          type="text"
          placeholder=" Enter your Email"
        ></input>

        <input
          ref={password}
          className="p-4 my-6  w-full bg-gray-800 "
          type="password"
          placeholder="Password"
        ></input>
        <p className="text-red-500 font-bold text-lg py-2">{errorMassage}</p>
        <button
          onClick={(e) => HandelButtnClick(e)}
          className="  cursor-pointer rounded-lg bg-red-700 p-4 my-6 w-full "
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 " onClick={() => toggelSignInForm()}>
          {" "}
          {isSignInForm
            ? "Are you New to Netflix  ?Sign up Now"
            : "Already Registerd? sign in  now..."}
        </p>
      </form>
    </div>
  );
}; //1:13 :41

export default login;
