import React from 'react';
import Header from './components/Header';
import AppRoutes from './routes/Routes';

function App() {
  return (
    <>
      <Header />
      <main style={{ padding: '1rem' }}>
        <AppRoutes />
      </main>
    </>
  );
}

export default App;
