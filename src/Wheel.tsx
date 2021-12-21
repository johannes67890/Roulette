import { Tiles } from "./Tiles";
import { useState, FC } from "react";
import $ from "jquery";
import Winner from "./Winner";

//https://css-tricks.com/restart-css-animation/

let resultIndex: number;
const App: FC<{
  setResult: React.Dispatch<React.SetStateAction<number | undefined>>;
}> = ({ setResult }) => {
  const [IsSpin, setIsSpin] = useState<Boolean>(false);

  return (
    <>
      <div className="overflow-hidden mx-auto max-w-7xl">
        <div
          style={{ width: "640px" }}
          className="absolute border-r-4 h-12 max-w-7xl z-10 border-blue-600"
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
            {/*!!!!!!!!!!!!!!!!!!!! NEEDS A LOOP !!!!!!!!!!!!!!!!!!!!*/}
            {Tiles.map((index, key) => (
              <li
                key={key}
                className={`bg-${index.color} flex-none w-12 h-12 self-start text-center align-middle inline-block leading-10`}
              >
                <span className="align-middle text-white ">{index.val}</span>
              </li>
            ))}
            {Tiles.map((index, key) => (
              <li
                key={key}
                className={`bg-${index.color} flex-none w-12 h-12 self-start text-center align-middle inline-block leading-10`}
              >
                <span className="align-middle text-white ">{index.val}</span>
              </li>
            ))}
            {Tiles.map((index, key) => (
              <li
                key={key}
                className={`bg-${index.color} flex-none w-12 h-12 self-start text-center align-middle inline-block leading-10`}
              >
                <span className="align-middle text-white ">{index.val}</span>
              </li>
            ))}
          </ul>
        </div>
        <button
          id="spin"
          disabled={IsSpin === true ? true : false}
          onClick={() => {
            $("#window").css({
              right: "0",
            });
            /* Roll animation */
            resultIndex = getRandomInt(20, 56);
            let calculatedPosition =
              Tiles[resultIndex - 20].pos + getRandomInt(-18, 18); // ... + Tiles[resultIndex - 20].pos * getRandomInt(1, 2); // get pos from Tiles and add random miss-postion (for realisme)
            $("#window").animate(
              {
                right: calculatedPosition,
              },
              7500 //animation time
            );
            $("#spin").css("cursor", "not-allowed");

            /* Winning number animation */
            $("#winner").removeClass("animate-winner"); //remove class to reset animation
            $("#winner").hide(); //hide element

            /* Disable cursor */
            setTimeout(() => {
              $("#spin").css("cursor", "pointer");
              $("#window").css({
                right: "0",
              });
              setIsSpin(false);
            }, 12000);

            if (IsSpin === false) {
              setIsSpin(!IsSpin);
            }
            return setTimeout(() => {
              setResult(Tiles[resultIndex - 20].val);
            }, 8000);
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
                strokeWidth="4"
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
};

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

export default App;
