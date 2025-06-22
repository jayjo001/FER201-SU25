import React, { useReducer } from "react";

function formReducer(state, action) {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.value };
    case "SET_AGE":
      return { ...state, age: action.value };
    default:
      return state;
  }
}

function ChangeNameAge() {
  const [state, dispatch] = useReducer(formReducer, { name: "", age: "" });

  return (
    <div>
      <input
        placeholder="Name"
        value={state.name}
        onChange={(e) => dispatch({ type: "SET_NAME", value: e.target.value })}
      />
      <input
        placeholder="Age"
        value={state.age}
        onChange={(e) => dispatch({ type: "SET_AGE", value: e.target.value })}
      />
      <h3>Name: {state.name}</h3>
      <h3>Age: {state.age}</h3>
    </div>
  );
}

export default ChangeNameAge;
