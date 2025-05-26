// src/FirstTeenager.js
import React from 'react';

function FirstTeenager() {
  // Giả sử đây là mảng people đã cho
  const people = [
    { name: "Alice",   age: 12, occupation: "Student" },
    { name: "Bob",     age: 17, occupation: "Intern" },
    { name: "Charlie", age: 22, occupation: "Teacher" },
    { name: "David",   age: 15, occupation: "Part-time worker" }
  ];

  // Tìm phần tử đầu tiên có age trong khoảng [13, 19]
  const teenager = people.find(p => p.age >= 13 && p.age <= 19);

  return (
    <div>
      {teenager ? (
        <div>
          <h2>First Teenager</h2>
          <p><strong>Name:</strong> {teenager.name}</p>
          <p><strong>Age:</strong> {teenager.age}</p>
          <p><strong>Occupation:</strong> {teenager.occupation}</p>
        </div>
      ) : (
        <p>No teenager found.</p>
      )}
    </div>
  );
}

export default FirstTeenager;
