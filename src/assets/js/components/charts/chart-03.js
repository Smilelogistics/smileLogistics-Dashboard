import ApexCharts from "apexcharts";

const fetchChartData = async () => {
  try {
    const response = await fetch(`${requestURL}/dashboard/monthly-income`, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('auth_token'),
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.message || `API request failed with status ${response.status}`
      );
    }

    const apiData = await response.json();
    const userRole = localStorage.getItem('user_role');
    
    // Validate response structure
    if (!apiData.data || !apiData.data.series || !apiData.data.categories) {
      throw new Error('Invalid API response structure');
    }

    return {
      series: apiData.data.series,
      categories: apiData.data.categories,
      totals: apiData.data.totals || {},
      detailed_data: apiData.data.detailed_data || [],
      userRole: userRole,
      revenue_series: apiData.data.revenue_series || null
    };

  } catch (error) {
    console.error('Error fetching chart data:', error);
    throw error;
  }
};

const renderError = (container, message, retryCallback) => {
  container.innerHTML = `
    <div class="chart-error text-sm dark:text-gray-400 text:white">
      <p class="text-sm dark:text-gray-400 text:white">${message}</p>
      <button class="retry-btn" class="text-sm dark:text-gray-400 text:white">Retry</button>
    </div>
  `;
  container.querySelector('.retry-btn').addEventListener('click', retryCallback);
};

const createChartOptions = (data) => {
  const { series, categories, totals, userRole, revenue_series } = data;
  
  const baseOptions = {
    chart: {
      fontFamily: "Outfit, sans-serif",
      height: 310,
      type: "area",
      toolbar: { show: false },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800
      }
    },
    stroke: {
      curve: "straight",
      width: 2,
    },
    fill: {
      gradient: {
        enabled: true,
        opacityFrom: 0.55,
        opacityTo: 0,
      },
    },
    markers: {
      size: 0,
    },
    grid: {
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      type: "category",
      categories: categories,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      tooltip: {
        enabled: false
      },
      labels: {
        style: {
          colors: '#6B7280',
          fontSize: '12px',
        }
      }
    },
    yaxis: {
      labels: {
        formatter: function(val) {
          return val ? val.toLocaleString() : '0';
        },
        style: {
          colors: '#6B7280',
          fontSize: '12px',
        }
      },
      title: {
        style: {
          fontSize: "0px",
        },
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
    }
  };

  if (userRole === 'superadministrator') {
    return {
      ...baseOptions,
      colors: ["#465FFF", "#9CB9FF"],
      series: series,
      tooltip: {
        ...baseOptions.tooltip,
        y: {
          formatter: function(value, { seriesIndex }) {
            const val = value || 0;
            return seriesIndex === 0 
              ? `${val} sales` 
              : `$${val.toLocaleString()}`;
          }
        }
      }
    };
  } else if (userRole === 'businessadministrator') {
    return {
      ...baseOptions,
      colors: ["#465FFF", "#9CB9FF", "#FF7043", "#4CAF50"],
      series: [
        ...series,
        ...(revenue_series ? [revenue_series] : [])
      ],
      tooltip: {
        ...baseOptions.tooltip,
        y: {
          formatter: function(value, { seriesIndex }) {
            const val = value || 0;
            if (seriesIndex === 0) return `${val} shipments`;
            if (seriesIndex === 1) return `${val} consolidated`;
            if (seriesIndex === 2) return `${val} total shipments`;
            if (seriesIndex === 3) return `$${val.toLocaleString()} revenue`;
            return val;
          }
        }
      }
    };
  } else {
    // For customer and driver roles
    return {
      ...baseOptions,
      colors: ["#465FFF", "#9CB9FF", "#FF7043"],
      series: series,
      tooltip: {
        ...baseOptions.tooltip,
        y: {
          formatter: function(value, { seriesIndex }) {
            const val = value || 0;
            if (seriesIndex === 0) return `${val} shipments`;
            if (seriesIndex === 1) return `${val} consolidated`;
            if (seriesIndex === 2) return `${val} total shipments`;
            return val;
          }
        }
      }
    };
  }
};


