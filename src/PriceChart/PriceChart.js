import React from 'react';
import { Chart } from "react-charts";

const priceChart = (props) => {
return (
  // A react-chart hyper-responsively and continuusly fills the available
  // space of its parent element automatically
  <div
    style={{
      width: "400px",
      height: "300px"
    }}  className="price-chart"
  >
    <h1>{props.chartTitle}</h1>
    <Chart
      data={[
        {
          label: "Amazon",
          data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
        },
        {
          label: "Liverpool",
          data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
        }
      ]}
      axes={[
        { primary: true, type: "linear", position: "bottom" },
        { type: "linear", position: "left" }
      ]}
    />
  </div>
  );
}

export default priceChart;