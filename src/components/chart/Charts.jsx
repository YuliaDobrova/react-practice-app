import React, { useState } from 'react';
import BarChart from './BarChart';
import LineChart from './LineChart';
import PieChart from './PieChart';
import { UserData } from './data/DataChart';
import DoughnutChart from './DoughnutChart';
import './Charts.css';

const Charts = () => {
  const [userDataGain, setUserDataGain] = useState({
    labels: UserData.map(data => data.year),
    datasets: [
      {
        label: 'Users Gained',
        data: UserData.map(data => data.userGain),
        backgroundColor: [
          'rgba(75, 192,192,1',
          '#ecf0f1',
          '#50AF95',
          '#f3ba2f',
          '#2a71d0',
        ],
        borderColor: '#fff',
        borderWidth: 2,
      },
    ],
  });
  const [userDataLost, setUserDataLost] = useState({
    labels: UserData.map(data => data.year),
    datasets: [
      {
        label: 'Users Lost',
        data: UserData.map(data => data.userLost),
        backgroundColor: [
          'rgba(75, 192,192,1',
          '#ecf0f1',
          '#50AF95',
          '#f3ba2f',
          '#2a71d0',
        ],
        borderColor: '#fff',
        borderWidth: 2,
      },
    ],
  });

  return (
    <>
      <p style={{ fontStyle: 'italic', textAlign: 'center', marginBottom: 15 }}>
        Try to <b>cross the name of the color</b> in the chart & watch the result!
      </p>

      <div className="DoughnutChartWrapper">
        <DoughnutChart />
      </div>
      <hr style={{ margin: 35 }} />
      <div
      className='ChartThumb'
        
      >
        <div className="ChartWrapper">
          <BarChart chartData={userDataGain} />
        </div>
        <div className="ChartWrapper">
          <BarChart chartData={userDataLost} />
        </div>
      </div>
      <hr style={{ margin: 35 }} />
      <div
   className='ChartThumb'
      >
        <div className="ChartWrapper">
          <LineChart chartData={userDataGain} />
        </div>
        <div className="ChartWrapper">
          <LineChart chartData={userDataLost} />
        </div>
      </div>
      <hr style={{ margin: 35 }} />
      <div
   className='ChartThumb'
      >
        <div className="ChartWrapper">
          <PieChart chartData={userDataGain} />
        </div>
        <div className="ChartWrapper">
          <PieChart chartData={userDataLost} />
        </div>
      </div>
    </>
  );
};

export default Charts;
