import './App.css';
import React, { useEffect, useState } from 'react'
import Board from './components/Board';

const width = 8
const candyColors = [
    'blue',
    'orange',
    'purple',
    'red',
    'yellow',
    'green'
]

const App = () => {
  
  return (
    <div className='flex p-12 h-screen w-screen'>
      <Board width={width} candyColors={candyColors} /> 
    </div>
  );
}

export default App;
