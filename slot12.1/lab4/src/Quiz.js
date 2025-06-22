import React, { useState, useEffect, createContext, useContext } from 'react';

const AnswerContext = createContext();

const quizData = [
  {
    question: 'What is ReactJS?',
    answers: [
      'A JavaScript library for building user interfaces',
      'A programming language',
      'A database management system'
    ],
    correctAnswer: 'A JavaScript library for building user interfaces'
  },
  {
    question: 'What is JSX?',
    answers: [
      'A programming language',
      'A file format',
      'A syntax extension for JavaScript'
    ],
    correctAnswer: 'A syntax extension for JavaScript'
  }
];

const Quiz = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const handleAnswerChange = (questionIndex, answer) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionIndex]: answer
    }));
  };

  useEffect(() => {
    console.log("Selected answers updated:", selectedAnswers);
  }, [selectedAnswers]);

  return (
    <AnswerContext.Provider value={selectedAnswers}>
      <div>
        <h2>Quiz App</h2>
        {quizData.map((q, idx) => (
          <div key={idx} style={{ marginBottom: '20px' }}>
            <h3>{q.question}</h3>
            {q.answers.map(answer => (
              <label key={answer} style={{ display: 'block' }}>
                <input
                  type="radio"
                  name={`question-${idx}`}
                  value={answer}
                  checked={selectedAnswers[idx] === answer}
                  onChange={() => handleAnswerChange(idx, answer)}
                />
                {answer}
              </label>
            ))}
            {selectedAnswers[idx] && (
              <p style={{ color: selectedAnswers[idx] === q.correctAnswer ? 'green' : 'red' }}>
                {selectedAnswers[idx] === q.correctAnswer ? 'Correct!' : 'Incorrect!'}
              </p>
            )}
          </div>
        ))}
      </div>
    </AnswerContext.Provider>
  );
};

export default Quiz;
