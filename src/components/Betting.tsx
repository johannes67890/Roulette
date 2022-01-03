import React, { useEffect, useState, FC } from "react";
import { RenderBettingBtn, BalancetoStringFromat } from "../logic/Animations";
import { TileType } from "./Tiles";

const Assets: FC<{
  balance: number;
  setBalance: React.Dispatch<React.SetStateAction<number>>;
  result: TileType | undefined;
  bet: TileType | undefined;
  btnId: string | undefined;
}> = ({ balance, setBalance, result, bet, btnId }) => {
  let [bettingAmount, setBettingAmount] = useState<number>(0);

  useEffect(() => {
    console.log("result inside:", result?.val);
    console.log("bet:", bet?.val);
    console.log("balance:", balance);
    console.log("balance:", bettingAmount);

    switch (btnId) {
      case "table":
        if (result?.val === bet?.val) {
          setBalance((balance += bettingAmount * 14));
          console.log("You Win on table");
        } else {
          setBalance((balance -= bettingAmount));
          console.log("You lost on table");
        }
        break;
      case "red":
        if (result?.color === bet?.color && balance >= bettingAmount) {
          setBalance((balance += bettingAmount));
          console.log("You Win on red");
        }
        break;
      default:
        console.log("something went wrong!");
        break;
    }

    return () => {
      setBettingAmount(0);
    };
  }, [result]);

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
