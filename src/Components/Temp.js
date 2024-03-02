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

    new Chart(ctx, {
      type: 'pie', // Change type to 'pie' for a pie chart
      data: {
        labels,
        datasets: [
          {
            label: 'Calories Burned',
            data: calories,
            backgroundColor: [
              'rgba(255, 192, 203, 0.5)', // Light pink
              'rgba(255, 253, 208, 0.5)', // Light yellow
              'rgba(193, 255, 212, 0.5)', // Light green
            ],
            borderColor: [
              'rgba(255, 192, 203, 1)', // Light pink border
              'rgba(255, 253, 208, 1)', // Light yellow border
              'rgba(193, 255, 212, 1)', // Light green border
            ],
            borderWidth: 1,
          },
        ],
      },
    });
  }, []);

  return <canvas ref={chartRef} width="400" height="200"></canvas>;
};

export default WorkoutHistory;
