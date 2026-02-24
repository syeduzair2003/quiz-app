import React from "react";

const ProgressBar = ({ currentQuestion, totalQuestions }) => {
  const percentage = ((currentQuestion) / totalQuestions) * 100;

  return (
    <div className="w-full mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">
          {currentQuestion}/{totalQuestions}
        </span>
      </div>
      <div className="w-full bg-gray-300 rounded-full h-3">
        <div
          className="bg-blue-500 h-3 rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;