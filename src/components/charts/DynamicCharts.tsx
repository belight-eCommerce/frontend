'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';

// Dynamically import react-apexcharts with ssr: false to ensure it only runs on the client
const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });

interface ChartProps {
  type: "line" | "bar" | "pie" | "donut" | "area" | "radialBar" | "heatmap" | "treemap" | "scatter" | "bubble" | "candlestick" | "boxPlot" | "radar" | "polarArea";
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  options?: ApexOptions;
  height?: string | number;
  width?: string | number;
}

const DynamicChart: React.FC<ChartProps> = ({
  type,
  series,
  options,
  height = '100%',
  width = '100%'
}) => {
  // If ApexCharts is not yet loaded or on the server, show a placeholder.
  if (typeof window === 'undefined' || !ApexCharts) {
    return (
      <div className="flex items-center justify-center w-full h-full text-gray-500 bg-gray-100 rounded-md">
        <p>Loading Chart...</p>
      </div>
    );
  }

  return (
    <ApexCharts
      options={options}
      series={series}
      type={type}
      height={height}
      width={width}
    />
  );
};

export default DynamicChart;