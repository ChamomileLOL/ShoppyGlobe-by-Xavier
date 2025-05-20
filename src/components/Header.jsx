import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  // ✅ Get cartItems from Redux
  const cartItems = useSelector((state) => state.cart.cartItems);

  // ✅ Calculate total quantity in cart
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header
      style={{
        padding: '1rem',
        background: '#282c34',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <h2 style={{ margin: 0 }}>ShoppyGlobe</h2>
      <nav>
        <Link
          to="/"
          style={{ color: 'white', marginRight: '1rem', textDecoration: 'none' }}
        >
          Home
        </Link>
        <Link
          to="/cart"
          style={{ color: 'white', textDecoration: 'none' }}
        >
          Cart 🛒
          <span
            style={{
              background: 'white',
              color: '#282c34',
              padding: '2px 6px',
              borderRadius: '10px',
              marginLeft: '4px',
              fontWeight: 'bold'
            }}
          >
            {totalQuantity}
          </span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
