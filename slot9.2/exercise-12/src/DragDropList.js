import React, { useState } from 'react';

function DragDropList() {
  const [items, setItems] = useState(['One', 'Two', 'Three']);
  const [dragIndex, setDragIndex] = useState(null);

  const handleDragStart = (index) => {
    setDragIndex(index);
  };

  const handleDrop = (index) => {
    const updatedItems = [...items];
    const draggedItem = updatedItems.splice(dragIndex, 1)[0];
    updatedItems.splice(index, 0, draggedItem);
    setItems(updatedItems);
    setDragIndex(null);
  };

  return (
    <div>
      <h2>Drag & Drop List</h2>
      {items.map((item, index) => (
        <div
          key={index}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={(e) => e.preventDefault()}
          onDrop={() => handleDrop(index)}
          style={{
            padding: '10px',
            border: '1px solid black',
            marginBottom: '5px',
            cursor: 'move'
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

export default DragDropList;
