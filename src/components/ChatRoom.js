import React, { useRef, useState } from "react";
// import firebase hooks
import { useCollectionData } from "react-firebase-hooks/firestore";
// import firebase components
import firebase from "firebase/app";
import { auth, firestore } from "../Firebase.js";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

// import components
import ChatMessage from "./ChatMessage.js";
// import icons
import SendIcon from "@material-ui/icons/Send";
// import css
import "./css/ChatRoom.css";

function ChatRoom() {
  const scrollRef = useRef();
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);

  const [messages] = useCollectionData(query, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue("");
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="chat-room">
      <main className="messages">
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
        <span ref={scrollRef}></span>
      </main>

      <form className="message-form" onSubmit={sendMessage}>
        <input
          className="message-input"
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="Type a message"
        />

        <button className="send-button" type="submit" disabled={!formValue}>
          <SendIcon fontSize="large" />
        </button>
      </form>
    </div>
  );
}

export default ChatRoom;
