import React from "react";
// import firebase components
import firebase from "firebase/app";
import { auth } from "../Firebase.js";
// import css
import "./css/SignIn.css";

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <div className="sign-in">
      <button className="sign-in-button" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
      <p className="community-guidelines">
        Do not violate the community guidelines or you will be banned for life!
      </p>
    </div>
  );
}

export default SignIn;
