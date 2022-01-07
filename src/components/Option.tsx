import React, { FC, useState } from "react";
import Button from "./Button";
import { TileType } from "./Tiles";
import $ from "jquery";
const Option: FC<{
  setBalance: React.Dispatch<React.SetStateAction<number>>;
  setBet: React.Dispatch<React.SetStateAction<Array<TileType> | undefined>>;
}> = ({ setBalance }) => {
  const [usernav, setUsernav] = useState<boolean>(false); //state to control option navagation (open or closed)
  return (
    <>
      <Button
        style={{ float: "right", position: "relative" }}
        onClick={() => setUsernav(!usernav)}
      >
        <div className="h-7 w-7">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
            <path
              d="M39.139,26.282C38.426,25.759,38,24.919,38,24.034s0.426-1.725,1.138-2.247l3.294-2.415c0.525-0.386,0.742-1.065,0.537-1.684c-0.848-2.548-2.189-4.872-3.987-6.909c-0.433-0.488-1.131-0.642-1.728-0.38l-3.709,1.631c-0.808,0.356-1.749,0.305-2.516-0.138c-0.766-0.442-1.28-1.23-1.377-2.109l-0.446-4.072c-0.071-0.648-0.553-1.176-1.191-1.307c-2.597-0.531-5.326-0.54-7.969-0.01c-0.642,0.129-1.125,0.657-1.196,1.308l-0.442,4.046c-0.097,0.88-0.611,1.668-1.379,2.11c-0.766,0.442-1.704,0.495-2.515,0.138l-3.729-1.64c-0.592-0.262-1.292-0.11-1.725,0.377c-1.804,2.029-3.151,4.35-4.008,6.896c-0.208,0.618,0.008,1.301,0.535,1.688l3.273,2.4C9.574,22.241,10,23.081,10,23.966s-0.426,1.725-1.138,2.247l-3.294,2.415c-0.525,0.386-0.742,1.065-0.537,1.684c0.848,2.548,2.189,4.872,3.987,6.909c0.433,0.489,1.133,0.644,1.728,0.38l3.709-1.631c0.808-0.356,1.748-0.305,2.516,0.138c0.766,0.442,1.28,1.23,1.377,2.109l0.446,4.072c0.071,0.648,0.553,1.176,1.191,1.307C21.299,43.864,22.649,44,24,44c1.318,0,2.648-0.133,3.953-0.395c0.642-0.129,1.125-0.657,1.196-1.308l0.443-4.046c0.097-0.88,0.611-1.668,1.379-2.11c0.766-0.441,1.705-0.493,2.515-0.138l3.729,1.64c0.594,0.263,1.292,0.111,1.725-0.377c1.804-2.029,3.151-4.35,4.008-6.896c0.208-0.618-0.008-1.301-0.535-1.688L39.139,26.282z M24,31c-3.866,0-7-3.134-7-7s3.134-7,7-7s7,3.134,7,7S27.866,31,24,31z"
              fill="#FFFFFF"
            />
          </svg>
        </div>
      </Button>
      <div
        className={
          usernav
            ? "fixed inset-0 z-10 opacity-100 bg-opacity-40 bg-gray-800"
            : "fixed inset-0 z-10 opacity-0 h-0"
        }
        onClick={() => setUsernav(!usernav)}
      />
      <aside
        className={
          usernav
            ? "fixed right-0 bottom-0 w-80 h-full z-10 bg-gray-500 text-white border-l-2 p-4 border-blue-700 opacity-100 visible transition-opacity"
            : "fixed right-0 bottom-0 w-80 h-full z-10 bg-gray-500 hidden opacity-0"
        }
      >
        <div className="flex flex-col justify-center gap-4 py-16">
          <div className="text-center">
            <span className="font-bold text-2xl">Options</span>
          </div>
          <div>
            <div className="flex flex-col gap-1 border-2 border-red rounded-md p-3 bg-red bg-opacity-30 text-center">
              <h3 className="font-bold">Be Aware</h3>
              <span>
                These settings might brake the game if changed mid roll. Use
              </span>
              <text className="text-xs font-sans underline">
                Reload the page to refresh the game
              </text>
            </div>
          </div>
          <main className="flex flex-col font-bold gap-2">
            <div className="flex gap-2">
              <span>Set balance:</span>
              <input
                id="optionBalance"
                type="number"
                className="bg-gray-600 text-center w-30 disabled:bg-blue-200  h-5 "
                placeholder="Enter balance"
              />
            </div>
            <Button
              color="green"
              onClick={() => {
                let inputVal = $("#optionBalance").val();
                setBalance(Number(inputVal)); //sets balance to value from input
              }}
            >
              Submit
            </Button>
            <Button
              color="black"
              style={{ fontSize: "0.75rem" }}
              onClick={() => {
                setBalance(10000); //sets balance to default balance (10.000 by default)
              }}
            >
              Reset balance
            </Button>
          </main>
        </div>
      </aside>
    </>
  );
};

export default Option;
