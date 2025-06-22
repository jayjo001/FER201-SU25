import React, { useReducer } from "react";

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
  ],
  currentQuestion: 0,
  selectedOption: "",
  score: 0,
  showScore: false,
};

function quizReducer(state, action) {
  switch (action.type) {
    case "SELECT_OPTION":
      return { ...state, selectedOption: action.payload };
    case "NEXT_QUESTION":
      const isCorrect =
        state.selectedOption === state.questions[state.currentQuestion].answer;
      const nextQuestion = state.currentQuestion + 1;
      return {
        ...state,
        score: isCorrect ? state.score + 1 : state.score,
        currentQuestion: nextQuestion,
        selectedOption: "",
        showScore: nextQuestion === state.questions.length,
      };
    case "RESTART_QUIZ":
      return initialState;
    default:
      return state;
  }
}

function QuestionBank() {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const { questions, currentQuestion, selectedOption, score, showScore } = state;

  if (showScore)
    return (
      <div>
        <h2>Your Score: {score} / {questions.length}</h2>
        <button onClick={() => dispatch({ type: "RESTART_QUIZ" })}>Restart</button>
      </div>
    );

  return (
    <div>
      <h3>{questions[currentQuestion].question}</h3>
      {questions[currentQuestion].options.map((opt, idx) => (
        <button
          key={idx}
          onClick={() => dispatch({ type: "SELECT_OPTION", payload: opt })}
        >
          {opt}
        </button>
      ))}
      <br />
      <button
        disabled={!selectedOption}
        onClick={() => dispatch({ type: "NEXT_QUESTION" })}
      >
        {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
      </button>
    </div>
  );
}

export default QuestionBank;
