import Modal from "../UI/Modal";
import calsses from "./cart.module.css";
import CartContext from "../../store/cartContext";
import { useContext } from "react";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const hasItem = cartCtx.items.length > 0;

  const cartItem = <ul> {cartCtx.items.map(
    (item,i) => <li>{item.name}</li>
  )}
  </ul>
  ;

  
  return (
    <Modal onClick={props.onClose}>
      {cartItem}
      <div className={calsses.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={calsses.actions}>
        <button onClick={props.onClose} className={calsses['button--alt']}>Close</button>
       {hasItem  && <button className={calsses.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
