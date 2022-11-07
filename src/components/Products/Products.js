import React, { useState } from 'react';
import './Products.css';

import { balloons } from '../../data';

const Products = () => {

  // initialize useState
  const [products, setProducts] = useState(balloons);

  return (
    <section className='products-container'>
      {
        products.map((product) => {

          const {id, img, name, price} = product;

          return (
            <article key={id} className='product'>
              <img src={img} alt={name} />
              <p>{name}</p>
              <p>{price}</p>
            </article>
          )
        })
      }
    </section>
  );
}

export default Products;