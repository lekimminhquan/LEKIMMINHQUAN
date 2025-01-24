// components/ChartComponent.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale, Title } from 'chart.js';
import styles from '@/components/overview/Overview.module.scss'
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title);

const ChartComponent = () => {
  const data = {
    labels: ["'10", "'13", "'14", "'16", "'17", "'19", "'20","'21", "'22"],
    datasets: [
      {
        label: 'Population',
        data: [0, 0, 43, 50, 58, 15, 0, 66,12],
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      y: {
        position: 'right' as const,
        beginAtZero: true,
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
          borderDash: [5, 5],
          drawBorder: false,
        },
        ticks: {
          color: 'white',
          callback: function(tickValue: number | string) {
            return tickValue + 'M';
          },
          stepSize: 22,
          max: 66,
        },
      },
      x: {
        ticks: {
          color: 'white',
        },
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className='overflow-x-auto'>
      <div className={styles.TransferValue}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default ChartComponent;
