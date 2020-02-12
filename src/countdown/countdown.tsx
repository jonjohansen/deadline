import React, { Component } from "react";
import { SVGCircle, mapNumber } from "../svgcircle/svgcircle";
import moment from "moment";
import "./countdown.scss";

type ClockState = {
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export class Clock extends Component<{}, ClockState> {
  state = {
    end: [],
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  tick() {
    this.setState(this.getTime());
  }

  getTime() {
    const end = moment([2020, 4, 31]);
    const timeleft = moment(end.diff(moment(Date.now()))).toObject();
    return {
      months: timeleft.months,
      days: timeleft.date,
      hours: timeleft.hours,
      minutes: timeleft.minutes,
      seconds: timeleft.seconds
    };
  }

  componentDidMount() {
    setInterval(() => this.tick(), 1);
  }
  render() {
    const { months, days, hours, minutes, seconds } = this.state;

    // Calculations of size of the svg circle
    let size = 100;
    let font = "1.6em";
    if (window.innerWidth > 1920) {
      size = 200;
      font = "3em";
    }

    const sizeStyle = {
      width: size * 2 + "px",
      height: size * 2 + "px",
      fontSize: font
    };

    // Find radius of each of the circles
    const monthsRadius = mapNumber(months, 4, 0, 0, 360);
    const daysRadius = mapNumber(days, 31, 0, 0, 360);
    const hoursRadius = mapNumber(hours, 24, 0, 0, 360);
    const minutesRadius = mapNumber(minutes, 60, 0, 0, 360);
    const secondsRadius = mapNumber(seconds, 60, 0, 0, 360);
    return (
      <div>
        <div className="wrapper">
          <div className="item" style={sizeStyle}>
            <SVGCircle radius={monthsRadius} size={size} />
            <span className="number">{months}</span> <span>months</span>
          </div>
          <div className="item" style={sizeStyle}>
            <SVGCircle radius={daysRadius} size={size} />
            <span className="number">{days}</span> <span>days</span>
          </div>
          <div className="item" style={sizeStyle}>
            <SVGCircle radius={hoursRadius} size={size} />
            <span className="number">{hours} </span>
            <span>hours</span>
          </div>
          <div className="item" style={sizeStyle}>
            <SVGCircle radius={minutesRadius} size={size} />
            <span className="number">{minutes}</span> <span>minutes</span>
          </div>
          <div className="item" style={sizeStyle}>
            <SVGCircle radius={secondsRadius} size={size} />
            <span className="number">{seconds} </span>
            <span>seconds</span>
          </div>
        </div>
      </div>
    );
  }
}
