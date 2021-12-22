import { FC } from "react";
import { TileType } from "./Tiles";

const Winner: FC<{ result: TileType | undefined }> = ({ result }) => {
  return (
    <>
      {result !== undefined ? (
        <div
          id="winner"
          className={`animate-winner absolute ml-96 top-48 overflow-hidden bg-${result.color} border-2 border-blue-300 rounded-md`}
        >
          <h1 className="flex text-3xl text-white font-bold justify-center items-center top-1/2">
            {result.val}
          </h1>
        </div>
      ) : null}
    </>
  );
};

export default Winner;
