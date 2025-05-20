import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

function Cart() {
  const cartItems = useSelector(state => state.cart.cartItems);

  if (cartItems.length === 0) return <p>Your cart is empty</p>;

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
      <h3>Total: ${totalPrice.toFixed(2)}</h3>
      {/* Add checkout button later */}
    </div>
  );
}

export default Cart;
