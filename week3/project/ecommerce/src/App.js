import { useState } from 'react';
import './App.css';
import { Categories } from './components/Categories';
import { Products } from './components/Products';

function App() {
  const [category, setCategory] = useState('all');

  function handleCategoryNameClick(e) {
    const category = e.target.textContent;
    setCategory(category);
  }

  return (
    <div className='App'>
      <h1>Products</h1>
      <Categories handleCategoryNameClick={handleCategoryNameClick} />
      <Products categoryName={category} />
    </div>
  );
}

export default App;