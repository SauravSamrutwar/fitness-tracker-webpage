import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const WorkoutHistory = () => {
  const workoutData = [
    { id: 1, type: 'Running', duration: 30, caloriesBurned: 300 },
    { id: 2, type: 'Weightlifting', duration: 45, caloriesBurned: 200 },
    { id: 3, type: 'Cycling', duration: 60, caloriesBurned: 400 },
  ];

  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const labels = workoutData.map((workout) => workout.type);
    const calories = workoutData.map((workout) => workout.caloriesBurned);

    // Create a chart instance with reduced size
    const myChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels,
        datasets: [
          {
            label: 'Calories Burned',
            data: calories,
            backgroundColor: [
                'rgba(214, 117, 124, 0.5)', // Slightly darker pink
                'rgba(214, 198, 133, 0.5)', // Slightly darker yellow
                'rgba(143, 195, 162, 0.5)', // Slightly darker green
              ],
              borderColor: [
                'rgba(214, 117, 124, 1)', // Slightly darker pink border
                'rgba(214, 198, 133, 1)', // Slightly darker yellow border
                'rgba(143, 195, 162, 1)', // Slightly darker green border
              ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 1, // Set the aspectRatio to control the size of the chart
      },
    });

    // Cleanup function to destroy the chart on unmount
    return () => {
      // Destroy the chart instance
      myChart.destroy();
    };
  }, [workoutData]);

  return <canvas ref={chartRef} width="200" height="200"></canvas>; // Adjust the size of the canvas
};

export default WorkoutHistory;
