import React, { useState, useEffect, useMemo } from "react";
import { SVGCircle, mapNumber } from "../svgcircle/svgcircle";
import moment from "moment";
import "./countdown.scss";

export const Clock: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<moment.MomentObjectOutput>();

  useEffect(() => {
    const tick = setInterval(() => {
      const end = moment([2020, 5, 30, 0, 0, 0]); // Jun 30th 23:59:59
      const timeleft = moment(end.diff(moment(Date.now()))).toObject();
      setTimeLeft(timeleft);
    }, 1000);

    return () => {
      clearInterval(tick);
    };
  }, []);

  const { size, fontSize } = useMemo(() => {
    return {
      size: window.innerWidth > 1080 ? window.innerWidth * 0.07 : 100,
      fontSize:
        window.innerWidth > 1080 ? window.innerWidth * 0.1 + "%" : "1.6em"
    };
  }, []);

  const { days, hours, minutes, months, seconds } = useMemo(() => {
    return {
      months: timeLeft?.months || 0,
      days: timeLeft?.date || 0,
      hours: timeLeft?.hours || 0,
      minutes: timeLeft?.minutes || 0,
      seconds: timeLeft?.seconds || 0
    };
  }, [timeLeft]);

  const monthsRadius = mapNumber(months, 4, 0, 0, 360);
  const daysRadius = mapNumber(days, 31, 0, 0, 360);
  const hoursRadius = mapNumber(hours, 24, 0, 0, 360);
  const minutesRadius = mapNumber(minutes, 60, 0, 0, 360);
  const secondsRadius = mapNumber(seconds, 60, 0, 0, 360);

  const sizeStyle = {
    width: size * 2 + "px",
    height: size * 2 + "px",
    fontSize
  };

  if (!timeLeft) {
    return null;
  }

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
};
