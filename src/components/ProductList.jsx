import React, { useState } from 'react';
import { useFetchProducts } from '../hooks/useFetchProducts';
import ProductItem from './ProductItem';

function ProductList() {
  const { products, loading, error } = useFetchProducts();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        style={{ marginBottom: '1rem', padding: '0.5rem', width: '100%' }}
      />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {filteredProducts.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
