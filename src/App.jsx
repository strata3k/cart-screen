import React, { useState } from 'react';

import Basket from './components/Basket.jsx';
import Main from './components/Main.jsx';
import Header from './components/Header.jsx';
import data from './data';
import { useState } from 'react';

function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find(x => x.id === product.id);
    if(exist) {
      setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty +1} : x
        )
      );
    } else {
      setCartItems([...cartItems, {...products, qty: 1}])
      
    }
  };
  return (
    <div className="App">
      <Header></Header>
      <div className="row">
        <Main products={products}></Main>
        <Basket cartItems={cartItems}></Basket>
      </div>
    </div>
  );
}

export default App;