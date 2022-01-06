import { TileType } from "./Tiles";
import { FC, useState, useEffect } from "react";

const History: FC<{ result: TileType | undefined }> = ({ result }) => {
  const [history, setHistory] = useState<Array<TileType>>([]);

  useEffect(() => {
    if (result !== undefined) {
      setHistory((prev) => [result].concat(prev));
    }
  }, [result]);

  return (
    <aside className="flex flex-col w-32 h-96">
      <h2 className="mx-auto p-2 font-bold text-white">History</h2>
      <ul className="border border-blue-700 rounded-md overflow-y-hidden h-full">
        <span className="animate-bounce-slow pt-3 text-white flex items-center justify-center">
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </span>
        {history.map((value, key) => {
          return (
            <li
              className={`bg-${value.color} text-center rounded mx-0.5 mb-0.5`}
              key={key}
            >
              <span className="text-white">{value.val} </span>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default History;
