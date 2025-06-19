import React, { useState } from 'react';
import Question from './Question';
import Result from './Result';

const QuizApp = () => {
  const questions = [
    {
      question: "1 + 1 = ?",
      options: ["1", "2", "3", "4"],
      correctAnswer: "2"
    },
    {
      question: "Thủ đô của Việt Nam là?",
      options: ["TP.HCM", "Đà Nẵng", "Hà Nội", "Huế"],
      correctAnswer: "Hà Nội"
    }
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selected) => {
    if (selected === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentQuestionIndex(nextIndex);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div>
      <h1>QuizApp</h1>
      {!showResult ? (
        <Question
          data={questions[currentQuestionIndex]}
          handleAnswer={handleAnswer}
        />
      ) : (
        <Result score={score} total={questions.length} />
      )}
    </div>
  );
};

export default QuizApp;
