import React from "react";
import "./App.css";
import Start from "./components/Start";
import StarWars from "./components/StarWars";
import LogIn from "./components/LogIn";

function App() {
  return (
    <div>
      <LogIn />
      <Start />
      <StarWars />
    </div>
  );
}

export default App;
