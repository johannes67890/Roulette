import { Tiles, TileType } from "../components/Tiles";

export let resultIndex: number; //index of result used in Tiles array

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

export function getCalcPos() {
  // get pos for result Tile
  resultIndex = getRandomInt(20, 56); //index start at 20, to skip first row of tiles
  return Tiles[resultIndex - 20].pos + getRandomInt(-18, 18); // Fetch pos from Tiles and add random miss-postion (for realisme)
}

export function BalancetoStringFromat(format: number) {
  return format.toLocaleString("ja-JP"); // format num: 1000 -> 1,000
}

export function getTwelveNum(row: number) {
  //Get values for 1st,2nd and 3rd twelve tiles
  const first12: TileType[] = [
    { val: 32, color: "red", pos: 1208 },
    { val: 15, color: "black", pos: 1256 },
    { val: 19, color: "red", pos: 1304 },
    { val: 6, color: "black", pos: 1640 },
    { val: 27, color: "red", pos: 1688 },
    { val: 13, color: "black", pos: 1736 },
    { val: 5, color: "red", pos: 2072 },
    { val: 24, color: "black", pos: 2120 },
    { val: 16, color: "red", pos: 2168 },
    { val: 22, color: "black", pos: 2504 },
    { val: 18, color: "red", pos: 2552 },
    { val: 29, color: "black", pos: 2600 },
  ];
  const second12: TileType[] = [
    { val: 4, color: "black", pos: 1352 },
    { val: 21, color: "red", pos: 1400 },
    { val: 2, color: "black", pos: 1448 },
    { val: 36, color: "red", pos: 1784 },
    { val: 11, color: "black", pos: 1832 },
    { val: 30, color: "red", pos: 1880 },
    { val: 33, color: "black", pos: 2216 },
    { val: 1, color: "red", pos: 2264 },
    { val: 20, color: "black", pos: 2312 },
    { val: 7, color: "red", pos: 2648 },
    { val: 28, color: "black", pos: 2696 },
    { val: 12, color: "red", pos: 2744 },
  ];
  const third12: TileType[] = [
    { val: 25, color: "red", pos: 1496 },
    { val: 17, color: "black", pos: 1544 },
    { val: 34, color: "red", pos: 1592 },
    { val: 8, color: "black", pos: 1928 },
    { val: 23, color: "red", pos: 1976 },
    { val: 10, color: "black", pos: 2024 },
    { val: 14, color: "red", pos: 2360 },
    { val: 31, color: "black", pos: 2408 },
    { val: 9, color: "red", pos: 2456 },
    { val: 35, color: "black", pos: 2792 },
    { val: 3, color: "red", pos: 2840 },
    { val: 26, color: "black", pos: 2888 },
  ];

  switch (
    row //return parameter of row
  ) {
    case 1:
      return first12;

    case 2:
      return second12;

    case 3:
      return third12;
  }
}
