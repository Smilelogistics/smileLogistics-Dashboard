import ApexCharts from "apexcharts";



const fetchChartData = async () => {
  try {
    const response = await fetch(`${requestGetURL}/dashboard/monthly-income`, {
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
    console.log('Chart API response:', apiData);
    // Validate response structure
    if (!apiData.data || !apiData.data.series || !apiData.data.categories) {
      throw new Error('Invalid API response structure');
    }

    return {
      series: apiData.data.series,
      categories: apiData.data.categories,
      totals: apiData.data.totals || {
        sales: 0,
        revenue: 0,
        formatted_revenue: '$0'
      }
    };

  } catch (error) {
    console.error('Error fetching chart data:', error);
    throw error;
  }
};

const renderError = (container, message, retryCallback) => {
  container.innerHTML = `
    <div class="chart-error">
      <p>${message}</p>
      <button class="retry-btn">Retry</button>
    </div>
  `;
  container.querySelector('.retry-btn').addEventListener('click', retryCallback);
};

const chart03 = async () => {
  const chartContainer = document.querySelector("#chartThree");
  if (!chartContainer) return;

  // Show loading state
  chartContainer.innerHTML = '<div class="chart-loading">Loading monthly data...</div>';

  try {
    const { series, categories, totals } = await fetchChartData();

    const chartOptions = {
      series: series,
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
      colors: ["#465FFF", "#9CB9FF"],
      legend: {
        show: false,
        position: "top",
        horizontalAlign: "left",
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
            return val.toLocaleString();
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
        y: {
          formatter: function(value, { seriesIndex }) {
            return seriesIndex === 0 
              ? `${value} sales` 
              : `$${value.toLocaleString()}`;
          }
        }
      }
    };

    // Clear loading state and render chart
    chartContainer.innerHTML = '';
    const chart = new ApexCharts(chartContainer, chartOptions);
    chart.render();

    // Add summary element
    const summaryEl = document.createElement('div');
    summaryEl.className = 'chart-summary';
    // summaryEl.innerHTML = `
    //   <div class="summary-item">
    //     <span>Total Sales:</span>
    //     <strong>${totals.sales.toLocaleString()}</strong>
    //   </div>
    //   <div class="summary-item">
    //     <span>Total Revenue:</span>
    //     <strong>${totals.formatted_revenue}</strong>
    //   </div>
    // `;
    chartContainer.parentNode.insertBefore(summaryEl, chartContainer.nextSibling);

    // Set up auto-refresh every 5 minutes
    const refreshInterval = setInterval(async () => {
      try {
        const newData = await fetchChartData();
        chart.updateOptions({
          series: newData.series,
          xaxis: {
            categories: newData.categories
          }
        });
        
        // Update summary
        summaryEl.querySelectorAll('strong')[0].textContent = 
          newData.totals.sales.toLocaleString();
        summaryEl.querySelectorAll('strong')[1].textContent = 
          newData.totals.formatted_revenue;
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