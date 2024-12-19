import React from 'react';
import Chart from 'react-apexcharts';

function TurnoverRadialGraph() {
  // Options for the chart
  const options = {
    chart: {
      type: 'radialBar',
      height: 350,
    },
    plotOptions: {
      radialBar: {
        size: undefined,
        startAngle: -135,
        endAngle: 225,
        hollow: {
          margin: 10,
          size: '70%',
          background: 'transparent',
        },
        dataLabels: {
          name: {
            fontSize: '16px',
            color: '#666',
            offsetY: 20,
          },
          value: {
            fontSize: '22px',
            fontWeight: 'bold',
            color: '#111',
            offsetY: -10,
          },
          total: {
            show: true,
            label: 'Total Turnover',
            formatter: function (w) {
              // Calculate the total turnover
              return '₹' + w.globals.seriesTotals.reduce((a, b) => a + b, 0).toLocaleString();
            },
          },
        },
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'vertical',
        shadeIntensity: 0.5,
        gradientToColors: ['#ABE5A1', '#F9D976', '#F866B9'], // Gradient colors
        stops: [0, 50, 100],
      },
    },
    colors: ['#FF4560', '#775DD0', '#00E396', '#FEB019'],
    labels: [
      '2008-09',
      '2009-10',
      '2010-11',
      '2011-12',
      '2012-13',
      '2013-14',
      '2014-15',
      '2015-16',
    ],
    tooltip: {
      enabled: true,
      shared: true,
      followCursor: true,
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        return (
          '<div style="padding: 5px; font-size: 14px; color: ' +
          w.globals.colors[seriesIndex] +
          ';">' +
          w.globals.labels[dataPointIndex] +
          ': ₹' +
          series[seriesIndex][dataPointIndex].toLocaleString() +
          '</div>'
        );
      },
    },
  };

  // Yearly turnover data (Replace with your actual turnover values)
  const series = [500, 750, 1000, 1200, 1500, 1800, 2000, 2500]; // Example turnovers in crores

  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'start', // Changed to 'start' to align items at the top
          padding: '20px', // Added padding for better spacing
        }}
      >
        <h2 style={{ marginBottom: '20px' }}>Yearly Turnover (₹ Crores)</h2>

        <Chart options={options} series={series} type="radialBar" height={400} />
      </div>
    </div>
  );
}

export default TurnoverRadialGraph;
