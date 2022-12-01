// backgroundColor: ['#3A7B99', '#70AFCE', '#A5DEF1', '#FFFFFF'],
import React, { useRef, useCallback } from 'react';
import MyButton from '../shared/button/MyButton';
import { Doughnut } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './DoughnutChart.css';

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Doughnut Chart',
      color: '#fff',
    },
  },
};

const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Grey', 'White'],
  datasets: [
    {
      label: 'My Dataset',
      data: [300, 50, 100, 40, 120],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#ccc', '#fff'],
      hoverOffset: 4,
      borderColor: '#fff',
      borderWidth: 1,
    },
  ],
};

Chart.register(CategoryScale);

const DoughnutChart = () => {
  let ref = useRef(null);

  const downloadImage = useCallback(() => {
    const link = document.createElement('a');
    link.download = 'chart.png';
    link.href = ref.current.toBase64Image();
    link.click();
  }, []);
  return (
    <div>
      <div className="DoughnutWrapper">
        <Doughnut options={options} ref={ref} data={data} />
      </div>
      <MyButton
        type="button"
        onClick={downloadImage}
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 20,
          marginBottom: 15,
          display: 'block',
        }}
      >
        Download Your Custom Chart-Image!
      </MyButton>
    </div>
  );
};

export default DoughnutChart;
