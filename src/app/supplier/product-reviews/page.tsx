'use client';

import React from 'react';
import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';

const DynamicChart = dynamic(() => import('@/components/charts/DynamicCharts'), {
  ssr: false,
});

// Create a local type definition that correctly includes the 'enabled' property
interface ApexDataLabelsWithEnabled {
  enabled?: boolean;
  formatter?: (val: string | number) => string | number;
  style?: {
    fontSize?: string;
    colors?: string[];
  };
  dropShadow?: {
    enabled?: boolean;
  };
  minAngleToShowLabel?: number;
}

export default function ProductAnalyticsPage() {

  const viewsSalesSeries = [{
    name: 'Views',
    data: [60, 40, 50, 45, 62, 55, 48],
  }, {
    name: 'Sales',
    data: [20, 18, 25, 22, 30, 28, 35],
  }];

  const viewsSalesOptions: ApexOptions = {
    chart: {
      type: 'line',
      toolbar: { show: false },
      zoom: { enabled: false },
      background: 'transparent',
    },
    colors: ['#00BFFF', '#0070c0'],
    xaxis: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      labels: { style: { colors: 'var(--text-gray-500)' } },
      axisBorder: { show: false },
    },
    yaxis: {
      labels: {
        formatter: (val: number) => `${val}m`,
        style: { colors: 'var(--text-gray-500)' },
      },
      title: { text: 'Views / Sales', style: { color: 'var(--text-gray-500)' } },
    },
    grid: {
      show: true,
      borderColor: '#f0f0f0',
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    legend: { show: false },
    tooltip: { theme: 'dark' },
  };

  const conversionRateSeries = [{
    name: 'Conversion',
    data: [60, 55, 40, 50, 65, 45, 60]
  }];

  const conversionRateOptions: ApexOptions = {
    chart: {
      type: 'bar',
      toolbar: { show: false },
      background: 'transparent',
    },
    colors: ['#0070c0'],
    plotOptions: {
      bar: {
        borderRadius: 5,
        columnWidth: '60%',
      },
    },
    xaxis: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      labels: { style: { colors: 'var(--text-gray-500)' } },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      labels: {
        formatter: (val: number) => `${val}%`,
        style: { colors: 'var(--text-gray-500)' },
      },
      title: { text: 'Conversion Rate', style: { color: 'var(--text-gray-500)' } },
    },
    grid: {
      show: true,
      borderColor: '#f0f0f0',
    },
    dataLabels: { enabled: false },
    tooltip: { theme: 'dark' },
  };

  const revenueTrendsSeries = [43, 9, 4, 21];

  const revenueTrendsOptions: ApexOptions = {
    chart: {
      type: 'pie',
      toolbar: { show: false },
    },
    labels: ['Monthly Revenue', 'Top-Earning Products', 'Revenue by Category', 'Seasonal Trends'],
    colors: ['#043c7b', '#800080', '#009933', '#FFC107'],
    legend: {
      position: 'left',
      offsetY: 0,
      labels: { colors: 'var(--text-gray-500)' },
      markers: {
        size: 12,
        shape: 'circle',
      },
      formatter: function (seriesName, opts) {
        return seriesName + " " + opts.w.globals.series.find((_val: unknown, i: number) => i === opts.seriesIndex)
      }
    },
    plotOptions: {
      pie: {
        // Cast the object to the new type we defined
        dataLabels: {
          enabled: true,
          minAngleToShowLabel: 10,
          formatter: function (val: string | number) {
            if (typeof val === 'number') {
              return `${val.toFixed(0)}%`;
            }
            return `${Number(val).toFixed(0)}%`;
          },
          style: {
            fontSize: '11px',
            colors: ['#222'],
          },
          dropShadow: {
            enabled: false,
          },
        } as ApexDataLabelsWithEnabled,
      }
    },
    responsive: [{
      breakpoint: 768,
      options: {
        chart: {
          width: '100%'
        },
        legend: {
          position: 'bottom',
        },
        plotOptions: {
          pie: {
            // Cast here as well for the responsive options
            dataLabels: {
              enabled: true,
              style: {
                fontSize: '9px',
                colors: ['#333'],
              },
              connector: {
                enabled: false,
              },
            } as ApexDataLabelsWithEnabled,
          },
        },
      }
    }]
  };

  const productData = [
    { name: "Handwoven Scarf", views: 1240, sales: 118, revenue: "$2,360.00", convRate: "9.5%" },
    { name: "Handwoven Scarf", views: 1240, sales: 118, revenue: "$2,360.00", convRate: "9.5%" },
    { name: "Handwoven Scarf", views: 1240, sales: 118, revenue: "$2,360.00", convRate: "9.5%" },
    { name: "Handwoven Scarf", views: 1240, sales: 118, revenue: "$2,360.00", convRate: "9.5%" },
    { name: "Handwoven Scarf", views: 1240, sales: 118, revenue: "$2,360.00", convRate: "9.5%" },
    { name: "Handwoven Scarf", views: 1240, sales: 118, revenue: "$2,360.00", convRate: "9.5%" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-8 text-gray-800">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-semibold mb-2">PRODUCT ANALYTICS</h1>
          <p className="text-gray-600">
            Track views, sales, and conversion rates to understand product performance and improve your strategies.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium mb-4">Views Vs. Sales</h3>
            <div className="h-64">
              <DynamicChart
                type="line"
                series={viewsSalesSeries}
                options={viewsSalesOptions}
              />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium mb-4">Conversion Rate</h3>
            <div className="h-64">
              <DynamicChart
                type="bar"
                series={conversionRateSeries}
                options={conversionRateOptions}
              />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium mb-4">Revenue Trends</h3>
            <div className="h-64">
              <DynamicChart
                type="pie"
                series={revenueTrendsSeries}
                options={revenueTrendsOptions}
              />
            </div>
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Product Performance</h3>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <span>Sorting & Filters</span>
              <select className="border border-gray-300 rounded-full px-4 py-1 text-sm focus:outline-none focus:border-blue-500">
                <option>Processing</option>
                <option>Delivered</option>
                <option>Cancelled</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Views</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sales</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Conv. %</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {productData.map((item, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.views}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.sales}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-semibold">{item.revenue}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.convRate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
