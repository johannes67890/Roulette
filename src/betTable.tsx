import React from "react";
import { Tiles } from "./components/Tiles";

const Button: React.FC<{ Style?: string; onClick?: () => unknown }> = ({
  children,
  onClick,
  Style,
}) => {
  return (
    <button
      className={`bg-${Style} border border-black text-white hover:bg-opacity-60 font-bold py-2 px-4 rounded-md`}
      onClick={() => {
        if (onClick) onClick();
      }}
    >
      {children}
    </button>
  );
};

function Table() {
  return (
    <div className="w-full mt-5">
      <div className="flex gap-2 m-3">
        <Button Style={"green"}>0</Button>
        <div className="grid grid-cols-9 flex-1 grid-rows-3 gap-2">
          {Tiles.slice(1).map((value, index) => (
            <Button key={index} Style={value.color}>
              {value.val}
            </Button>
          ))}
        </div>
      </div>
      <div className="m-3 grid grid-cols-3 grid-rows-1 gap-2">
        <Button Style={"black"}>1st Twelve</Button>
        <Button Style={"black"}>2nd Twelve</Button>
        <Button Style={"black"}>3rd Twelve</Button>
      </div>
      <div className="m-3 grid grid-cols-2 grid-rows-1 gap-2">
        <Button Style={"black"}>Odd</Button>
        <Button Style={"black"}>Even</Button>
      </div>
      <div className="m-3 grid grid-cols-3 grid-rows-1 gap-2">
        <Button Style={"red"}>Red</Button>
        <Button Style={"green"}>Green</Button>
        <Button Style={"black"}>Black</Button>
      </div>
    </div>
  );
}

export default Table;
