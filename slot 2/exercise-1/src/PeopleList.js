// src/PeopleList.js
import React from 'react';

function PeopleList() {
  const people = [
    { name: "Alice",   age: 25, occupation: "Engineer" },
    { name: "Bob",     age: 30, occupation: "Designer" },
    { name: "Charlie", age: 35, occupation: "Teacher" }
  ];

  return (
    <div>
      <ul>
        {people.map((p, i) => (
          <li key={i}>
            <strong>{p.name}</strong> — Age: {p.age}, Occupation: {p.occupation}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PeopleList;
