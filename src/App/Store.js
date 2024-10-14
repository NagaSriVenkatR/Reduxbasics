import { configureStore } from "@reduxjs/toolkit";
const initialState = {
  cart: []
};
const cartReducer = (state = initialState,action) =>{
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        cart: [...state.cart,action.payload]
      }
    case 'REMOVE_ITEM':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id)
      };
    default:
      return state;
  }
};
const store = configureStore({
  reducer: cartReducer
});
export default store;