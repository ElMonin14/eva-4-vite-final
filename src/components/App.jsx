import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import SearchForm from './SearchForm';
import products from './Product';

const App = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const STORAGE_KEY = 'filteredProducts';

  useEffect(() => {
    const storedFilteredProducts = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (storedFilteredProducts) {
      setFilteredProducts(storedFilteredProducts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredProducts));
  }, [filteredProducts]);

  const Search = ({ name, category, price }) => {
    let filtered = products.filter(product => {
      let matchesName = true;
      let matchesCategory = true;
      let matchesPrice = true;

      if (name !== '') {
        matchesName = product.name.toLowerCase().includes(name.toLowerCase());
      }
      if (category !== '') {
        matchesCategory = product.category.toLowerCase().includes(category.toLowerCase());
      }
      if (price !== '') {
        matchesPrice = parseInt(product.price) <= parseInt(price);
      }

      return matchesName && matchesCategory && matchesPrice;
    });

    setFilteredProducts(filtered);
  };

  const resetFilter = () => {
    setFilteredProducts(products);
  };

  const sortAlphabetically = () => {
    const sortedProducts = [...filteredProducts].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setFilteredProducts(sortedProducts);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8">
          <h1 className="text-warning my-5">Catálogo de <span className="text-primary">Productos</span><i className="bi bi-cart4"></i></h1>
          <SearchForm onSubmit={Search} onReset={resetFilter} />
        </div>
      </div>
      <div className="mt-4">
        <h2>Productos Disponibles</h2>
        <button className="btn btn-warning mb-3" onClick={sortAlphabetically}>Ordenar por nombre (A-Z)</button>
        <hr />
        <ProductList products={filteredProducts} />
      </div>
    </div>
  );
};

export default App;
