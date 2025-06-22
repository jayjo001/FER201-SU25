import React, { useReducer, useEffect, useRef } from "react";
import { Button, ProgressBar } from "react-bootstrap";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const initialState = {
  questions: [
    {
      id: 1,
      question: "Capital of Australia?",
      options: ["Sydney", "Canberra", "Melbourne", "Perth"],
      answer: "Canberra",
    },
    {
      id: 2,
      question: "Red planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      id: 3,
      question: "Largest ocean?",
      options: ["Atlantic", "Indian", "Pacific", "Arctic"],
      answer: "Pacific",
    },
  ],
  currentQuestion: 0,
  selectedOption: "",
  score: 0,
  showScore: false,
  feedback: "",
  timeLeft: 10,
  highScore: parseInt(localStorage.getItem("highScore")) || 0,
};

function quizReducer(state, action) {
  switch (action.type) {
    case "SELECT_OPTION":
      const isCorrect =
        action.payload ===
        state.questions[state.currentQuestion].answer;
      return {
        ...state,
        selectedOption: action.payload,
        feedback: isCorrect
          ? "Correct! 🎉"
          : `Incorrect! ❌ Correct answer: ${state.questions[state.currentQuestion].answer}`,
        score: isCorrect ? state.score + 1 : state.score,
      };
    case "NEXT_QUESTION":
      const nextQ = state.currentQuestion + 1;
      const isQuizEnd = nextQ === state.questions.length;
      const newHighScore = isQuizEnd
        ? Math.max(state.score, state.highScore)
        : state.highScore;
      if (isQuizEnd) localStorage.setItem("highScore", newHighScore);

      return {
        ...state,
        currentQuestion: nextQ,
        selectedOption: "",
        showScore: isQuizEnd,
        feedback: "",
        timeLeft: 10,
        highScore: newHighScore,
      };
    case "RESTART_QUIZ":
      return { ...initialState, highScore: state.highScore };
    case "TICK":
      return { ...state, timeLeft: state.timeLeft - 1 };
    case "TIME_UP":
      return {
        ...state,
        feedback: `⏰ Time's up! Correct: ${state.questions[state.currentQuestion].answer}`,
        showScore: state.currentQuestion + 1 === state.questions.length,
      };
    default:
      return state;
  }
}

function EnhancedQuestionBank() {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const { questions, currentQuestion, selectedOption, feedback, score, showScore, timeLeft, highScore } = state;

  const timerRef = useRef();

  useEffect(() => {
    if (!showScore && !selectedOption && timeLeft > 0) {
      timerRef.current = setTimeout(() => dispatch({ type: "TICK" }), 1000);
    }
    if (timeLeft === 0 && !selectedOption) {
      dispatch({ type: "TIME_UP" });
    }
    return () => clearTimeout(timerRef.current);
  }, [timeLeft, selectedOption, showScore]);

  return (
    <div className="p-4">
      {showScore ? (
        <>
          <h2>🎯 Your Score: {score}/{questions.length}</h2>
          <h4>🏆 High Score: {highScore}</h4>
          <Button onClick={() => dispatch({ type: "RESTART_QUIZ" })}>
            Restart
          </Button>
        </>
      ) : (
        <>
          <h4>
            Question {currentQuestion + 1}/{questions.length}
          </h4>
          <p>{questions[currentQuestion].question}</p>
          <div>
            {questions[currentQuestion].options.map((opt, i) => (
              <Button
                key={i}
                variant={
                  selectedOption === opt ? "success" : "outline-secondary"
                }
                onClick={() =>
                  !selectedOption && dispatch({ type: "SELECT_OPTION", payload: opt })
                }
                className="m-1"
              >
                {opt}
              </Button>
            ))}
          </div>

          <div className="mt-2">
            <strong style={{ color: timeLeft <= 5 ? "red" : "black" }}>
              Time left: {timeLeft}s
            </strong>
            <ProgressBar now={(timeLeft / 10) * 100} />
          </div>

          <div className="mt-2">
            {feedback.includes("Correct") ? (
              <p className="text-success">
                <FaCheckCircle /> {feedback}
              </p>
            ) : feedback ? (
              <p className="text-danger">
                <FaTimesCircle /> {feedback}
              </p>
            ) : null}
          </div>

          {selectedOption && (
            <Button
              className="mt-2"
              onClick={() => dispatch({ type: "NEXT_QUESTION" })}
            >
              {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
            </Button>
          )}
        </>
      )}
    </div>
  );
}

export default EnhancedQuestionBank;
