import React from "react";
import "./App.css";
import Start from "./components/Start";
import StarWars from "./components/StarWars";
import LogIn from "./components/LogIn";
import FormDemos from "./components/FormDemos"

function App() {
  return (
    <div>
      <LogIn />
      <Start />
      <StarWars />
      <FormDemos />
    </div>
  );
}

export default App;
