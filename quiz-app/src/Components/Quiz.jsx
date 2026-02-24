import React, { useState } from "react";
import questions from "../data";
import Timer from "./Timer";
import Result from "./Result";
import ProgressBar from "./ProgressBar";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleAnswer = (option) => {
    if (isAnswered) return;

    setSelectedAnswer(option);
    setIsAnswered(true);

    if (option.isCorrect) {
      setScore(score + 1);
    }

    setTimeout(() => {
      nextQuestion();
    }, 1000);
  };

  const nextQuestion = () => {
    setSelectedAnswer(null);
    setIsAnswered(false);
    setTimeLeft(10);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setTimeLeft(10);
    setSelectedAnswer(null);
    setIsAnswered(false);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      {!showResult ? (
        <>
          <ProgressBar
            currentQuestion={currentQuestion + 1}
            totalQuestions={questions.length}
          />

          <Timer
            timeLeft={timeLeft}
            setTimeLeft={setTimeLeft}
            nextQuestion={nextQuestion}
          />

          <h2 className="text-xl font-semibold mt-4 mb-4">
            {questions[currentQuestion].text}
          </h2>

          <div className="space-y-3">
            {questions[currentQuestion].options.map((option, index) => {
              let buttonStyle = "bg-gray-200";

              if (isAnswered) {
                if (option.isCorrect) {
                  buttonStyle = "bg-green-500 text-white";
                } else if (selectedAnswer === option && !option.isCorrect) {
                  buttonStyle = "bg-red-500 text-white";
                }
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  disabled={isAnswered}
                  className={`w-full px-4 py-2 rounded transition ${buttonStyle}`}
                >
                  {option.text}
                </button>
              );
            })}
          </div>
        </>
      ) : (
        <Result
          score={score}
          totalQuestions={questions.length}
          restartQuiz={restartQuiz}
        />
      )}
    </div>
  );
};

export default Quiz;