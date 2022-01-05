import { Tiles, TileType } from "../components/Tiles";
import $ from "jquery";
import Button from "../components/Button";
import { getCalcPos, resultIndex } from "./Data";

const RoolTime: number = 7500; //default: 7500
const IntermissionTime: number = 9500; // default: 9500
const CursorDisabledTime: number = 12000; // default: 12000

export function RollWheel(
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
    RoolTime //animation time
  );
  setTimeout(() => {
    //set result to global state after animation is done
    return setResult(Tiles[resultIndex - 20]);
  }, IntermissionTime);
}

export function WinningNumAnimation() {
  /* Winning number animation */
  $("#winner").removeClass("animate-winner"); //remove class to reset animation
  $("#winner").hide(); //hide element
  setTimeout(() => {
    $("#winner").addClass("animate-winner"); //add class to play animation
    $("#winner").show(); // show element
  }, IntermissionTime);
}

export function CusorDisabledAnimation(
  SetIsState: React.Dispatch<React.SetStateAction<boolean>>
) {
  $("button").css("cursor", "not-allowed");
  $("button").prop("disabled", true);
  $("input").prop("disabled", true);
  setTimeout(() => {
    $("button").css("cursor", "pointer");
    $("button").prop("disabled", false);
    $("input").prop("disabled", false);
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
  let bets = [10, 25, 50, 100, 250, 1000];
  let betItems: JSX.Element[] = [];
  for (let i = 0; i < bets.length; i++) {
    betItems.push(
      <Button
        color="blue-700"
        onClick={() => {
          if (bettingAmount + bets[i] < balance) {
            setBettingAmount((bettingAmount += bets[i]));
          } else alert("Sorry you are over your balance limit!");
        }}
      >
        {bets[i]} $
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
        onClick={() => {
          if (bettingAmount < balance) {
            setBettingAmount(bettingAmount * 2);
          } else alert("Sorry you are over your balance limit!");
        }}
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
