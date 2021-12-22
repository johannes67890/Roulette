import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Wheel from "./Wheel";
import Winner from "./Winner";
import { TileType } from "./Tiles";
import History from "./History";
import Test from "./Test";

const Index = () => {
  const [result, setResult] = useState<TileType | undefined>();

  return (
    <React.StrictMode>
      <div className="max-w-7xl mx-auto">
        <Wheel setResult={setResult} />
        <Winner result={result} />
        <div className="flex flex-row">
          <History result={result} />
          <Test />
        </div>
      </div>
    </React.StrictMode>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
