import React from 'react';
import Counter from './Counter'; // ✅ KHÔNG có dấu {} nếu export default
import NameAgeForm from './NameAgeForm';
import ProductList from './ProductList';

function App() {
  return (
    <div className="App">
      <Counter />
      <NameAgeForm />
      <ProductList />
    </div>
  );
}

export default App;
