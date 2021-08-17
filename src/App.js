//import firebase components
import "firebase/firestore";
import "firebase/auth";
// import components
import Header from "./components/Header.js";
import Body from "./components/Body";
// import css
import "./css/App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
}

export default App;
