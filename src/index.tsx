import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { TileType } from "./components/Tiles";
import Wheel from "./components//Wheel";
import Winner from "./components/Winner";
import History from "./components/History";
import BetTable from "./components/BetTable";
import Assets from "./components/Betting";

const Index = () => {
  const [balance, setBalance] = useState<number>(10000); //start balance
  const [result, setResult] = useState<TileType | undefined>();
  const [bet, setBet] = useState<undefined | Array<TileType>>();
  const [btnId, setBtnId] = useState<string | undefined>();

  return (
    <React.StrictMode>
      <div className="max-w-7xl mx-auto">
        <Wheel setResult={setResult} />
        <Winner result={result} bet={bet} />
        <div className="flex flex-row">
          <History result={result} />
          <BetTable setBet={setBet} setBtnId={setBtnId} />
        </div>
        <Assets
          balance={balance}
          setBalance={setBalance}
          result={result}
          bet={bet}
          btnId={btnId}
        />
      </div>
    </React.StrictMode>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
