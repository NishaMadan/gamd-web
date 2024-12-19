import React, { useState } from 'react';
import Chart from 'react-apexcharts';

function Graph() {
  // Yearly turnover data
  const series = [500, 750, 1000, 1200, 1500, 1800, 2000, 2500];

  // Colors for each year
  const colors = ['#FF4560', '#775DD0', '#00E396', '#FEB019', '#008FFB', '#FEB019', '#FF4560', '#775DD0'];

  // Year labels
  const labels = [
    '2008-09',
    '2009-10',
    '2010-11',
    '2011-12',
    '2012-13',
    '2013-14',
    '2014-15',
    '2015-16',
  ];

  // State to track the hovered legend index
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Chart options
  const options = {
    chart: {
      type: 'radialBar',
      height: 450,
    },
    plotOptions: {
      radialBar: {
        size: undefined,
        startAngle: -135,
        endAngle: 225,
        hollow: {
          margin: 10,
          size: '55%',
          background: 'transparent',
        },
        track: {
          show: true,
          strokeWidth: '100%',
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
            label: 'Turnover',
            formatter: function (w) {
              return hoveredIndex !== null
                ? `₹${series[hoveredIndex]}`
                : '₹' + series.reduce((a, b) => a + b, 0).toLocaleString();
            },
          },
        },
      },
    },
    fill: {
      colors: hoveredIndex !== null ? [colors[hoveredIndex]] : colors,
    },
    labels: labels,
    colors: colors, // Assign each bar its respective color
  };

  // Custom legend data
  const legendItems = labels.map((label, index) => ({
    label,
    color: colors[index],
  }));

  return (
    <div id='turnover'
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '20px',
      }}
    >
      <h2
        className='text-xl text-black font-bold uppercase'
        style={{ marginBottom: '20px' }}
      >
        Yearly Turnover (₹ Crores)
      </h2>

      {/* Chart */}
      <Chart options={options} series={series} type='radialBar' height={400} />

      {/* Custom Legend */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '20px',
        }}
      >
        {legendItems.map((item, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              marginRight: '20px',
              cursor: 'pointer',
              opacity: hoveredIndex === null || hoveredIndex === index ? 1 : 0.5,
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Legend Color */}
            <div
              style={{
                width: '20px',
                height: '20px',
                backgroundColor: item.color,
                marginRight: '8px',
                borderRadius: '4px',
              }}
            ></div>

            {/* Legend Label */}
            <span style={{ fontSize: '14px', color: '#333' }}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Graph;

