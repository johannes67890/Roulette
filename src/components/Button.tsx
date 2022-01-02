import React from "react";
import { getRandomId } from "../logic/Animations";

const Button: React.FC<{
  color?: string;
  onClick?: () => unknown;
  Toggleble?: boolean;
  btnId?: string;
}> = ({ children, onClick, color, Toggleble }) => {
  function addTargetBet(clickedId: string) {
    console.log(clickedId);
  }

  return (
    <button
      id={getRandomId(2)}
      className={`bg-${color} text-white hover:bg-opacity-60 font-bold py-2 px-4 rounded-md`}
      onClick={() => {
        if (onClick) onClick();
      }}
    >
      {children}
    </button>
  );
};
export default Button;
