import Modal from "../UI/Modal";
import calsses from "./cart.module.css";

const Cart = (props) => {
  const cartItem = [{ id: "c1", name: "sushi", amount: 2, price: 56.99 }].map(
    (item,i) => {<li>{item.name}</li>} 
  );

  
  return (
    <Modal onClick={props.onClose}>
      {cartItem}
      <div className={calsses.total}>
        <span>Total Amount</span>
        <span>56.99</span>
      </div>
      <div className={calsses.actions}>
        <button onClick={props.onClose} className={calsses['button--alt']}>Close</button>
        <button className={calsses.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
