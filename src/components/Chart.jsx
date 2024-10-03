import React, { useState } from 'react';
import ApexCharts from 'react-apexcharts';

const Chart = () => {
  const [options, setOptions] = useState({
    chart: {
      height:280,
      type: 'bar',
      events: {
        click: function(chart, w, e) {
          // Handle chart click events here
          console.log(chart, w, e);
        }
      }
    },
    colors: ['#3B82F6'], // Replace 'colors' variable from original code
    plotOptions: {
      bar: {
        columnWidth: '50%',
        distributed: true,
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
    xaxis: {
      categories: [
        ['Mar 2024'],
        ['Apr 2024'],
        ['May 2024'],
        ['Jun 2024'],
        ['Jul 2024'],
        ['Aug 2024'],
    
      ],
      labels: {
        style: {
          colors: [''],
          fontSize: '15px'
        }
      }
    }
  });

  const [series, setSeries] = useState([
    {
      data: [8, 6, 4, 5, 6, 5]
    }
  ]);

  return (
    <div>
      <ApexCharts
        options={options}
        series={series}
        type="bar"
        height={280}
      />
    </div>
  );
};

export default Chart;
