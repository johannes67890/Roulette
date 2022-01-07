import { FC } from "react";
import { RenderBettingTiles } from "../logic/Renders";
import { TileType } from "./Tiles";

const Winner: FC<{
  result: TileType | undefined;
  bet: TileType[] | undefined;
}> = ({ result, bet }) => {
  return (
    <>
      {result !== undefined ? (
        <div
          id="winner"
          className={`animate-winner absolute ml-96 top-48 overflow-hidden bg-${result.color} border-2 border-blue-700 rounded-md`}
        >
          <main className="flex whitespace-nowrap gap-2.5 flex-col justify-center py-5 items-center text-white">
            <h1 className="text-lg">The Winning number is </h1>
            <span className="text-3xl font-bold top-1/2">{result.val}</span>
            <div className="flex flex-col mx-4">
              <span className="text-xl mx-auto mb-2 left-1/2 justify-center align-middle">
                Your bet was the numbers
              </span>
              {RenderBettingTiles(bet) /* renders betting tiles */}
            </div>
          </main>
        </div>
      ) : null}
    </>
  );
};

export default Winner;
