// src/AreAllTeenagers.js
import React from 'react';

function AreAllTeenagers() {
  const people = [
    { name: "Alice",   age: 12, occupation: "Student" },
    { name: "Bob",     age: 17, occupation: "Intern" },
    { name: "Charlie", age: 15, occupation: "Teacher" }
  ];

  // every() trả về true nếu tất cả đều thỏa điều kiện 13 <= age <= 19
  const allTeenagers = people.every(person => person.age >= 13 && person.age <= 19);

  return (
    <div>
      {allTeenagers
        ? <p>All are teenagers.</p>
        : <p>Not all are teenagers.</p>
      }
    </div>
  );
}

export default AreAllTeenagers;
