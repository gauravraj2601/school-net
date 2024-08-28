import React from "react";

const Scoreboard = ({ scores }) => {
  return (
    <div className="flex justify-between items-center mb-4 text-card-foreground">
      <div>
        <span className="font-bold">Player:</span> {scores.player}
      </div>
      <div>
        <span className="font-bold">Computer:</span> {scores.computer}
      </div>
      <div>
        <span className="font-bold">Draws:</span> {scores.draws}
      </div>
    </div>
  );
};

export default Scoreboard;
