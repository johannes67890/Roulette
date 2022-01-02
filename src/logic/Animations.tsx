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

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
