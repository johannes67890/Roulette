import { Tiles, TileType } from "../components/Tiles";
import $ from "jquery";
import Button from "../components/Button";
import crypto from "crypto";

let resultIndex: number;
const spinTime: number = 7500; //default: 7500
const intermissionTime: number = 9500; // default: 9500
const CursorDisabledTime: number = 12000; // default: 12000

export function Spin(
  setResult: React.Dispatch<React.SetStateAction<TileType | undefined>>,
  IsState: boolean,
  SetIsState: React.Dispatch<React.SetStateAction<boolean>>
) {
  if (IsState === false) {
    SetIsState(true);
  }
  /* Roll animation */
  $("#window").css({
    right: "0",
  });
  $("#window").animate(
    {
      right: getCalcPos(),
    },
    spinTime //animation time
  );
  setTimeout(() => {
    //set result to global state 1 sec after animation is done
    return setResult(Tiles[resultIndex - 20]);
  }, intermissionTime);
}

export function WinningNumAnimation() {
  /* Winning number animation */
  $("#winner").removeClass("animate-winner"); //remove class to reset animation
  $("#winner").hide(); //hide element
  setTimeout(() => {
    $("#winner").addClass("animate-winner"); //add class to play animation
    $("#winner").show(); // show element
  }, intermissionTime);
}

export function CusorAnimation(
  SetIsState: React.Dispatch<React.SetStateAction<boolean>>
) {
  $("#spin").css("cursor", "not-allowed");
  setTimeout(() => {
    $("#spin").css("cursor", "pointer");
    $("#window").css({
      right: "0",
    });
    SetIsState(false);
  }, CursorDisabledTime);
}

export function RenderTiles(sets: number) {
  //sets af Tiles
  let items: JSX.Element[][] = []; // Indeholder specifike Tiles. Retruner array af JSX elementet + .map funktionen

  for (let i = 0; i < sets; i++) {
    items.push(
      Tiles.map((index, key) => (
        <li
          key={key}
          className={`bg-${index.color} flex-none w-12 h-12 self-start text-center align-middle inline-block leading-10`}
        >
          <span className="align-middle text-white ">{index.val}</span>
        </li>
      ))
    );
  }
  return items;
}

export function RenderBettingBtn(
  balance: number,
  bettingAmount: number,
  setBettingAmount: React.Dispatch<React.SetStateAction<number>>
) {
  let bets = [25, 50, 100, 250, 1000];
  let betItems: JSX.Element[] = [];
  for (let i = 0; i < bets.length; i++) {
    betItems.push(
      <Button
        color="blue-700"
        onClick={() => setBettingAmount((bettingAmount += bets[i]))}
      >
        {bets[i]}
      </Button>
    );
  }
  betItems.push(
    <>
      <Button
        color="blue-700"
        onClick={() => setBettingAmount(bettingAmount / 2)}
      >
        1/2
      </Button>
      <Button
        color="blue-700"
        onClick={() => setBettingAmount(bettingAmount * 2)}
      >
        X2
      </Button>
      <Button color="blue-700" onClick={() => setBettingAmount(balance)}>
        Max
      </Button>
    </>
  );
  return betItems;
}

export function BalancetoStringFromat(format: number) {
  return format.toLocaleString("ja-JP");
}

function getCalcPos() {
  resultIndex = getRandomInt(20, 56);
  return Tiles[resultIndex - 20].pos + getRandomInt(-18, 18); // ... + Tiles[resultIndex - 20].pos * getRandomInt(1, 2); // get pos from Tiles and add random miss-postion (for realisme)
}

export function getRandomId(byteSize: number) {
  return crypto.randomBytes(byteSize).toString("hex");
}

export function getTwelveNum(row: number) {
  const first12: TileType[] = [
    {
      val: 32,
      color: "red",
      pos: 1208,
    },
    {
      val: 15,
      color: "black",
      pos: 1256,
    },
    {
      val: 19,
      color: "red",
      pos: 1304,
    },
    {
      val: 6,
      color: "black",
      pos: 1640,
    },
    {
      val: 27,
      color: "red",
      pos: 1688,
    },
    {
      val: 13,
      color: "black",
      pos: 1736,
    },
    {
      val: 5,
      color: "red",
      pos: 2072,
    },
    {
      val: 24,
      color: "black",
      pos: 2120,
    },
    {
      val: 16,
      color: "red",
      pos: 2168,
    },
    {
      val: 22,
      color: "black",
      pos: 2504,
    },
    {
      val: 18,
      color: "red",
      pos: 2552,
    },
    {
      val: 29,
      color: "black",
      pos: 2600,
    },
  ];
  const second12: TileType[] = [
    {
      val: 4,
      color: "black",
      pos: 1352,
    },
    {
      val: 21,
      color: "red",
      pos: 1400,
    },
    {
      val: 2,
      color: "black",
      pos: 1448,
    },
    {
      val: 36,
      color: "red",
      pos: 1784,
    },
    {
      val: 11,
      color: "black",
      pos: 1832,
    },
    {
      val: 30,
      color: "red",
      pos: 1880,
    },
    {
      val: 33,
      color: "black",
      pos: 2216,
    },
    {
      val: 1,
      color: "red",
      pos: 2264,
    },
    {
      val: 20,
      color: "black",
      pos: 2312,
    },
    {
      val: 7,
      color: "red",
      pos: 2648,
    },
    {
      val: 28,
      color: "black",
      pos: 2696,
    },
    {
      val: 12,
      color: "red",
      pos: 2744,
    },
  ];
  const third12: TileType[] = [
    {
      val: 25,
      color: "red",
      pos: 1496,
    },
    {
      val: 17,
      color: "black",
      pos: 1544,
    },
    {
      val: 34,
      color: "red",
      pos: 1592,
    },
    {
      val: 8,
      color: "black",
      pos: 1928,
    },
    {
      val: 23,
      color: "red",
      pos: 1976,
    },
    {
      val: 10,
      color: "black",
      pos: 2024,
    },
    {
      val: 14,
      color: "red",
      pos: 2360,
    },
    {
      val: 31,
      color: "black",
      pos: 2408,
    },
    {
      val: 9,
      color: "red",
      pos: 2456,
    },
    {
      val: 35,
      color: "black",
      pos: 2792,
    },
    {
      val: 3,
      color: "red",
      pos: 2840,
    },
    {
      val: 26,
      color: "black",
      pos: 2888,
    },
  ];

  switch (row) {
    case 1:
      return first12;

    case 2:
      return second12;

    case 3:
      return third12;
  }
}

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
