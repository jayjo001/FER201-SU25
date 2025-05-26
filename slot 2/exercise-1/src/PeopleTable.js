// src/PeopleTable.js
import React from 'react';

function PeopleTable() {
      
  const people = [
    { name: "Alice",   age: 25, occupation: "Engineer" },
    { name: "Bob",     age: 30, occupation: "Designer" },
    { name: "Charlie", age: 35, occupation: "Teacher" }
  ];

  return (
    <div>
        
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Occupation</th>
          </tr>
        </thead>
        <tbody>
          {people.map((p, idx) => (
            <tr key={idx}>
              <td>{p.name}</td>
              <td>{p.age}</td>
              <td>{p.occupation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PeopleTable;
