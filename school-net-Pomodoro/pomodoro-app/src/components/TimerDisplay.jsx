import React from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const TimerDisplay = ({
  formattedTime,
  currentSession,
  progressPercentage
}) => {
  
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Pomodoro Timer</h1>
      <div className=" w-[300px] m-auto flex justify-center text-[50px]">
        <CircularProgressbar
            value={progressPercentage}
            text={`${formattedTime}`}
            counterClockwise={true}
            styles={buildStyles({
                // Text size
                textSize: '20px',
               
                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 0.8,
             
                // Colors
                pathColor: `rgba(37, 99, 235, ${progressPercentage / 100})`,
                trailColor: '#b8cbda',
                backgroundColor: '#d3573b',
              })}
          />
      </div>
      <div className="text-lg text-gray-300 mb-8 mt-3">
        {currentSession === "work" ? "Work Session" : "Break Session"}
      </div>
    </div>
  );
};

export default TimerDisplay;
