import React, { useState } from 'react';

function ColorSwitcherComponent() {
  const [color, setColor] = useState('white');

  return (
    <div>
      <h2>Color Switcher</h2>
      <select onChange={(e) => setColor(e.target.value)}>
        <option value="white">White</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
      </select>

      <div style={{
        width: '200px',
        height: '100px',
        backgroundColor: color,
        marginTop: '10px'
      }}>
        Background Color: {color}
      </div>
    </div>
  );
}

export default ColorSwitcherComponent;
