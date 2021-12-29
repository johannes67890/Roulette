import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Wheel from "./components//Wheel";
import Winner from "./components/Winner";
import { TileType } from "./components/Tiles";
import History from "./components/History";
import Table from "./components/betTable";
import Assets from "./components/Betting";

const Index = () => {
  const [balance, setBalance] = useState<number>(10000);
  const [result, setResult] = useState<TileType | undefined>();

  return (
    <React.StrictMode>
      <div className="max-w-7xl mx-auto">
        <Wheel setResult={setResult} />
        <Winner result={result} />
        <div className="flex flex-row">
          <History result={result} />
          <Table />
        </div>
        <Assets balance={balance} setBalance={setBalance} />
      </div>
    </React.StrictMode>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
