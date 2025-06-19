import React from 'react';

const Result = ({ score, total }) => {
  return (
    <div>
      <h2>🎉 Bạn đã hoàn thành!</h2>
      <p>Điểm số: {score} / {total}</p>
      <button onClick={() => window.location.reload()}>Chơi lại</button>
    </div>
  );
};

export default Result;
