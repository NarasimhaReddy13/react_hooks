import React from 'react'

import products from '../data';
import ProductCard from '../Components/ProductCard';

import './HomeScreen.css'

const HomeScreen = () => {
    return (
      <div className='products__wrapper'>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  };
export default HomeScreen
