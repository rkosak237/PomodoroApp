import * as React from 'react';
import format from "date-fns/format";

export default class Chart extends React.Component {
constructor(props) {
    super(props);
    const { radius, stroke } = this.props;
    this.normalizedRadius = radius - stroke * 2;
    this.circumference = this.normalizedRadius * 2 * Math.PI;
}

  render() {
    const { radius, stroke, time } = this.props;
    const strokeDashoffset = this.circumference - time / 3600 * this.circumference;

    const date = new Date(0);
    date.setSeconds(time);
    const datefnsTime = format(date, "mm:ss");

    return (
      <svg
        height={ radius * 2 }
        width={ radius * 2 }>
        <circle
          stroke="#d2d2d2"
          fill="transparent"
          strokeWidth={ stroke }
          strokeDasharray="53 20"
          strokeWidth={ stroke - 3 }
          r={ this.normalizedRadius }
          cx={ radius }
          cy={ radius }/>
        <circle
          className="chart--rotated"
          stroke="#0076FF"
          fill="transparent"
          strokeWidth={ stroke }
          strokeDasharray={ this.circumference + ' ' + this.circumference }
          style={ { strokeDashoffset } }
          strokeWidth={ stroke }
          r={ this.normalizedRadius }
          cx={ radius }
          cy={ radius }/>
         <text
          className="chart__text"
          x="50%"
          y="50%"
          dy=".3em"
          textAnchor="middle">
          {  datefnsTime }
         </text>
    </svg>
    );
  }
}