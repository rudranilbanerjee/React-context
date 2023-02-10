import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/noteContext";
const Check = () => {
  const a = useContext(noteContext);
  // useEffect(() => {
  //   a.update();
  // }, []);
  return (
    <h1>
      Check {a.state.name + " " + a.state.roll}
      {a.update("Harry")}
    </h1>
  );
};
export default Check;
