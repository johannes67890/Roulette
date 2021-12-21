import { FC } from "react";
import $ from "jquery";
const Winner: FC<{ result: number | undefined }> = ({ result }) => {
  $("#winner").addClass("animate-winner"); //add class to play animation
  $("#winner").show(); // show element

  return (
    <>
      {result !== undefined ? (
        <div
          id="winner"
          className={`animate-winner mx-auto overflow-hidden shadow-md bg-gray-600 border-2 border-yellow-300 rounded-md`}
        >
          <h1 className="flex text-3xl font-bold justify-center items-center top-1/2">
            {result}
          </h1>
        </div>
      ) : null}
    </>
  );
};

export default Winner;
