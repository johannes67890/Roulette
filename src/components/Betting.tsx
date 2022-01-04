import React, { useEffect, useState, FC } from "react";
import { RenderBettingBtn, BalancetoStringFromat } from "../logic/Animations";
import { TileType } from "./Tiles";

const Assets: FC<{
  balance: number;
  setBalance: React.Dispatch<React.SetStateAction<number>>;
  result: TileType | undefined;
  bet: Array<TileType> | undefined;
  btnId: string | undefined;
}> = ({ balance, setBalance, result, bet, btnId }) => {
  let [bettingAmount, setBettingAmount] = useState<number>(0);

  useEffect(() => {
    console.log("result inside:", result?.val);
    console.log("bet:", bet);
    console.log("balance:", balance);
    console.log("balance:", bettingAmount);

    if (result !== undefined && bet !== undefined) {
      switch (btnId) {
        case "table":
          if (bet.includes(result)) {
            setBalance((balance += bettingAmount * 14));
            console.log("You Win on table");
          } else {
            setBalance((balance -= bettingAmount));
            console.log("You lost on table");
          }
          break;
        case "green":
          if (bet.includes(result)) {
            setBalance((balance += bettingAmount * 14));
            console.log("You Win on Green");
          } else {
            setBalance((balance -= bettingAmount));
            console.log("You lost on Green");
          }
          break;
        case "red":
        case "black":
          if (result.color === bet[0].color) {
            setBalance((balance += bettingAmount));
            console.log("You Win on the color you picked");
          } else {
            setBalance((balance -= bettingAmount));
            console.log("You Lost on the color you picked");
          }
          break;

        case "odd":
          if (result.val % 2 !== 0) {
            setBalance((balance += bettingAmount));
            console.log("You Win on odd");
          } else {
            setBalance((balance -= bettingAmount));
            console.log("You Lost on odd ");
          }
          break;
        case "even":
          if (result.val % 2 === 0) {
            setBalance((balance += bettingAmount));
            console.log("You Win on even");
          } else {
            setBalance((balance -= bettingAmount));
            console.log("You Lost on even");
          }
          break;
        case "1st":
        case "2nd":
        case "3rd":
          if (bet.includes(result)) {
            setBalance((balance += bettingAmount * 3));
            console.log("You Win on one of the twelve");
          } else {
            setBalance((balance -= bettingAmount));
            console.log("You lose on one of the twelve");
          }

          break;
        default:
          console.log("something went wrong!");
          break;
      }
    }
    return () => {
      setBettingAmount(0);
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
