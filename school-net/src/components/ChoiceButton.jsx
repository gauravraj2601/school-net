import React from "react";

const ChoiceButton = ({ choice, onClick, isSelected }) => {
  return (
    <button
      onClick={() => onClick(choice)}
      className={`bg-[#ffff] rounded-full w-[126px] h-[125px]   transition-colors hover:bg-[#5983ac] hover:text-white  focus:outline-none focus:ring-8 focus:ring-[#dc6b6b] focus:ring-offset-[5px] ${
        isSelected ? "bg-[#5983ac]" : ""
      } text-[black]` }
    >
      {choice.charAt(0).toUpperCase()}
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
        />
      </div>
      <div className="flex justify-between w-full max-w-xl gap-24">
        <ChoiceButton
          choice={choices[1]}
          onClick={onClick}
          isSelected={selectedChoice === choices[1]}
        />
        <ChoiceButton
          choice={choices[2]}
          onClick={onClick}
          isSelected={selectedChoice === choices[2]}
        />
      </div>
    </div>
  );
};
export default ChoiceButtonGroup;
