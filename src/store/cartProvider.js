import {React} from "react";
import { useReducer } from "react";
import CartContext from "./cartContext";

const defaultCartState = {
  items: [],
  totalAmount: 0
};

const cartReducer = (state,action) => {
  
  if(action.type === "ADD_ITEM"){
    const updateTotalAmount = state.totalAmount + action.item.price * action.item.amount;

    const existingItemCartIndex = state.items.findIndex(
      item => item.id === action.item.id);
    const existingItemCart = state.items[existingItemCartIndex];
    let updateItems;
  
    if(existingItemCart) {
      const updateItem = {
        ...existingItemCart,
        amount: existingItemCart.amount + action.item.amount
      };
      updateItems = [...state.items];
      updateItems[existingItemCartIndex] = updateItem;
    } else {
  
      updateItems = state.items.concat(action.item);   
    };
    return {
      items : updateItems,
      totalAmount: updateTotalAmount
    };
  };
  if(action.type === 'REMOVE'){
    const existingItemIndex = state.items.findIndex(
      item => item.id === action.id);
      const existingItem = state.items[existingItemIndex];
      const updateTotalAmount = state.totalAmount - existingItem.price;
    let updateItems;

    if(existingItem.amount === 1) {
     updateItems = state.items.filter(item => item.id !== action.id);
    } else {
      const updateItem = {
        ...existingItem,
        amount: existingItem.amount - 1
      };
      updateItems = [...state.items];
      updateItems[existingItemIndex]= updateItem;
    }
    return {
      items: updateItems,
      totalAmount: updateTotalAmount
    }
  }
  return defaultCartState;
};
 
const CartProvider = (props) => {

  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = item => {
    dispatchCartAction({type: "ADD_ITEM", item: item})
  };


  const removeItemToCartHandler = id => {
    dispatchCartAction({type: "REMOVE", id: id})
  };


  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler
  }

  return ( 
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
   );
}
 
export default CartProvider;