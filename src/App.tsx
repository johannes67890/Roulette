import React from "react";
import { Tiles } from "./Tiles";
function App() {
  return (
    <div className="overflow-hidden">
      <ul className="flex animate-roll">
        {Tiles.map((index) => (
          <li
            className={`bg-${index.color} flex-none w-12 h-12 self-start text-center align-middle inline-block leading-10`}
          >
            <span className="align-middle text-white ">{index.val}</span>
          </li>
        ))}
        {Tiles.map((index) => (
          <li
            className={`bg-${index.color} flex-none w-12 h-12 text-center align-middle inline-block leading-10`}
          >
            <span className="align-middle text-white ">{index.val}</span>
          </li>
        ))}
      </ul>
      <button className="mx-auto px-2 py-1 border-2 bg-gray-400 rounded-lg hover:bg-gray-700">
        <span>Click</span>
      </button>
    </div>
  );
}

export default App;
