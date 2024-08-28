import React, { useEffect, useState } from "react";
import ResultDisplay from "./ResultDisplay";
import Scoreboard from "./Scoreboard";
import ChoiceButtonGroup from "./ChoiceButton";
import Login from "./Login";

const RockPaperScissors = () => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [scores, setScores] = useState({ player: 0, computer: 0, draws: 0 });
  const [isAuth, setIsAuth] = useState(false);
  const choices = ["rock", "paper", "scissors"];

  useEffect(() => {
    // Check user authentication
    const userAuth = localStorage.getItem("game-user");
    if (userAuth) {
      const data = JSON.parse(userAuth);
      if (data.username) {
        setIsAuth(true);
      }
    }

    // isAuth && Load scores from localStorage
    if (isAuth) {
      const storedScores = localStorage.getItem("scores");
      if (storedScores) {
        setScores(JSON.parse(storedScores));
      }
    }
    checkAuth()
  }, [isAuth]);

  useEffect(() => {
    // Save scores to localStorage whenever they change
    if (isAuth) {
      localStorage.setItem("scores", JSON.stringify(scores));
    }
  }, [scores, isAuth]);

  const handlePlayerChoice = (choice) => {
    setPlayerChoice(choice);
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    setComputerChoice(computerChoice);
    determineResult(choice, computerChoice);
  };

  const determineResult = (player, computer) => {
    if (player === computer) {
      setResult("Draw");
      setScores((prevScores) => ({
        ...prevScores,
        draws: prevScores.draws + 1,
      }));
    } else if (
      (player === "rock" && computer === "scissors") ||
      (player === "paper" && computer === "rock") ||
      (player === "scissors" && computer === "paper")
    ) {
      setResult("Win");
      setScores((prevScores) => ({
        ...prevScores,
        player: prevScores.player + 1,
      }));
    } else {
      setResult("Lose");
      setScores((prevScores) => ({
        ...prevScores,
        computer: prevScores.computer + 1,
      }));
    }
  };

  const handleRestart = () => {
    const resetScores = { player: 0, computer: 0, draws: 0 };
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult(null);
    setScores(resetScores);
    localStorage.setItem("scores", JSON.stringify(resetScores));
  };

  const handleLogOut = () => {
    const resetScores = { player: 0, computer: 0, draws: 0 };
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult(null);
    setScores(resetScores);
    localStorage.setItem("scores", JSON.stringify(resetScores));
    localStorage.removeItem("game-user");
    setIsAuth(false);
  };

  const checkAuth = () =>{
      console.log(`isAuth:${isAuth}`)
  }



  return (
    <>
      {!isAuth ? (
        <Login setIsAuth={setIsAuth} />
      ) : (
        <div className="flex flex-col items-center justify-center h-screen ">
          <div className="bg-[#222d5b] text-white rounded-lg p-8 shadow-lg w-full max-w-lg">
            <div className="flex justify-end">
              <button
                onClick={handleLogOut}
                className="w-[70px] h-[30px]  rounded-xl text-white font-[500] bg-[#5983ac] hover:bg-[#cdd2d7] hover:text-[#5983ac]   "
              >
                LogOut
              </button>
            </div>
            <h1 className="text-3xl font-bold mb-10">Rock Paper Scissors</h1>
            <div className="flex justify-center mb-10">
              <ChoiceButtonGroup
                choices={choices}
                onClick={handlePlayerChoice}
                selectedChoice={playerChoice}
              />
            </div>
            <ResultDisplay
              playerChoice={playerChoice}
              computerChoice={computerChoice}
              result={result}
            />
            <Scoreboard scores={scores} />
            <button
              onClick={handleRestart}
              className="w-[120px] h-[50px] rounded-xl text-white font-bold bg-[#5983ac] hover:bg-[#cdd2d7] hover:text-[#5983ac]   "
            >
              Restart
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default RockPaperScissors;
