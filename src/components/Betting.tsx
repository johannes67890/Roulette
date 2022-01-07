import React, { useEffect, useState, FC } from "react";
import { BalancetoStringFromat } from "../logic/Data";
import { RenderBettingBtn, RenderBettingTiles } from "../logic/Renders";
import { TileType } from "./Tiles";

const Assets: FC<{
  balance: number;
  setBalance: React.Dispatch<React.SetStateAction<number>>;
  setBet: React.Dispatch<React.SetStateAction<Array<TileType> | undefined>>;
  result: TileType | undefined;
  bet: Array<TileType> | undefined;
  btnId: string | undefined;
}> = ({ balance, setBalance, result, bet, btnId, setBet }) => {
  let [bettingAmount, setBettingAmount] = useState<number>(0); //users betting amount

  //function to check if bet includes the result result
  function IfSetBalance(arg: boolean, multiplyer: number, feedback?: string) {
    if (arg) {
      setBalance((balance += bettingAmount * multiplyer)); //sets balance to positive bettingAmount if bet includes the result result
      console.log(`You win on ${feedback}`);
    } else {
      setBalance((balance -= bettingAmount)); //sets balance to negativ bettingAmount if bet includes the result result
      console.log(`You lose on ${feedback}`);
    }
  }

  useEffect(() => {
    if (result !== undefined && bet !== undefined) {
      //checks if gotten result and bet from other components
      switch (btnId) {
        /* 
        Cases to compare bet with result. Returns setBalance() with negativ or positiv bettingAmount 
        (maybe include a multiplyer if bets right on green or one of the twelve) 
        */
        case "table":
          IfSetBalance(bet.includes(result), 14, "table");
          break;
        case "green":
          IfSetBalance(bet.includes(result), 14, "green");
          break;
        case "red":
        case "black":
          IfSetBalance(result.color === bet[0].color, 1, "color");
          break;
        case "odd":
          IfSetBalance(result.val % 2 !== 0, 1, "odd");
          break;
        case "even":
          IfSetBalance(result.val % 2 === 0, 1, "even");
          break;
        case "1st":
        case "2nd":
        case "3rd":
          IfSetBalance(bet.includes(result), 3, "twelve");
          break;
        default:
          //default error
          console.log("something went wrong!");
          break;
      }
    }
    return () => {
      setBettingAmount(0); //cleanup
    };
  }, [result]);

  return (
    <div>
      <div className="flex bg-gray-600 rounded-t-lg p-4 gap-2.5 mx-auto border-b border-blue-700">
        <main className="flex gap-2.5 mx-auto">
          <div className="flex-col">
            <h2 className="text-white font-bold mb-1">Balance</h2>
            <span className="text-white">
              {BalancetoStringFromat(balance)}$
            </span>
          </div>
          <div className="felx-col gap-2">
            <h2 className="text-white font-bold text-center  mb-1">Your bet</h2>
            <input
              min="0"
              value={bettingAmount}
              title="Betting amount on next roll"
              type="number"
              name="Betting Pot"
              style={{ WebkitAppearance: "textfield" }}
              className="bg-gray-600 text-center w-28 appearance-none disabled:bg-blue-200 py-3 px-2 h-5 text-white"
              placeholder="Enter bet"
              onChange={(e) => {
                parseInt(e.target.value) >= balance
                  ? console.log("over limit")
                  : setBettingAmount(parseInt(e.target.value)); //sets bettingAmount to inputs value
              }}
            />
          </div>
          {
            RenderBettingBtn(
              balance,
              bettingAmount,
              setBettingAmount
            ) /* renders quick acces betting buttons (10$, 20$, 100$, etc.) */
          }
        </main>
      </div>
      <div className="bg-gray-600 w-full rounded-b-lg h-24 py-3 px-6">
        {bet != undefined ? ( // display current bets
          <div className="flex flex-col">
            <div className="flex justify-center">
              <span className="text-center text-white font-bold text-xl gap-3">
                You current bet is the numbers
              </span>
              <div className="my-auto ml-4 block">
                <button
                  className="flex"
                  type="button"
                  onClick={() => setBet(undefined)}
                >
                  <button>
                    <div
                      className={
                        "transform rotate-45 -translate-x-0 translate-y-1 transition duration-300 w-4 h-0.5 bg-blue-500 my-1.5 rounded-md"
                      }
                    />
                    <div
                      className={
                        "transform -rotate-45 -translate-x-0.5  -translate-y-1 transition duration-300 w-5 h-0.5 bg-blue-500 my-1.5 rounded-md"
                      }
                    />
                  </button>
                  <button className="text-xs text-blue-500 font-bold">
                    Remove bet
                  </button>
                </button>
              </div>
            </div>
            <aside className="w-full">
              {RenderBettingTiles(bet, {
                //render current bett Tiles
                color: "white",
                width: "3.75rem",
              })}
            </aside>
          </div>
        ) : (
          <span className="text-3xl text-white align-middle justify-center">
            You have no current bet
          </span>
        )}
      </div>
    </div>
  );
};

export default Assets;
