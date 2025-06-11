import React, { useState } from 'react';
import Badge from 'react-bootstrap/Badge';

function AboutMe() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: '20px' }}>
      <h1>
        Tôi là Trần Chân <Badge bg="success">start</Badge>
      </h1>
      <p>sinh viên ngành Kỹ thuật phần mềm.</p>

      <div>
        <h3>Counter: {count}</h3>
        <button onClick={() => setCount(count + 1)}>Tăng</button>
        <button onClick={() => setCount(count - 1)}>Giảm</button>
      </div>
    </div>
  );
}

export default AboutMe;
