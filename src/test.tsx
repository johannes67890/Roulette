import React from "react";
import { resultIndex } from "./App";
import { Tiles } from "./Tiles";
const Test = () => {
  return (
    <div>
      <h2>test</h2>
      <h2>{resultIndex} </h2>
      {console.log("test result: ", Tiles[resultIndex - 20])}
    </div>
  );
};

export default Test;
