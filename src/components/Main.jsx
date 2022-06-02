import React from 'react';

export default function Main(props) {
  const {products} = props;
  return <main>
  <h2>Products</h2>
 <div className="row">
   {products.map((product) => (
      <Product key={product.id} product= {product}></Product>
   ))}
 </div>
  </main>
}