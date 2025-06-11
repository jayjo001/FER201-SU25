import React, { useState } from 'react';

function ControlledInput() {
  const [text, setText] = useState('');

  return (
    <div>
      <h2>Controlled Input</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>You typed: {text}</p>
    </div>
  );
}

export default ControlledInput;
