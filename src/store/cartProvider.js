import {React} from "react";
import { useReducer } from "react";
import catrContext from "./cartContext";

const defaultCartState = {
  items: [],
  totalAmount: 0
};

const cartReducer = (state,action) => {
  if(action.type === "ADD_ITEM"){
    const updateItem = state.items.concat(action.item);
    const updateTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    return {
      item : updateItem,
      totalAmount: updateTotalAmount
    };
  };
  return defaultCartState;
};
 
const CartProvider = (props) => {

  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({type: "ADD_ITEM", item: item})
  };


  const removeItemToCartHandler = (id) => {
    dispatchCartAction({type: "REMOVE", id: id})
  };


  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler
  }

  return ( 
    <catrContext.Provider value={cartContext}>
      {props.children}
    </catrContext.Provider>
   );
}
 
export default CartProvider;