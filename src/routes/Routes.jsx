import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const ProductList = lazy(() => import('../components/ProductList'));
const ProductDetail = lazy(() => import('../components/ProductDetail'));
const Cart = lazy(() => import('../components/Cart'));
const NotFound = lazy(() => import('../components/NotFound'));

const Loading = () => (
  <div style={{ textAlign: 'center', marginTop: '2rem', fontSize: '1.2rem' }}>
    Loading, please wait...
  </div>
);

function AppRoutes() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
