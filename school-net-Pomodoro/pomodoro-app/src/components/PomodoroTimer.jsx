import React, { useState, useEffect, useMemo } from "react";
import TimerControls from "./TimerControls";
import TimerDisplay from "./TimerDisplay";

const PomodoroTimer = () => {
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [workDuration, setWorkDuration] = useState(25);
  const [breakDuration, setBreakDuration] = useState(5);
  const [currentSession, setCurrentSession] = useState("work");
  const [workTimeRemaining, setWorkTimeRemaining] = useState(workDuration * 60);
  const [breakTimeRemaining, setBreakTimeRemaining] = useState(
    breakDuration * 60
  );
  const [isReset, setIsReset] = useState(false);
  useEffect(() => {
    let interval;
    if (isTimerRunning) {
      interval = setInterval(() => {
        if (currentSession === "work") {
          setWorkTimeRemaining((prevTime) => prevTime - 1);
        } else {
          setBreakTimeRemaining((prevTime) => prevTime - 1);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, currentSession]);

  useEffect(() => {
    if (workTimeRemaining === 0 && currentSession === "work") {
      setIsTimerRunning(false);
      setCurrentSession("break");
      setBreakTimeRemaining(breakDuration * 60);
    } else if (breakTimeRemaining === 0 && currentSession === "break") {
      setIsTimerRunning(false);
      setCurrentSession("work");
      setWorkTimeRemaining(workDuration * 60);
    }
  }, [
    workTimeRemaining,
    breakTimeRemaining,
    currentSession,
    workDuration,
    breakDuration,
  ]);

  const handleStartStop = () => {
    setIsTimerRunning((prevState) => !prevState);
  };

  const handleReset = () => {
    setIsTimerRunning(false);
    setCurrentSession("work");
    setWorkTimeRemaining(workDuration * 60);
    setBreakTimeRemaining(breakDuration * 60);
    setIsReset((prev) => !prev);
  };

  const handleWorkDurationChange = (e) => {
    const value = parseInt(e.target.value);
    setWorkDuration(value);
    setWorkTimeRemaining(value * 60);
  };

  const handleBreakDurationChange = (e) => {
    const value = parseInt(e.target.value);
    setBreakDuration(value);
    setBreakTimeRemaining(value * 60);
  };

  const formattedTime = useMemo(() => {
    const timeRemaining =
      currentSession === "work" ? workTimeRemaining : breakTimeRemaining;
    const showSec = `0${timeRemaining % 60}`.slice(-2);
    const minutes = Math.floor(timeRemaining / 60);
    const showMin = `0${minutes % 60}`.slice(-2);
    return `${showMin}:${showSec}`;
  }, [workTimeRemaining, breakTimeRemaining, currentSession]);

  const progressPercentage = useMemo(() => {
    return (
      currentSession === "work"
        ? (workTimeRemaining / (workDuration * 60)) * 100
        : (breakTimeRemaining / (breakDuration * 60)) * 100
    ).toFixed(2);
  }, [
    workTimeRemaining,
    breakTimeRemaining,
    workDuration,
    breakDuration,
    currentSession,
  ]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[url('https://img.freepik.com/premium-photo/background_1173582-1614.jpg?w=740')] bg-center bg-cover ">
      <div className="bg-[rgb(0,0,0,0.2)]  text-white rounded-lg pl-8 pt-6 pr-8 pb-4  shadow-lg w-full max-w-md">
        <TimerDisplay
          progressPercentage={progressPercentage}
          formattedTime={formattedTime}
          currentSession={currentSession}
        />
        <TimerControls
          currentSession={currentSession}
          setCurrentSession={setCurrentSession}
          isTimerRunning={isTimerRunning}
          handleStartStop={handleStartStop}
          handleReset={handleReset}
          workDuration={workDuration}
          breakDuration={breakDuration}
          handleWorkDurationChange={handleWorkDurationChange}
          handleBreakDurationChange={handleBreakDurationChange}
        />
      </div>
    </div>
  );
};

export default PomodoroTimer;
