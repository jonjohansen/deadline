import React from "react";
import "./App.scss";
import { Clock } from "./countdown/countdown";

const App = () => {
  return (
    <div className="container">
      <div className="wrap">
        <div className="header"> Christmas is in</div>
        <Clock />
      </div>
    </div>
  );
};

export default App;
