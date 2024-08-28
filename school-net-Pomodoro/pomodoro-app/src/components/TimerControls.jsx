import React from "react";

const TimerControls = ({
  currentSession,
  setCurrentSession,
  isTimerRunning,
  handleStartStop,
  handleReset,
  workDuration,
  breakDuration,
  handleWorkDurationChange,
  handleBreakDurationChange,
}) => {
   const workClick = () =>{
    setCurrentSession("work");
    handleReset();
   }

   const breakClick = () =>{
    setCurrentSession("break");
    handleReset();
   }
    
  return (
    <div>
      <div className="flex justify-center gap-4 mb-8">
        <button
          className={`px-4 py-2 font-semibold text-white rounded ${
            currentSession === "work" ? "bg-blue-600" : "bg-gray-300"
          }`}
          onClick={workClick}
        >
          Work
        </button>
        <button
          className={`px-4 py-2 font-semibold text-white rounded ${
            currentSession === "break" ? "bg-blue-600" : "bg-gray-300"
          }`}
          onClick={() => setCurrentSession("break")}
        >
          Break
        </button>
      </div>

      <div className="flex justify-center gap-4 mb-8">
        <button
          className="px-4 py-2 font-semibold text-white bg-blue-600 rounded"
          onClick={handleStartStop}
        >
          {isTimerRunning ? "Stop" : "Start"}
        </button>
        <button
          className="px-4 py-2 font-semibold text-white bg-gray-600 rounded"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>

      <div className="flex justify-center gap-4">
        {currentSession === "work" && (
        <div className="space-y-2">
          <label className="font-semibold">
            Work Duration
          </label>
          <input
            type="range"
            min="5"
            max="55"
            step="5"
            value={workDuration}
            onChange={handleWorkDurationChange}
            className="w-full"
          />
        </div>
        )}
        {currentSession === "break" && (
        <div className="space-y-2">
          <label className="font-semibold">
            Break Duration
          </label>
          <input
            type="range"
            min="1"
            max="15"
            step="1"
            value={breakDuration}
            onChange={handleBreakDurationChange}
            className="w-full"
            
          />
        </div>
        ) }
      </div>
    </div>
  );
};

export default TimerControls;
