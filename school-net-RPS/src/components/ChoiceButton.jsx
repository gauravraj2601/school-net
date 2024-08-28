import React from "react";
import rock from "../Assets/rock.png";
import paper from "../Assets/paper.png";
import scissor from "../Assets/scissor.png";
const ChoiceButton = ({ choice, onClick, Image, isSelected }) => {
  return (
    <button
      onClick={() => onClick(choice)}
      className={`bg-[#ffff] rounded-full w-[126px] h-[125px] flex justify-center items-center   transition-colors  focus:outline-none focus:ring-8 focus:ring-[#dc6b6b] focus:ring-offset-[5px] ${
        isSelected ? "bg-[#5983ac]" : ""
      } text-[black]`}
    >
      {Image}
    </button>
  );
};

// export default ChoiceButton;

const ChoiceButtonGroup = ({ choices, onClick, selectedChoice }) => {
  return (
    <div className="flex flex-col items-center gap-20">
      <div className="flex justify-center">
        <ChoiceButton
          choice={choices[0]}
          onClick={onClick}
          isSelected={selectedChoice === choices[0]}
          Image={
            <img className="w-[68px] transform rotate-180" src={rock} alt="" />
          }
        />
      </div>
      <div className="flex justify-between w-full max-w-xl gap-24">
        <ChoiceButton
          choice={choices[1]}
          onClick={onClick}
          isSelected={selectedChoice === choices[1]}
          Image={
            <img className="w-[85px] transform rotate-180" src={paper} alt="" />
          }
        />
        <ChoiceButton
          choice={choices[2]}
          onClick={onClick}
          isSelected={selectedChoice === choices[2]}
          Image={
            <img
              className="w-[90px] transform rotate-180"
              src={scissor}
              alt=""
            />
          }
        />
      </div>
    </div>
  );
};
export default ChoiceButtonGroup;
