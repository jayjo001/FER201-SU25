import { useState } from 'react';
import Question from './Question';
import { Button, Alert } from 'react-bootstrap';

const questions = [
  {
    id: 1,
    question: 'Which fruit is rich in vitamin C?',
    options: ['Apple', 'Banana', 'Orange', 'Watermelon'],
    answer: 'Orange'
  },
  {
    id: 2,
    question: 'Which part of the plant makes food?',
    options: ['Root', 'Stem', 'Leaf', 'Flower'],
    answer: 'Leaf'
  },
  {
    id: 3,
    question: 'What is the main ingredient in guacamole?',
    options: ['Tomato', 'Avocado', 'Lettuce', 'Mango'],
    answer: 'Avocado'
  }
];

function Quiz() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = (questionId, selectedOption) => {
    setAnswers((prev) => ({ ...prev, [questionId]: selectedOption }));
  };

  const handleSubmit = () => {
    let points = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.answer) {
        points++;
      }
    });
    setScore(points);
    setSubmitted(true);
  };

  return (
    <div>
      <h2 className="mb-4">Quiz</h2>
      {questions.map((q) => (
        <Question
          key={q.id}
          data={q}
          selected={answers[q.id]}
          onAnswer={handleAnswer}
        />
      ))}

      <Button variant="primary" className="mt-3" onClick={handleSubmit} disabled={submitted}>
        Submit
      </Button>

      {submitted && (
        <Alert variant="info" className="mt-4">
          You got {score} out of {questions.length} correct!
        </Alert>
      )}
    </div>
  );
}

export default Quiz;
