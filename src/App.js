// App.js

import React from 'react';
import WorkoutForm from './Components/WorkoutForm';
import WorkoutHistory from './Components/WorkoutHistory';
import GoalTracker from './Components/GoalTracker';

function App() {
  return (
    <div className="App bg-gray-100 h-screen">
      <header className='text-center font-bold text-3xl'>
        <h1>Fitness Tracker</h1>
      </header>
      <main>
        {/* <button>wor</button> */}
        <div className="flex">
      <div className="flex-1 mt-24">
        <WorkoutForm />
      </div>
      <div className="flex-1 flex items-center justify-center mt-24">
        <WorkoutHistory />
      </div>
    </div>
        <GoalTracker />
      </main>
      <footer>
        <p>&copy; 2024 Fitness Tracker</p>
      </footer>
    </div>
  );
}

export default App;
