import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import lineGraphData from '../data/data';
import {
  Chart as ChartJS,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale // Added to fix the 'category is not a registered scale' error
} from 'chart.js';

ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);

const LineGraph = () => {
  const [chartData, setChartData] = useState({
    labels: lineGraphData.map(item => item.Date),
    datasets: [
      {
        label: 'Productivity Score',
        data: lineGraphData.map(item => item['Productivity Score']),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.4)',
        pointRadius: 10,
        pointStyle: 'rect'
      }
    ]
  });

  const [selectedPoint, setSelectedPoint] = useState(null);

  const handleChartClick = (event) => {
    const chartInstance = event.nativeEvent.target._chart;
    const point = chartInstance.getElementAtEvent(event.nativeEvent);

    if (point.length > 0) {
      const clickedIndex = point[0]._index;
      const clickedDataset = chartInstance.data.datasets[point[0]._datasetIndex];
      setSelectedPoint({
        x: clickedDataset.data[clickedIndex],
        index: clickedIndex
      });
    } else {
      setSelectedPoint(null);
    }
  }

  return (
    <div className="bg-white p-4 rounded shadow h-full w-full flex-auto">
      <h2 className="text-lg font-semibold mb-4">Line Graph</h2>
      <div className="overflow-hidden h-full">
        <Line
          data={chartData}
          options={{
            onClick: (e) => handleChartClick(e),
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: {
                type: 'category',
                scaleLabel: {
                  display: true,
                  labelString: 'Date'
                }
              },
              y: {
                scaleLabel: {
                  display: true,
                  labelString: 'Productivity Score'
                }
              }
            }
          }}
        />
      </div>
      {selectedPoint && <div style={{backgroundColor: chartData.datasets[0].borderColor, color: 'white', padding: '5px'}}>Selected Point: X {selectedPoint.x} at index {selectedPoint.index}</div>}
    </div >
  );
};

export default LineGraph;