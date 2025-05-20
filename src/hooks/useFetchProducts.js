import { useState, useEffect } from 'react';

export function useFetchProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        const nonVeganWords = ['beef', 'chicken', 'egg', 'fish'];

        const filteredProducts = data.products.filter(product => {
          const title = product.title.toLowerCase();
          const description = product.description.toLowerCase();

          // Return true only if no non-vegan words are found in title or description
          return !nonVeganWords.some(word => title.includes(word) || description.includes(word));
        });

        setProducts(filteredProducts);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch products');
        setLoading(false);
      });
  }, []);

  return { products, loading, error };
}
