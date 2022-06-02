import React from 'react';

export default function Basket(props) {
  const {cartItems, onAdd} = props
  return <aside className="block col-1">
  <h2>Cart Items</h2>
    <div>
      {cartItems.length === 0 && <div>Cart Is Empty</div>}
    </div>
    {cartItems.map((item) => (
      <div key={item.id} className="row">
        <div>{item.name}</div>
        <div>
          <button onClick={() =>onAdd(item)} className="add">+</button>
        </div>
      </div>
    ))}
  </aside>;
}