import React from "react";
import "./App.scss";
import { Clock } from "./countdown/countdown";

const App = () => {
  const circles = [];
  //for (let i = 0; i < 100; i++) {
  //  circles.push(<CircleDots />);
  //}
  return (
    <div className="container">
      <div className="wrap">
        <div className="header"> Master thesis is due in</div>
        <Clock></Clock>
      </div>
    </div>
  );
};

export default App;
