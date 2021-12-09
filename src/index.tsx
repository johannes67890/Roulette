import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Wheel";
import Test from "./test";

const Index = () => {
  const [result, setResult] = useState<number | undefined>(undefined);

  return (
    <React.StrictMode>
      <App setResult={setResult} />
      <Test result={result} />
    </React.StrictMode>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
