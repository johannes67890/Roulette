import { useState, FC } from "react";
import { TileType } from "./Tiles";
import {
  CusorAnimation,
  RenderTiles,
  Spin,
  WinningNumAnimation,
} from "../logic/Renders";

const Wheel: FC<{
  setResult: React.Dispatch<React.SetStateAction<TileType | undefined>>;
}> = ({ setResult }) => {
  const [IsSpin, setIsSpin] = useState<boolean>(false);
  return (
    <>
      <div className="overflow-hidden mt-20">
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
            {RenderTiles(3) /* render tiles fra function */}
          </ul>
        </div>
        <button
          id="spin"
          onClick={() => {
            Spin(setResult, IsSpin, setIsSpin);
            WinningNumAnimation();
            CusorAnimation(setIsSpin);
          }}
          className="flex mx-auto px-5 py-1.5 my-2  text-white bg-blue-700 rounded-lg hover:bg-opacity-60"
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
          <span className="font-mono text-lg">Roll</span>
        </button>
      </div>
    </>
  );
};

export default Wheel;
