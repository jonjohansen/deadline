import React from "react";
import "./App.scss";
import { Clock } from "./countdown/countdown";
import { DEADLINE_DATE } from "./shared/constants";

const App = () => {
  return (
    <div className="container">
      <div className="wrap">
        <div className="header"> Master thesis is due in</div>
        <Clock />
        <div className="caption">
          {DEADLINE_DATE.format("dddd, DD MMMM YYYY HH:mm:ss")}
        </div>
      </div>
    </div>
  );
};

export default App;
