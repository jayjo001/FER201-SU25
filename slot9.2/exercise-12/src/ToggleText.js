import React, { useState } from 'react';

function ToggleText() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <h2>Toggle Visibility</h2>
      <button onClick={() => setVisible(!visible)}>
        {visible ? 'Hide' : 'Show'} Text
      </button>
      {visible && <p>This text is visible now!</p>}
    </div>
  );
}

export default ToggleText;
