import { Tiles } from "./Tiles";
import { FC } from "react";
import Button from "./Button";
import { TileType } from "./Tiles";

const Table: FC<{
  setBet: React.Dispatch<React.SetStateAction<TileType | undefined>>;
  setBtnId: React.Dispatch<React.SetStateAction<string | undefined>>;
}> = ({ setBet, setBtnId }) => {
  return (
    <div className="w-full mt-7">
      <div className="flex gap-2 m-3">
        <div className="grid grid-cols-9 flex-1 grid-rows-3 gap-2">
          {Tiles.slice(1).map((value, index) => (
            <Button
              onClick={() => {
                setBet(value);
                setBtnId("table");
              }}
              key={index}
              color={value.color}
              Toggleble={true}
            >
              {value.val}
            </Button>
          ))}
        </div>
      </div>

      <div className="m-3 grid grid-cols-3 grid-rows-1 gap-2">
        <Button color={"black"}>1st Twelve</Button>
        <Button color={"black"}>2nd Twelve</Button>
        <Button color={"black"}>3rd Twelve</Button>
      </div>
      <div className="m-3 grid grid-cols-2 grid-rows-1 gap-2">
        <Button color={"black"}>Odd</Button>
        <Button color={"black"}>Even</Button>
      </div>
      <div className="m-3 grid grid-cols-3 grid-rows-1 gap-2">
        <Button color={"red"}>Red</Button>
        <Button color={"green"}>0</Button>
        <Button color={"black"}>Black</Button>
      </div>
    </div>
  );
};

export default Table;
