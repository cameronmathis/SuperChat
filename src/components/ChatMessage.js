import React from "react";
// import firebase components
import { auth } from "../Firebase.js";
// import alt image
import altImage from "../images/AltImage.jpg";
// import css
import "./css/ChatMessage.css";

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;
  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <div className="messages">
      <div className={`message message-${messageClass}`}>
        <img
          className="message-image"
          src={
            photoURL || "https://api.adorable.io/avatars/23/abott@adorable.png"
          }
          alt={altImage}
        />
        <p className="message-text">{text}</p>
      </div>
    </div>
  );
}

export default ChatMessage;
