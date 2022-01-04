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
          IfSetBalance(bet.includes(result), 14);
          break;
        case "green":
          IfSetBalance(bet.includes(result), 14, "green");
          break;
        case "red":
        case "black":
          IfSetBalance(result.color === bet[0].color, 0, "color");
          break;
        case "odd":
          IfSetBalance(result.val % 2 !== 0, 14, "odd");
          break;
        case "even":
          IfSetBalance(result.val % 2 === 0, 14, "even");
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
    <div className="flex bg-gray-500 gap-2 p-4">
      <span className="text-white">{BalancetoStringFromat(balance)}</span>
      <input
        min="0"
        value={bettingAmount}
        title="Betting amount on next roll"
        type="number"
        name="Betting Pot"
        style={{ WebkitAppearance: "textfield" }}
        className="bg-gray-500 appearance-none disabled:bg-blue-200 py-3 px-2 h-5 text-white"
        // disabled={balance < parseInt(bettingAmount) ? true : false}
        placeholder="Enter betting amount"
        onChange={(e) => {
          parseInt(e.target.value) >= balance
            ? console.log("over limit")
            : setBettingAmount(parseInt(e.target.value));
        }}
      />
      {RenderBettingBtn(balance, bettingAmount, setBettingAmount)}
    </div>
  );
};

export default Assets;
