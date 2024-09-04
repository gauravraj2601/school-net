import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const TimerDisplay = ({
  formattedTime,
  currentSession,
  progressPercentage,
}) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  // Format the date and time
  const formattedDate = currentTime.toLocaleDateString();
  const formattedClockTime = currentTime.toLocaleTimeString();

  return (
    <div className="text-center">
      
      <div className=" bg-gradient-to-r from-blue-400  via-[#7d93a3] to-blue-400 bg-clip-text text-transparent animate-none ">
        <h1 className="text-4xl font-bold mb-4">Pomodoro Timer</h1>
        <div className="bg-[rgb(0,0,0,0.1)] rounded-lg mb-2">
        
        <div className="flex justify-around  ">
          <div className="w-[120px] p-2 ">
            {" "}
            <img
              src="https://img.freepik.com/free-vector/time-management-concept-landing-page_52683-18371.jpg?t=st=1725378842~exp=1725382442~hmac=68f373f42569399f6c5ff6c23eab4d00522e36cfd4b8933fbd3d915fde643b4c&w=900"
              alt="timer-image"
            />{" "}
          </div>
          <div className="w-[80%] p-2">
            <div className="text-xl font-extrabold bg-gradient-to-r from-blue-400  via-[#7a8f9f] to-blue-400 bg-clip-text text-transparent animate-none">
              <div className="flex justify-around pr-3" >
              <h1>
                Time
              </h1>
                <h1>Date</h1>
              </div>
              <div  className="flex justify-around">
                <div>{formattedDate}</div>
                <div>{formattedClockTime}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className=" w-[270px] m-auto flex justify-center text-[50px] ">
        <CircularProgressbar
          value={progressPercentage}
          text={`${formattedTime}`}
          counterClockwise={true}
          styles={buildStyles({
            // Text size
            textSize: "20px",
            pathTransitionDuration: 0.8,

            // Colors
            pathColor: `rgba(79, 121, 197, ${progressPercentage / 100})`,
            trailColor: "#b8cbda",
            backgroundColor: "#d3573b",
          })}
        />
      </div>
      <div className="text-lg font-bold  mb-4 mt-3 bg-text ">
        {currentSession === "work" ? "Work Session" : "Break Session"}
      </div>
    </div>
  );
};

export default TimerDisplay;
