import { Tiles } from "./Tiles";
import { FC } from "react";
import Button from "./Button";
import { TileType } from "./Tiles";
import { getTwelveNum } from "../logic/Data";

const BetTable: FC<{
  setBet: React.Dispatch<React.SetStateAction<Array<TileType> | undefined>>;
  setBtnId: React.Dispatch<React.SetStateAction<string | undefined>>;
}> = ({ setBet, setBtnId }) => {
  return (
    <div className="w-full mt-7">
      <div className="flex gap-2 m-3">
        <div className="grid grid-cols-9 flex-1 grid-rows-3 gap-2">
          {Tiles.slice(1).map(
            (
              value,
              index // gets all Tiles except 0 (green)
            ) => (
              <Button
                onClick={() => {
                  setBet([value]); //sets users bet
                  setBtnId("table"); //sets clicked btn
                }}
                key={index}
                color={value.color}
              >
                {value.val}
              </Button>
            )
          )}
        </div>
      </div>

      <div className="m-3 grid grid-cols-3 grid-rows-1 gap-2">
        <Button
          color={"black"}
          onClick={() => {
            setBet(getTwelveNum(1));
            setBtnId("1st");
          }}
        >
          1st Twelve
        </Button>
        <Button
          color={"black"}
          onClick={() => {
            setBet(getTwelveNum(2));
            setBtnId("2nd");
          }}
        >
          2nd Twelve
        </Button>
        <Button
          color={"black"}
          onClick={() => {
            setBet(getTwelveNum(3));
            setBtnId("3rd");
          }}
        >
          3rd Twelve
        </Button>
      </div>
      <div className="m-3 grid grid-cols-2 grid-rows-1 gap-2">
        <Button
          color={"black"}
          onClick={() => {
            setBet(Tiles.filter((e) => e.val % 2)); //gets all odd numbers from Tiles
            setBtnId("odd");
          }}
        >
          Odd
        </Button>
        <Button
          color={"black"}
          onClick={() => {
            setBet(Tiles.slice(1).filter((e) => e.val % 2 === 0)); //gets all even numbers from Tiles
            setBtnId("even");
          }}
        >
          Even
        </Button>
      </div>
      <div className="m-3 grid grid-cols-3 grid-rows-1 gap-2">
        <Button
          color={"red"}
          onClick={() => {
            setBet(Tiles.filter((e) => e.color === "red")); //gets all red Tiles
            setBtnId("red");
          }}
        >
          Red
        </Button>
        <Button
          color={"green"}
          onClick={() => {
            setBet([Tiles[0]]); //gets green Tile
            setBtnId("green");
          }}
        >
          0
        </Button>
        <Button
          color={"black"}
          onClick={() => {
            setBet(Tiles.filter((e) => e.color === "black")); //gets all black Tiles
            setBtnId("black");
          }}
        >
          Black
        </Button>
      </div>
    </div>
  );
};

export default BetTable;
