import React, { useState } from "react";
import NoteContext from "./noteContext";
const NoteState = (props) => {
  const [state, setState] = useState({
    name: "Rudranil",
    class: "5b"
  });
  let update = (param) => {
    setTimeout(() => {
      setState({
        name: param,
        roll: "14",
        class: "7A"
      });
    }, 1000);
  };
  return (
    <NoteContext.Provider value={{ state, update }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
