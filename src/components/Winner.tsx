import { FC } from "react";
import { TileType } from "./Tiles";

const Winner: FC<{ result: TileType | undefined }> = ({ result }) => {
  return (
    <>
      {result !== undefined ? (
        <div
          id="winner"
          className={`animate-winner absolute ml-96 top-48 overflow-hidden bg-${result.color} border-2 border-blue-700 rounded-md`}
        >
          <main className="flex whitespace-nowrap gap-2 flex-col justify-center py-5 items-center text-white">
            <h1 className="text-lg">The Winning number is </h1>
            <span className="text-3xl font-bold top-1/2">{result.val}</span>
          </main>
        </div>
      ) : null}
    </>
  );
};

export default Winner;
