// src/App.js
import React from 'react';
import Box from './Box';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="box-container">
        <Box text="Box 1" />
        <Box text="Box 2" />
        <Box text="Box 3" />
      </div>
    </div>
  );
}

export default App;