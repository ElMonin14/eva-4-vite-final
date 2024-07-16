import React, { useState } from 'react';

const SearchForm = ({ onSubmit, onReset }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');

  const Submit = (e) => {
    e.preventDefault();
    onSubmit({ name, category, price });
  };

  const Reset = () => {
    setName('');
    setCategory('');
    setPrice('');
    onReset();
  };

  return (
    <form onSubmit={Submit}>
      <div className="mb-3">
        <label htmlForm="productName" className="form-label">Nombre del Producto</label>
        <input type="text" className="form-control" id="productName" value={name} onChange={e => setName(e.target.value)} required />
      </div>
      <div className="mb-3">
        <label htmlForm="productCategory" className="form-label">Categoría</label>
        <input type="text" className="form-control" id="productCategory" value={category} onChange={e => setCategory(e.target.value)} required />
      </div>
      <div className="mb-3">
        <label htmlForm="productPrice" className="form-label">Precio (CLP)</label>
        <input type="number" className="form-control" id="productPrice" value={price} onChange={e => setPrice(e.target.value)} required />
      </div>
      <button type="submit" className="btn btn-primary">Buscar Productos</button>
      <button type="button" className="btn btn-success ms-2" onClick={Reset}>Reiniciar Búsqueda</button>
    </form>
  );
};

export default SearchForm;
