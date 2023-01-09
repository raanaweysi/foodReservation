import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cartContext";
import { useContext } from "react";




const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartContext = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount
  }, 0);
  return ( 
    <button onClick={props.onclick} className={classes.button}>
      <span className={classes.icon}><CartIcon/></span>
      <span>your cart</span>
      <span className={classes.badge}>{numberOfCartContext}</span>
    </button>
   );
}
 
export default HeaderCartButton;