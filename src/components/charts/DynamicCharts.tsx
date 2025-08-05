'use client';

import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

interface DynamicChartProps {
  options: ApexOptions;
  series: ApexOptions['series'];
  type: "line" | "bar" | "pie" | "donut" | "area" | "radialBar";
}

const DynamicChart: React.FC<DynamicChartProps> = ({ options, series, type }) => {
  return (
    <Chart options={options} series={series} type={type} height="100%" width="100%" />
  );
};

export default DynamicChart;