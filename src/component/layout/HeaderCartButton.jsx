import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cartContext";
import { useContext, useEffect, useState } from "react";




const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const numberOfCartContext = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount
  }, 0);

  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

  useEffect(()=>{
    if(cartCtx.items.length === 0){
      return
    }
    setBtnIsHighlighted(true);

    
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false)
    }, 300);

    return()=>{
      clearTimeout(timer)
    }
  },[cartCtx]);

  return ( 
    <button onClick={props.onclick} className={btnClasses}>
      <span className={classes.icon}><CartIcon/></span>
      <span className={classes.text}>your cart</span>
      <span className={classes.badge}>{numberOfCartContext}</span>
    </button>
   );
}
 
export default HeaderCartButton;