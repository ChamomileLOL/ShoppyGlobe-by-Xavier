import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Product not found');
        return res.json();
      })
      .then(data => setProduct(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Loading product...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.thumbnail} alt={product.title} width="300" />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      {/* Add Add to Cart button later */}
    </div>
  );
}

export default ProductDetail;
