import React from "react";
// import firebase hooks
import { useAuthState } from "react-firebase-hooks/auth";
// import firebase components
import { auth } from "../Firebase.js";
// import components
import ChatRoom from "./ChatRoom.js";
import SignIn from "./SignIn.js";
// import css
import "./css/Body.css";

function Body() {
  const [user] = useAuthState(auth);

  return <section className="body">{user ? <ChatRoom /> : <SignIn />}</section>;
}

export default Body;
