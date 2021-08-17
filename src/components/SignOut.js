import React from "react";
// import firebase hooks
import { useAuthState } from "react-firebase-hooks/auth";
// import firebase components
import { auth } from "../Firebase.js";
// import css
import "./css/SignOut.css";

function SignOut() {
  const [user] = useAuthState(auth);

  return (
    user && (
      <button className="sign-out-button" onClick={() => auth.signOut()}>
        Sign Out
      </button>
    )
  );
}

export default SignOut;
