// components/GoalTracker.js

import React from 'react';

const GoalTracker = () => {
  return (
    <section className="mt-40 goal-tracker p-8 bg-gray-100 text-white rounded-md shadow-md">
      <h2 className="text-3xl font-extrabold mb-6 text-black">Set Your Fitness Goals</h2>
      <form className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="goalType" className="text-lg font-semibold text-gray-800 mb-2">
            Fitness Goal
          </label>
          <input
            type="text"
            id="goalType"
            name="goalType"
            className="border p-3 rounded-md focus:outline-none focus:border-blue-300 bg-white text-gray-800"
            placeholder="e.g., Run 5 miles, Lose 5 pounds"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="targetDate" className="text-lg font-semibold text-gray-800 mb-2">
            Target Date
          </label>
          <input
            type="date"
            id="targetDate"
            name="targetDate"
            className="border p-3 rounded-md focus:outline-none focus:border-blue-300 bg-white text-gray-800"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
        >
          Set Goal
        </button>
      </form>
    </section>
  );
};

export default GoalTracker;
