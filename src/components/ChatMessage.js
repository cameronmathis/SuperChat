import React from "react";
// import firebase components
import { auth } from "../Firebase.js";
// import alt image
import altImage from "../images/AltImage.jpg";
// import css
import "./css/ChatMessage.css";

function ChatMessage(props) {
  const { uid, text, displayName, createdAt, photoURL } = props.message;
  const log = {
    text: text,
    createdAt: createdAt,
  };
  console.log(log);
  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <div className={`message message-${messageClass}`}>
      <img
        className="message-image"
        src={
          photoURL || "https://api.adorable.io/avatars/23/abott@adorable.png"
        }
        alt={altImage}
      />
      <div className="message-words">
        <div className="message-info">
          <p className="message-author">{displayName}</p>
          <p className="message-date">
            {createdAt != null
              ? new Date(createdAt.seconds * 1000).toLocaleDateString("en-US")
              : ""}
          </p>
          <p></p>
        </div>
        <p className="message-text">{text}</p>
      </div>
    </div>
  );
}

export default ChatMessage;
