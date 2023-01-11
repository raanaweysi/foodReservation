import CartContext from "../../../store/cartContext";
import { Fragment, useContext } from "react";
import classes from "./Mealitem.module.css";
import MealItemForm from "../MealItem/mealItemForm";



const MealItem = (props) => {

  const cartCtx = useContext(CartContext);

  const AddToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name:props.name,
      amount: amount,
      price: props.price
    });
  };

  const price = (`$${props.price.toFixed(2)}`);
  return ( 
   <Fragment>
    <li className={classes.meal}>
    <div>
      <h3>{props.name}</h3>
      <div className={classes.description}>{props.description}</div>
      <div className={classes.price}>{price}</div>
    </div>
    <div className={classes.continer}><MealItemForm onAddToCart={AddToCartHandler} /></div>
    </li>
   </Fragment>
   );
}
 
export default MealItem;