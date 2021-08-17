import React from "react";
// import components
import SignOut from "./SignOut.js";
// import css
import "./css/Header.css";

function Header() {
  return (
    <header className="header">
      <h1>SuperChat</h1>
      <SignOut />
    </header>
  );
}

export default Header;
