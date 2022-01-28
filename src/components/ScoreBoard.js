import React, { useEffect, useState } from "react";
import "../index.css";

const ScoreBoard = ({ score }) => {
    
  const [highScore, setHighScore] = useState(null);

//   const [hScore, setHScore] = useState(0);
//    setHScore(localStorage.getItem('highScore'))
//   if (!hScore || hScore===0) {
//     localStorage.setItem('highScore', 0)
//   } 
  
  useEffect(() => {
    // setHighScore(hScore)
    // localStorage.removeItem('highScore')
    const hScore = localStorage.getItem('highScore')
    if (!hScore) {
        localStorage.setItem('highScore', 0)
        setHighScore(localStorage.getItem('highScore'))
    } else {
        setHighScore((localStorage.getItem('highScore')))
    }
    console.log(hScore);
  }, [])

  useEffect(() => {
    if (score > highScore) {
        localStorage.setItem('highScore', score)
        setHighScore(score)
    }
  }, [score])
 
  return (
    <div className="flex flex-col scoreboard text-3xl border-2 rounded-2xl shadow-lg px-6 py-4">
      <div className="flex items-center justify-center">ScoreBoard</div>
      <div className="flex">
        <div>Highest Score:&nbsp;</div>
        <div>{highScore}</div>
      </div>
      <div className="flex">
        <div>Current Score:&nbsp;</div>
        <div>{score}</div>
      </div>
    </div>
  );
};

export default ScoreBoard;
