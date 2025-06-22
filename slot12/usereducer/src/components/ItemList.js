import React, { useReducer, useState } from "react";

function listReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, items: [...state.items, action.item] };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };
    default:
      return state;
  }
}

const initialState = { items: [] };

function ItemList() {
  const [state, dispatch] = useReducer(listReducer, initialState);
  const [newItemName, setNewItemName] = useState("");

  const handleAddItem = () => {
    if (newItemName) {
      dispatch({
        type: "ADD_ITEM",
        item: { id: Date.now(), name: newItemName },
      });
      setNewItemName("");
    }
  };

  return (
    <div>
      <input
        value={newItemName}
        onChange={(e) => setNewItemName(e.target.value)}
      />
      <button onClick={handleAddItem}>Add</button>

      <ul>
        {state.items.map((item) => (
          <li key={item.id}>
            {item.name}{" "}
            <button onClick={() => dispatch({ type: "REMOVE_ITEM", id: item.id })}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
