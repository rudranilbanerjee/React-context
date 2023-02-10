import React from "react";
// import "./App.css";
import NoteState from "./context/notes/NoteState";
import About from "./component/About";
const App = () => {
  return (
    <>
      <NoteState>
        <About />
      </NoteState>
    </>
  );
};

export default App;
