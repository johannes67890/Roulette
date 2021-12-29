import React, { useEffect, useState, FC } from "react";
import { RenderBettingBtn, BalancetoStringFromat } from "../logic/Animations";

const Assets: FC<{
  balance: number;
  setBalance: React.Dispatch<React.SetStateAction<number>>;
}> = ({ balance, setBalance }) => {
  const [bettingAmount, setBettingAmount] = useState<number>(0);

  useEffect(() => {
    if (balance >= bettingAmount) {
      setBalance(balance - bettingAmount); // someting is wrong here
    } else {
      console.log("warning");
    }
  }, [bettingAmount]);

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
        onChange={(e) => setBettingAmount(parseInt(e.target.value))}
      />
      {RenderBettingBtn(bettingAmount, setBettingAmount)}
    </div>
  );
};

export default Assets;
