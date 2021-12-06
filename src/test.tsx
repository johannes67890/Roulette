import React, { FC, useContext } from "react";
import { TestContext } from "./App";

const Test: FC<{ result: number | undefined }> = ({ result }) => {
  return (
    <div>
      <h2>test:</h2>
      <h2>{result}</h2>
      {console.log("test result: ", result)}
    </div>
  );
};

export default Test;
