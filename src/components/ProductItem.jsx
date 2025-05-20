import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

function ProductItem({ product }) {
  const dispatch = useDispatch();
  const [added, setAdded] = useState(false); // Track feedback

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setAdded(true);

    // Reset feedback after 1.5 seconds
    setTimeout(() => {
      setAdded(false);
    }, 1500);
  };

  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '1rem',
      width: '200px',
      borderRadius: '8px',
      boxShadow: '2px 2px 8px rgba(0,0,0,0.1)',
      textAlign: 'center'
    }}>
      <img src={product.thumbnail} alt={product.title} width="180" height="120" style={{ objectFit: 'cover' }} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <button onClick={handleAddToCart} style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}>
        Add to Cart
      </button>
      {added && <p style={{ color: 'green', marginTop: '0.5rem' }}>Added!</p>}
    </div>
  );
}

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductItem;
