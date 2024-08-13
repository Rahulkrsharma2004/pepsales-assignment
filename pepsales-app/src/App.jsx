// import React from 'react';
import Swimlane from './components/Swimlane';
import Filter from './components/Filter';

const App = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Swimlane UI</h1>
      <Filter />
      <Swimlane />
    </div>
  );
};

export default App;
