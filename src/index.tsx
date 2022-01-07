import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { TileType } from "./components/Tiles";
import Wheel from "./components//Wheel";
import Winner from "./components/Winner";
import History from "./components/History";
import BetTable from "./components/BetTable";
import Assets from "./components/Betting";
import Option from "./components/Option";

const Index = () => {
  const [balance, setBalance] = useState<number>(10000); //start balance
  const [result, setResult] = useState<TileType | undefined>(); //result of rolled Tile
  const [bet, setBet] = useState<undefined | Array<TileType>>(); //users bet
  const [btnId, setBtnId] = useState<string | undefined>(); //button id for the clicked button for users bet

  return (
    <React.StrictMode>
      <Option setBalance={setBalance} setBet={setBet} />
      <div className="max-w-7xl mx-auto">
        <Wheel setResult={setResult} />
        <Winner result={result} bet={bet} />
        <div className="flex flex-row">
          <History result={result} />
          <BetTable setBet={setBet} setBtnId={setBtnId} />
        </div>
        <Assets
          setBet={setBet}
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
