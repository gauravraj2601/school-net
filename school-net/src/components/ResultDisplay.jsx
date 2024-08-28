import React from "react";

const ResultDisplay = ({ playerChoice, computerChoice, result }) => {
  if (!playerChoice || !computerChoice) return null;

  return (
    <div className="text-center mb-4 ">
        <p>{result}</p>
      <p>
        You chose <span className="font-bold text-[20px]">{playerChoice}</span>, the computer chose{" "}
        <span className="font-bold text-[20px]">{computerChoice}</span>.
      </p>
      <p className={`font-bold text-[20px] ${result === "Win" ? "text-green-700" : result === "Lose" ? "text-red-400" : "text-white"}`}>
      {result === "Win" ? "You win!" : result === "Lose" ? "You lose." : "It's a draw."}
      </p>
      <p className="text-muted-foreground">
        {result === "Win"
          ? `${playerChoice} beats ${computerChoice}.`
          : result === "Lose"
          ? `${computerChoice} beats ${playerChoice}.`
          : "It's a tie."}
      </p>
    </div>
  );
};

export default ResultDisplay;
