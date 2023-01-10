import Modal from "../UI/Modal";
import calsses from "./cart.module.css";
import CartContext from "../../store/cartContext";
import { useContext } from "react";
import CartItem from "./cartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const hasItem = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id)=> {
    cartCtx.removeItem(id)
  }
  const cartItemAddHandler = (item)=> {
    cartCtx.addItem({...item, amount: 1})
  }

  const cartItem = (
    <ul className={calsses['cart-items']}>
      {cartCtx.items.map((item, i) => (
        <CartItem
          key={i}
          id={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove={cartItemRemoveHandler.bind(null,item.id)}
          onAdd={cartItemAddHandler.bind(null,item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClick={props.onClose}>
      {cartItem}
      <div className={calsses.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={calsses.actions}>
        <button onClick={props.onClose} className={calsses["button--alt"]}>
          Close
        </button>
        {hasItem && <button className={calsses.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
