import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import './productList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
 
  const apiUrl = 'https://thingproxy.freeboard.io/fetch/https://greet.bg/wp-json/wc/store/products?page=1';
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  

  const handleOrderByChange = (event) => {
    const selectedOrder = event.target.value;
    
    let orderedProducts = [...products];

    if (selectedOrder === 'name') {
      orderedProducts.sort((a, b) => a.name.localeCompare(b.name));
    }
    setProducts(orderedProducts);
  };

  return (
    <div className="product-list">
    <div className="filters">
      <select onChange={handleOrderByChange}>
        <option value="">Order by</option>
        <option value="name">Name</option>
      </select>
    </div>

      <div className="cards-container">
        {products.map((product) => (
          <Card
            key={product.id}
            images={product.images}
            name={product.name}
            short_description={product.short_description}
            category={product.categories[0].name} 
            productId={product.id}
          />
        ))}
      </div>
    </div>
  );
};


export default ProductList;






