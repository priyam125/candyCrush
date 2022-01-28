import './App.css';
import React, { useEffect, useState } from 'react'
import Board from './components/Board';
import blueCandy from './images/blue-candy.png'
import greenCandy from './images/green-candy.png'
import orangeCandy from './images/orange-candy.png'
import purpleCandy from './images/purple-candy.png'
import redCandy from './images/red-candy.png'
import yellowCandy from './images/yellow-candy.png'
import './index.css'

const width = 8
const candyColors = [
    blueCandy,
    greenCandy,
    orangeCandy,
    purpleCandy,
    redCandy,
    yellowCandy
]

const App = () => {
  
  return (
    <div className='flex p-12 h-screen w-screen'>
      <Board width={width} candyColors={candyColors} /> 
    </div>
  );
}

export default App;
