// src/SortByOccupationThenAge.js
import React from 'react';

function SortByOccupationThenAge() {
  // Mảng mẫu (bạn có thể thay thành dữ liệu của bạn)
  const people = [
    { name: "Alice",   age: 25, occupation: "Engineer" },
    { name: "Bob",     age: 30, occupation: "Designer" },
    { name: "Charlie", age: 35, occupation: "Teacher" },
    { name: "David",   age: 22, occupation: "Designer" },
    { name: "Eve",     age: 28, occupation: "Engineer" }
  ];

  // Tạo bản sao rồi sort: trước theo occupation, nếu bằng thì theo age
  const sorted = [...people].sort((a, b) => {
    if (a.occupation < b.occupation) return -1;
    if (a.occupation > b.occupation) return 1;
    return a.age - b.age;
  });

  return (
    <div>
      <h2>People sorted by Occupation then Age</h2>
      <ul>
        {sorted.map((p, idx) => (
          <li key={idx}>
            {p.name} — {p.occupation}, {p.age} years old
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SortByOccupationThenAge;

