import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ApexCharts from 'react-apexcharts';

const CandlestickChart = () => {
  const [chartData, setChartData] = useState([]);

  const API_KEY = `TvOFx2ekQd_7oFrYAYpqNMlYu5NFOeQf`;
  const apiUrl = `https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/minute/2023-01-09/2023-01-09?adjusted=true&sort=asc&limit=120&apiKey=${API_KEY}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        const data = await response.data.results.map(item => ({
          x: new Date(item.t),
          y: [item.o, item.h, item.l, item.c],
        }));
        setChartData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const options = {
    chart: {
      type: 'candlestick',
      height: 350,
    },
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div>
      <h2>Candlestick Chart for AAPL</h2>
      <ApexCharts options={options} series={[{ data: chartData }]} type="candlestick" height={350} />
    </div>
  );
};

export default CandlestickChart;
