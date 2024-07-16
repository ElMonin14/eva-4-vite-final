import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div className="row">
      {products.map(product => (
        <div className="col-md-4 mb-3" key={product.id}>
          <div className="card">
            <img src={product.image} className="card-img-top" alt={product.name} />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text"><strong>Categoría:</strong> {product.category}</p>
              <p className="card-text"><strong>Precio:</strong> CLP {product.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
