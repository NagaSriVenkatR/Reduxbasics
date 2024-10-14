import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { addItem,removeItem } from "./Action";
const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleAddItem = () => {
    const newItem = {id: Math.random(),name:'Apple',quantity : 1};
    dispatch(addItem(newItem));
  };
  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };
  return (
    <div>
      <div>
        <h2>Shopping Cart</h2>
        <button onClick={handleAddItem}>Add Item</button>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - Quantity : {item.quantity}
              <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default Cart;