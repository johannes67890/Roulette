import React from "react";
import { Tiles } from "./Tiles";
import { useState } from "react";
import $ from "jquery";

//https://css-tricks.com/restart-css-animation/
function App() {
  const [IsSpin, setIsSpin] = useState<Boolean>(false);
  return (
    <>
      <div className="overflow-hidden mx-auto max-w-7xl">
        <div
          style={{ width: "640px" }}
          className="absolute border-r-4 h-12 max-w-7xl z-10 border-indigo-800"
        ></div>
        <div
          id="window"
          style={{
            width: "5336px",
            right: 0,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <ul className={IsSpin === true ? "" : "flex animate-roll"}>
            {Tiles.map((index) => (
              <li
                className={`bg-${index.color} flex-none w-12 h-12 self-start text-center align-middle inline-block leading-10`}
              >
                <span className="align-middle text-white ">{index.val}</span>
              </li>
            ))}
            {Tiles.map((index) => (
              <li
                className={`bg-${index.color} flex-none w-12 h-12 self-start text-center align-middle inline-block leading-10`}
              >
                <span className="align-middle text-white ">{index.val}</span>
              </li>
            ))}
            {Tiles.map((index) => (
              <li
                className={`bg-${index.color} flex-none w-12 h-12 self-start text-center align-middle inline-block leading-10`}
              >
                <span className="align-middle text-white ">{index.val}</span>
              </li>
            ))}
          </ul>
        </div>
        <button
          onClick={() => {
            IsSpin === true ? spin() : setIsSpin(!IsSpin);
          }}
          className="flex mx-auto px-2 py-1 border-2 bg-blue-700 rounded-lg hover:bg-blue-400"
        >
          {IsSpin === true ? (
            <svg
              className="animate-spin mt-1 mr-2 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : null}
          <span className="font-mono text-lg">Spin</span>
        </button>
      </div>
    </>
  );
}

function spin() {
  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  $("#window").css({
    right: "0",
  });
  var resultIndex = getRandomInt(20, 53); // get random resultd

  let calculatedPosition = Tiles[resultIndex - 20].pos + getRandomInt(-18, 18); //get pos from Tiles and add random miss-postion (for realisme)
  $("#window").animate(
    {
      right: calculatedPosition,
    },
    7500 //animation time
  );
  // debuging
  console.log("pos: ", calculatedPosition);
  console.log("resultIndex: ", resultIndex);
  console.log("result: ", Tiles[resultIndex - 20]);
}

export default App;
