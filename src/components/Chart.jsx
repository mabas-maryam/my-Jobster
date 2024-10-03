import React, { useState, useEffect } from 'react';
import ApexCharts from 'react-apexcharts';

const Chart = () => {
  const [chartHeight, setChartHeight] = useState(280); // Default chart height

  // Function to update chart size based on screen width
  const updateChartSize = () => {
    if (window.innerWidth < 640) { // Small screen
      setChartHeight(200);
    } else if (window.innerWidth < 1024) { // Medium screen
      setChartHeight(260);
    } else { // Large screen
      setChartHeight(280);
    }
  };

  // Use effect to adjust the chart height dynamically on resize
  useEffect(() => {
    updateChartSize(); // Set the initial chart size
    window.addEventListener('resize', updateChartSize);

    return () => {
      window.removeEventListener('resize', updateChartSize);
    };
  }, []);

  const [options, setOptions] = useState({
    chart: {
      type: 'bar',
      events: {
        click: function (chart, w, e) {
          // Handle chart click events here
          console.log(chart, w, e);
        }
      }
    },
    colors: ['#3B82F6'], // Color of the bar
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
          colors: ['#000'],
          fontSize: '12px' // Default font size for labels
        }
      }
    },
    responsive: [
      {
        breakpoint: 640, // Small screens (mobile)
        options: {
          xaxis: {
            labels: {
              style: {
                fontSize: '10px', // Smaller font for small screens
              }
            }
          },
          plotOptions: {
            bar: {
              columnWidth: '70%', // Increase column width on small screens
            }
          }
        }
      },
      {
        breakpoint: 1024, // Medium screens (tablets)
        options: {
          xaxis: {
            labels: {
              style: {
                fontSize: '12px', // Adjust font size for medium screens
              }
            }
          },
        }
      },
      {
        breakpoint: 1440, // Large screens (desktops)
        options: {
          xaxis: {
            labels: {
              style: {
                fontSize: '14px', // Larger font for large screens
              }
            }
          },
        }
      }
    ]
  });

  const [series, setSeries] = useState([
    {
      data: [8, 6, 4, 5, 6, 5] // Chart data
    }
  ]);

  return (
    <div className='m-4'>
      <ApexCharts
        options={options}
        series={series}
        type="bar"
        height={chartHeight} // Dynamic height based on screen size
      />
    </div>
  );
};

export default Chart;
