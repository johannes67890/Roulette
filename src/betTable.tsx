import React from "react";
import { Tiles } from "./Tiles";

const Button: React.FC<{Style?: string, onClick?: () => unknown}> = ({children, onClick, Style}) => {
  return (
    <button className={`bg-${Style} border border-black text-white font-bold hover:bg-transparent hover:text-black font-bold py-2 px-4 rounded`} onClick={() => {if (onClick) onClick()}}>{children}</button>
  )
}

function Table() {
  return (
    <div className="m-6 grid grid-cols-8 grid-rows-6 gap-5">
      {Tiles.map((value, index) => <Button key={index} Style={value.color}>{value.val}</Button>)}
     <Button Style={"black"}>Odd</Button>
    </div>
 
  );
}

export default Table;