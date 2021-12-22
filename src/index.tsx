import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Wheel from "./Wheel";
import Winner from "./Winner";
import { TileType } from "./Tiles";

const Index = () => {
  const [result, setResult] = useState<TileType | undefined>();

  return (
    <React.StrictMode>
      <Wheel setResult={setResult} />
      <Winner result={result} />
    </React.StrictMode>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