// const createSummaryHTML = (totals, userRole) => {
//   // Safely get values with fallbacks
//   const safeGet = (obj, prop, fallback = 0) => {
//     return obj && obj[prop] !== undefined ? obj[prop] : fallback;
//   };

//   if (userRole === 'superadministrator') {
//     return `
//       <div class="summary-item">
//         <span>Total Sales:</span>
//         <strong>${safeGet(totals, 'sales').toLocaleString()}</strong>
//       </div>
//       <div class="summary-item">
//         <span>Total Revenue:</span>
//         <strong>${safeGet(totals, 'formatted_revenue', '$0')}</strong>
//       </div>
//     `;
//   } else if (userRole === 'businessadministrator') {
//     return `
//       <div class="summary-item">
//         <span>Total Shipments:</span>
//         <strong>${safeGet(totals, 'shipments').toLocaleString()}</strong>
//       </div>
//       <div class="summary-item">
//         <span>Total Consolidated:</span>
//         <strong>${safeGet(totals, 'consolidated').toLocaleString()}</strong>
//       </div>
//       <div class="summary-item">
//         <span>Total Revenue:</span>
//         <strong>${safeGet(totals, 'formatted_revenue', '$0')}</strong>
//       </div>
//     `;
//   } else {
//     // For customer and driver roles
//     const totalShipments = safeGet(totals, 'shipments') + safeGet(totals, 'consolidated');
//     return `
//       <div class="summary-item">
//         <span>Total Shipments:</span>
//         <strong>${safeGet(totals, 'shipments').toLocaleString()}</strong>
//       </div>
//       <div class="summary-item">
//         <span>Total Consolidated:</span>
//         <strong>${safeGet(totals, 'consolidated').toLocaleString()}</strong>
//       </div>
//       <div class="summary-item">
//         <span>Total Deliveries:</span>
//         <strong>${totalShipments.toLocaleString()}</strong>
//       </div>
//     `;
//   }
// };

const chart03 = async () => {
  const chartContainer = document.querySelector("#chartThree");
  if (!chartContainer) return;

  // Show loading state
  chartContainer.innerHTML = '<div class="chart-loading">Loading monthly data...</div>';

  try {
    const chartData = await fetchChartData();
    const { series, categories, totals, userRole } = chartData;

    const chartOptions = createChartOptions(chartData);
    const chart = new ApexCharts(chartContainer, chartOptions);

    // Clear loading state and render chart
    chartContainer.innerHTML = '';
    chart.render();

    // Add summary element
    const summaryEl = document.createElement('div');
    summaryEl.className = 'chart-summary';
    //summaryEl.innerHTML = createSummaryHTML(totals, userRole);
    chartContainer.parentNode.insertBefore(summaryEl, chartContainer.nextSibling);

    // Set up auto-refresh every 5 minutes
    const refreshInterval = setInterval(async () => {
      try {
        const newData = await fetchChartData();
        const newOptions = createChartOptions(newData);
        
        chart.updateOptions({
          series: newOptions.series,
          xaxis: {
            categories: newData.categories
          }
        });
        
        // Update summary
        //summaryEl.innerHTML = createSummaryHTML(newData.totals, newData.userRole);
      } catch (error) {
        console.error('Error refreshing chart data:', error);
      }
    }, 300000); // 5 minutes

    // Cleanup function
    return () => {
      clearInterval(refreshInterval);
      chart.destroy();
      if (summaryEl.parentNode) {
        summaryEl.parentNode.removeChild(summaryEl);
      }
    };

  } catch (error) {
    renderError(chartContainer, 
      `Failed to load chart data: ${error.message}`,
      chart03
    );
  }
};

export default chart03;