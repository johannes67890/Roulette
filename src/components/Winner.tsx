import { FC } from "react";
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
              <ul className="flex-nowrap w-72 inline gap-2 text-xl flex-row">
                {bet?.map((value) => {
                  return (
                    <li
                      className={`m-1 text-center rounded-lg float-left font-light text-lg border w-6 p-0.5 bg-${value.color} drop-shadow-xl shadow-xl border-white`}
                    >
                      {value.val}
                    </li>
                  );
                })}
              </ul>
            </div>
          </main>
        </div>
      ) : null}
    </>
  );
};

export default Winner;
