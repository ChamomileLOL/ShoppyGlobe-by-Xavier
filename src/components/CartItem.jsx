import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../redux/cartSlice';

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid #ddd', paddingBottom: '1rem' }}>
      <img src={item.thumbnail} alt={item.title} width="80" />
      <div style={{ marginLeft: '1rem', flex: 1 }}>
        <h4>{item.title}</h4>
        <p>Price: ${item.price}</p>
        <div>
          <button onClick={() => dispatch(decreaseQuantity(item.id))} disabled={item.quantity === 1}>-</button>
          <span style={{ margin: '0 1rem' }}>{item.quantity}</span>
          <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
        </div>
      </div>
      <button onClick={() => dispatch(removeFromCart(item.id))} style={{ marginLeft: '1rem' }}>Remove</button>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CartItem;
