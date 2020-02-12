import React from "react";

interface SvgProps {
  radius: number;
  size: number;
}

export const SVGCircle: React.SFC<SvgProps> = props => {
  const sizeStyle = {
    width: props.size * 2 + "px",
    height: props.size * 2 + "px"
  };
  const margin = props.size - props.size / 25;
  const svgStyle = {
    width: props.size * 2 + "px",
    height: props.size * 2 + "px"
  };
  return (
    <svg className="countdown-svg" style={sizeStyle}>
      <path
        fill="none"
        stroke="#333"
        stroke-width="4"
        d={describeArc(props.size, props.size, margin, 0, props.radius)}
      />
    </svg>
  );
};

// From StackOverflow: https://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle
function polarToCartesian(
  centerX: number,
  centerY: number,
  radius: number,
  angleInDegrees: number
) {
  var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians)
  };
}

function describeArc(
  x: number,
  y: number,
  radius: number,
  startAngle: number,
  endAngle: number
) {
  var start = polarToCartesian(x, y, radius, endAngle);
  var end = polarToCartesian(x, y, radius, startAngle);

  var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  var d = [
    "M",
    start.x,
    start.y,
    "A",
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y
  ].join(" ");

  return d;
}

// From StackOverflow: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
export function mapNumber(
  number: number,
  in_min: number,
  in_max: number,
  out_min: number,
  out_max: number
) {
  return (
    ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  );
}
