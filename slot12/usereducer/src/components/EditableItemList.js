import React, { useReducer, useState } from "react";

function listReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [...state.items, { id: Date.now(), name: action.name }],
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };
    case "EDIT_ITEM":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.id ? { ...item, name: action.name } : item
        ),
      };
    case "SET_FILTER":
      return { ...state, filter: action.filter };
    case "SORT_ALPHA":
      return {
        ...state,
        items: [...state.items].sort((a, b) => a.name.localeCompare(b.name)),
      };
    case "SORT_TIME":
      return {
        ...state,
        items: [...state.items].sort((a, b) => a.id - b.id),
      };
    default:
      return state;
  }
}

const initialState = {
  items: [],
  filter: "",
};

function EditableItemList() {
  const [state, dispatch] = useReducer(listReducer, initialState);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);

  const handleAddOrEdit = () => {
    if (editId !== null) {
      dispatch({ type: "EDIT_ITEM", id: editId, name: input });
      setEditId(null);
    } else {
      dispatch({ type: "ADD_ITEM", name: input });
    }
    setInput("");
  };

  const filteredItems = state.items.filter((item) =>
    item.name.toLowerCase().includes(state.filter.toLowerCase())
  );

  return (
    <div>
      <h2>Editable Item List</h2>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Item name"
      />
      <button onClick={handleAddOrEdit}>
        {editId !== null ? "Update" : "Add"}
      </button>

      <input
        placeholder="Filter"
        value={state.filter}
        onChange={(e) =>
          dispatch({ type: "SET_FILTER", filter: e.target.value })
        }
      />
      <button onClick={() => dispatch({ type: "SORT_ALPHA" })}>Sort A-Z</button>
      <button onClick={() => dispatch({ type: "SORT_TIME" })}>
        Sort by Time
      </button>

      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>
            {item.name}
            <button
              onClick={() => {
                setEditId(item.id);
                setInput(item.name);
              }}
            >
              Edit
            </button>
            <button onClick={() => dispatch({ type: "REMOVE_ITEM", id: item.id })}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EditableItemList;
