import { FC } from "react";
import $ from "jquery";
import { TileType } from "./Tiles";

const Winner: FC<{ result: TileType | undefined }> = ({ result }) => {
  $("#winner").addClass("animate-winner"); //add class to play animation
  $("#winner").show(); // show element
  console.log(result);
  return (
    <>
      {result !== undefined ? (
        <div
          id="winner"
          className={`animate-winner mx-auto overflow-hidden shadow-md bg-${result.color} border-2 shadow-yellow-300 border-yellow-300 rounded-md`}
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
