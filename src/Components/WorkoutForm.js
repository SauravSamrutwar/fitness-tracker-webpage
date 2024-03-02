import React from 'react';

const WorkoutForm = () => {
  return (
    <section className="workout-form p-8 bg-white rounded-md shadow-md mx-auto max-w-md">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-6">Log Your Workout</h2>
      <form className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="exerciseType" className="text-lg font-semibold mb-2 text-gray-700">
            Exercise Type
          </label>
          <input
            type="text"
            id="exerciseType"
            name="exerciseType"
            className="border p-2 rounded-md focus:outline-none focus:border-blue-300"
            placeholder="e.g., Running, Weightlifting"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="duration" className="text-lg font-semibold mb-2 text-gray-700">
            Duration (minutes)
          </label>
          <input
            type="number"
            id="duration"
            name="duration"
            className="border p-2 rounded-md focus:outline-none focus:border-blue-300"
            placeholder="Enter duration"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="caloriesBurned" className="text-lg font-semibold mb-2 text-gray-700">
            Calories Burned
          </label>
          <input
            type="number"
            id="caloriesBurned"
            name="caloriesBurned"
            className="border p-2 rounded-md focus:outline-none focus:border-blue-300"
            placeholder="Enter calories burned"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-400 text-white py-3 px-6 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue ml-20"
        >
          Log Workout
        </button>
      </form>
    </section>
  );
};

export default WorkoutForm;
