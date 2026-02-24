import React from "react";

const Result = ({ score, totalQuestions, restartQuiz }) => {
  const percentage = ((score / totalQuestions) * 100).toFixed(2);

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Quiz Completed</h2>
      <p className="text-lg mb-2">
        Your Score: {percentage}%
      </p>
      <button
        onClick={restartQuiz}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Restart Quiz
      </button>
    </div>
  );
};

export default Result;