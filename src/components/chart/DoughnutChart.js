// backgroundColor: ['#3A7B99', '#70AFCE', '#A5DEF1', '#FFFFFF'],
import React, { useRef, useCallback } from 'react';
import MyButton from '../shared/button/MyButton';
import { Doughnut } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';

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
  let ref= useRef(null);

  const downloadImage = useCallback(()=>{
    const link = document.createElement('a');
    link.download = 'chart.png';
    link.href =ref.current.toBase64Image();
    link.click();
  },[])
  return (
    <div>
      <MyButton
        type="button"
        onClick={downloadImage}
        style={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: 30, display: 'block' }}
      >
        Download Custom Chart-Image
      </MyButton>
      <div style={{height:"600px", width:"600px", margin:"0 auto"}}>
        <Doughnut ref={ref} data={data} />
      </div>
    </div>
  );
};

export default DoughnutChart;
