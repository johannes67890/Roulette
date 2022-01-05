import React, { useEffect, useState, FC } from "react";
import { BalancetoStringFromat } from "../logic/Data";
import { RenderBettingBtn } from "../logic/Renders";
import { TileType } from "./Tiles";

const Assets: FC<{
  balance: number;
  setBalance: React.Dispatch<React.SetStateAction<number>>;
  result: TileType | undefined;
  bet: Array<TileType> | undefined;
  btnId: string | undefined;
}> = ({ balance, setBalance, result, bet, btnId }) => {
  let [bettingAmount, setBettingAmount] = useState<number>(0);

  function IfSetBalance(arg: boolean, multiplyer: number, feedback?: string) {
    if (arg) {
      setBalance((balance += bettingAmount * multiplyer));
      console.log(`You win on ${feedback}`);
    } else {
      setBalance((balance -= bettingAmount));
      console.log(`You lose on ${feedback}`);
    }
  }

  useEffect(() => {
    //feedback for debugging and control
    console.log("result inside:", result?.val);
    console.log("bet:", bet);
    console.log("balance:", balance);
    console.log("balance:", bettingAmount);

    if (result !== undefined && bet !== undefined) {
      switch (btnId) {
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
  }, [result]); // fix bug and force render effect

  return (
    <div className="flex bg-gray-600 rounded-lg gap-2 p-4">
      <main className="flex gap-2.5 mx-auto">
        <div className="flex-col">
          <h2 className="text-white font-bold mb-1">Balance</h2>
          <span className="text-white">{BalancetoStringFromat(balance)}$</span>
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
                : setBettingAmount(parseInt(e.target.value));
            }}
          />
        </div>
        {RenderBettingBtn(balance, bettingAmount, setBettingAmount)}
      </main>
    </div>
  );
};

export default Assets;
