import React, { FC, useContext } from "react";
import { TestContext } from "./Wheel";

const Test: FC<{ result: number | undefined }> = ({ result }) => {
  return (
    <div>
      <h2>
        test: <span>{result} </span>{" "}
      </h2>
      {console.log("test result: ", result)}
    </div>
  );
};

export default Test;
