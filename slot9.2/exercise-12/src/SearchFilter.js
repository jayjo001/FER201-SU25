import React, { useState } from 'react';

function SearchFilter() {
  const [search, setSearch] = useState('');
  const items = ['Apple', 'Banana', 'Orange', 'Mango'];

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Search Filter</h2>
      <input
        type="text"
        placeholder="Search fruits..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filteredItems.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </div>
  );
}

export default SearchFilter;
