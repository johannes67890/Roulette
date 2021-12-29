import React from "react";

const Button: React.FC<{
  Style?: string;
  onClick?: () => unknown;
}> = ({ children, onClick, Style }) => {
  return (
    <button
      className={`bg-${Style} text-white hover:bg-opacity-60 font-bold py-2 px-4 rounded-md`}
      onClick={() => {
        if (onClick) onClick();
      }}
    >
      {children}
    </button>
  );
};
export default Button;
