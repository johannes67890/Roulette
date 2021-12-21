import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Wheel";
import Winner from "./Winner";

const Index = () => {
  const [result, setResult] = useState<number | undefined>(undefined);

  return (
    <React.StrictMode>
      <App setResult={setResult} />
      <Winner result={result} />
    </React.StrictMode>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
